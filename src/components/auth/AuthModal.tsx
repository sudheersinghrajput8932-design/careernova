import React, { useState } from 'react';
import {
  X,
  User,
  Mail,
  Lock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';
import { UserProfile } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserProfile | null;
  mode?: 'signin' | 'signup' | 'login';
  onLogin?: (profile: UserProfile) => void;
  onLogout?: () => void;
  onSuccess?: (profile: UserProfile) => void;
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  user = null,
  mode: initialMode,
  onLogin,
  onLogout,
  onSuccess,
  onNotify,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(() => {
    if (initialMode === 'signin') return 'login';
    if (initialMode === 'signup') return 'signup';
    return 'signup';
  });
  const [name, setName] = useState('Sudhir Singh');
  const [email, setEmail] = useState('sudheersinghrajput8932@gmail.com');
  const [password, setPassword] = useState('••••••••');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      if (onNotify) {
        onNotify('error', 'Email Required', 'Please enter a valid email address.');
      }
      return;
    }

    const newProfile: UserProfile = {
      name: name.trim() || 'CareerNova Explorer',
      email: email.trim(),
      plan: 'Free',
      savedItemsCount: 3,
      joinDate: 'February 2026',
    };

    if (onSuccess) {
      onSuccess(newProfile);
    }
    if (onLogin) {
      onLogin(newProfile);
    }
    if (onNotify) {
      onNotify('success', mode === 'signup' ? 'Account Created!' : 'Welcome Back!', `Signed in as ${newProfile.name}`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {user ? (
          /* Logged In View */
          <div className="space-y-5 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-500/20">
              {user.name.charAt(0)}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">{user.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{user.email}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 mt-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{user.plan} Tier Account</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Member Since:</span>
                <span className="font-semibold text-slate-900">{user.joinDate}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Cloud Sync:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active (Local Storage)
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  if (onLogout) onLogout();
                  if (onNotify) onNotify('info', 'Signed Out', 'You have been logged out.');
                  onClose();
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          /* Login / Sign Up Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {mode === 'signup' ? 'Create Your CareerNova Account' : 'Welcome Back to CareerNova'}
              </h3>
              <p className="text-xs text-slate-500">
                {mode === 'signup'
                  ? 'Save your resumes, business plans, and AI tools progress.'
                  : 'Access your saved documents and personalized roadmaps.'}
              </p>
            </div>

            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sudhir Singh"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sudheersinghrajput8932@gmail.com"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-600/25 mt-2 cursor-pointer"
            >
              {mode === 'signup' ? 'Create Free Account' : 'Sign In'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer"
              >
                {mode === 'signup'
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up Free"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
