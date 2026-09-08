import React, { useMemo, useState } from 'react';
import {
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  Download,
  Copy,
  Check,
  Plus,
  Trash2,
  Eye,
  Edit3,
  Award,
  Wand2,
  Crown,
  FolderGit2,
  BadgeCheck,
  FileJson,
  Palette
} from 'lucide-react';
import { copyToClipboard } from '../../utils/exportUtils';

interface ResumeBuilderProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  onSaveItem?: (title: string, data: any) => void;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tech: string;
}

type TemplateId = 'modern' | 'executive' | 'minimal';

const TEMPLATES: Record<
  TemplateId,
  { label: string; from: string; to: string; text: string; bg: string; border: string; align: 'center' | 'left' }
> = {
  modern: {
    label: 'Modern',
    from: 'from-indigo-600',
    to: 'to-violet-600',
    text: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    align: 'center'
  },
  executive: {
    label: 'Executive',
    from: 'from-slate-800',
    to: 'to-slate-950',
    text: 'text-slate-800',
    bg: 'bg-slate-100',
    border: 'border-slate-300',
    align: 'left'
  },
  minimal: {
    label: 'Minimal',
    from: 'from-emerald-600',
    to: 'to-teal-600',
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    align: 'center'
  }
};

const POWER_VERBS = [
  'Architected', 'Spearheaded', 'Optimized', 'Engineered', 'Delivered',
  'Accelerated', 'Streamlined', 'Pioneered', 'Orchestrated', 'Transformed'
];

export const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ onNotify, onSaveItem }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    roleTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    summary: '',
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);

  const [education, setEducation] = useState<EducationItem[]>([]);

  const [certifications, setCertifications] = useState<Certification[]>([]);

  const [projects, setProjects] = useState<ProjectItem[]>([]);

  const [skills, setSkills] = useState<string[]>([]);

  const [newSkill, setNewSkill] = useState('');
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>('modern');
  const [copied, setCopied] = useState(false);

  const tpl = TEMPLATES[activeTemplate];

  // ---------- Derived: ATS Score & Resume Strength ----------
  const atsScore = useMemo(() => {
    let score = 35;
    if (personalInfo.fullName.trim()) score += 5;
    if (personalInfo.summary.trim().length > 80) score += 10;
    if (personalInfo.linkedin.trim()) score += 5;
    if (experiences.length >= 2) score += 15;
    if (experiences.some((exp) => exp.bullets.some((b) => /\d/.test(b)))) score += 10;
    if (skills.length >= 8) score += 10;
    if (education.length >= 1) score += 5;
    if (certifications.length >= 1) score += 3;
    if (projects.length >= 1) score += 2;
    return Math.min(100, score);
  }, [personalInfo, experiences, skills, education, certifications, projects]);

  const strengthLabel = atsScore >= 90 ? 'Excellent' : atsScore >= 75 ? 'Strong' : atsScore >= 55 ? 'Fair' : 'Needs Work';
  const circumference = 2 * Math.PI * 26;
  const dashOffset = circumference - (atsScore / 100) * circumference;

  // ---------- Skills ----------
  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  // ---------- Experience ----------
  const handleAddExperience = () => {
    const newExp: Experience = {
      id: 'exp-' + Date.now(),
      role: 'Software Engineer',
      company: 'New Company',
      period: '2024 - Present',
      location: 'Bangalore, India',
      bullets: ['Describe your core achievements using numbers and power verbs.'],
    };
    setExperiences([...experiences, newExp]);
  };
  const handleRemoveExperience = (id: string) => {
    setExperiences(experiences.filter((e) => e.id !== id));
  };
  const handleAddBullet = (expIdx: number) => {
    const updated = [...experiences];
    updated[expIdx].bullets.push('Describe another achievement with a measurable result.');
    setExperiences(updated);
  };
  const handleRemoveBullet = (expIdx: number, bIdx: number) => {
    const updated = [...experiences];
    updated[expIdx].bullets = updated[expIdx].bullets.filter((_, i) => i !== bIdx);
    setExperiences(updated);
  };
  const handleEnhanceBullet = (expIdx: number, bIdx: number) => {
    const updated = [...experiences];
    let bullet = updated[expIdx].bullets[bIdx].trim();
    const startsWithVerb = POWER_VERBS.some((v) => bullet.startsWith(v));
    const hasNumber = /\d/.test(bullet);

    if (!startsWithVerb) {
      const verb = POWER_VERBS[Math.floor(Math.random() * POWER_VERBS.length)];
      bullet = `${verb} ${bullet.charAt(0).toLowerCase()}${bullet.slice(1)}`;
    }
    if (!hasNumber) {
      bullet = bullet.replace(/\.$/, '') + ', driving a measurable improvement in key metrics.';
    }
    updated[expIdx].bullets[bIdx] = bullet;
    setExperiences(updated);
    onNotify('success', 'Bullet Enhanced', 'Rewritten with a stronger action verb and quantifiable framing.');
  };

  // ---------- Education ----------
  const handleAddEducation = () => {
    setEducation([
      ...education,
      { id: 'edu-' + Date.now(), degree: 'Degree / Certification', institution: 'Institution Name', year: '20XX - 20XX', grade: '' }
    ]);
  };
  const handleRemoveEducation = (id: string) => {
    setEducation(education.filter((e) => e.id !== id));
  };

  // ---------- Certifications ----------
  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      { id: 'cert-' + Date.now(), name: 'Certification Name', issuer: 'Issuing Body', year: new Date().getFullYear().toString() }
    ]);
  };
  const handleRemoveCertification = (id: string) => {
    setCertifications(certifications.filter((c) => c.id !== id));
  };

  // ---------- Projects ----------
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { id: 'proj-' + Date.now(), name: 'Project Name', description: 'One-line impact-driven description.', tech: 'Tech, Stack, Used' }
    ]);
  };
  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // ---------- Export ----------
  const handleCopyPlainText = async () => {
    const text = `
========================================
${personalInfo.fullName.toUpperCase()}
${personalInfo.roleTitle}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
========================================

PROFESSIONAL SUMMARY
${personalInfo.summary}

WORK EXPERIENCE
${experiences
  .map(
    (exp) => `
${exp.role} | ${exp.company} (${exp.period}) - ${exp.location}
${exp.bullets.map((b) => `• ${b}`).join('\n')}
`
  )
  .join('\n')}

PROJECTS
${projects.map((p) => `${p.name} — ${p.tech}\n${p.description}`).join('\n\n')}

EDUCATION
${education.map((edu) => `${edu.degree} - ${edu.institution} (${edu.year}) [${edu.grade}]`).join('\n')}

CERTIFICATIONS
${certifications.map((c) => `${c.name} — ${c.issuer} (${c.year})`).join('\n')}

TECHNICAL SKILLS
${skills.join(', ')}
`;

    const ok = await copyToClipboard(text.trim());
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onNotify('success', 'Resume Plaintext Copied', 'Paste into your job portal application or text editor.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadBackup = () => {
    const data = { personalInfo, experiences, education, certifications, projects, skills, template: activeTemplate };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${personalInfo.fullName.trim().replace(/\s+/g, '_') || 'resume'}_backup.json`;
    a.click();
    URL.revokeObjectURL(url);
    onNotify('success', 'Backup Saved', 'Your resume data has been downloaded as a JSON backup.');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Print isolation: when printing, hide EVERYTHING on the page (including the
          app shell / tools sidebar outside this component) except the resume itself. */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #resume-print-area,
          #resume-print-area * {
            visibility: visible !important;
          }
          #resume-print-area {
            display: block !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 24px !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* Premium Action Header */}
      <div className={`relative overflow-hidden rounded-2xl border ${tpl.border} bg-white shadow-sm print:hidden`}>
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tpl.from} ${tpl.to}`} />
        <div className="flex items-center justify-between flex-wrap gap-4 p-4 pt-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* ATS score donut */}
              <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="url(#atsGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="atsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-black text-slate-900">{atsScore}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 flex-wrap">
                Interactive Resume Builder
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm">
                  <Crown className="w-2.5 h-2.5" />
                  PRO
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                ATS Score <span className="font-semibold text-slate-700">{atsScore}/100</span> · Resume Strength{' '}
                <span className="font-semibold text-slate-700">{strengthLabel}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Template switcher */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200">
              <Palette className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
              {(Object.keys(TEMPLATES) as TemplateId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => setActiveTemplate(id)}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                    activeTemplate === id
                      ? `bg-white shadow-sm ${TEMPLATES[id].text}`
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {TEMPLATES[id].label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setActiveTab(activeTab === 'edit' ? 'preview' : 'edit')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
            >
              {activeTab === 'edit' ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              <span>{activeTab === 'edit' ? 'Preview Mode' : 'Edit Mode'}</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadBackup}
              title="Download a JSON backup of your resume data"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
            >
              <FileJson className="w-3.5 h-3.5" />
              <span>Backup</span>
            </button>

            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r ${tpl.from} ${tpl.to} hover:opacity-90 text-white text-xs font-bold transition-all shadow-md cursor-pointer`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export / Print PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className={`${activeTab === 'edit' ? '' : 'hidden'} print:hidden`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Form: Personal, Skills, Certifications */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-indigo-600" />
                <span>Contact &amp; Personal Details</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Target Role Title</label>
                  <input
                    type="text"
                    value={personalInfo.roleTitle}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, roleTitle: e.target.value })}
                    placeholder="e.g. Full-Stack Software Engineer"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="text"
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Location</label>
                  <input
                    type="text"
                    value={personalInfo.location}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                    placeholder="City, Country"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">LinkedIn</label>
                  <input
                    type="text"
                    value={personalInfo.linkedin}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                    placeholder="linkedin.com/in/yourname"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">GitHub / Portfolio</label>
                  <input
                    type="text"
                    value={personalInfo.github}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, github: e.target.value })}
                    placeholder="github.com/yourname"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-700">Executive Summary</label>
                <textarea
                  rows={3}
                  value={personalInfo.summary}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                  placeholder="2-3 lines summarizing your experience, key skills, and biggest impact."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* Skills Pool */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Technical &amp; Domain Skills ({skills.length})
              </h4>
              {skills.length === 0 && (
                <p className="text-[11px] text-slate-400">No skills added yet — add a few below.</p>
              )}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-xs font-semibold text-indigo-700 border border-indigo-200"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  placeholder="Add skill (e.g. Kubernetes, GraphQL)"
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                  <BadgeCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Certifications</span>
                </h4>
                <button
                  type="button"
                  onClick={handleAddCertification}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              {certifications.length === 0 && (
                <p className="text-[11px] text-slate-400">No certifications added yet.</p>
              )}

              {certifications.map((cert, idx) => (
                <div key={cert.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => {
                        const updated = [...certifications];
                        updated[idx].name = e.target.value;
                        setCertifications(updated);
                      }}
                      className="flex-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-900"
                    />
                    <button
                      onClick={() => handleRemoveCertification(cert.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => {
                        const updated = [...certifications];
                        updated[idx].issuer = e.target.value;
                        setCertifications(updated);
                      }}
                      placeholder="Issuing organization"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-700"
                    />
                    <input
                      type="text"
                      value={cert.year}
                      onChange={(e) => {
                        const updated = [...certifications];
                        updated[idx].year = e.target.value;
                        setCertifications(updated);
                      }}
                      placeholder="Year"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form: Experience, Projects, Education */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Work Experience</span>
                </h4>
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Role</span>
                </button>
              </div>

              {experiences.length === 0 && (
                <p className="text-[11px] text-slate-400">No work experience added yet — click "Add Role" to get started.</p>
              )}

              {experiences.map((exp, expIdx) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[expIdx].role = e.target.value;
                          setExperiences(updated);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-900"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[expIdx].company = e.target.value;
                          setExperiences(updated);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveExperience(exp.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer shrink-0"
                      title="Remove this role"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => {
                        const updated = [...experiences];
                        updated[expIdx].period = e.target.value;
                        setExperiences(updated);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600"
                    />
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => {
                        const updated = [...experiences];
                        updated[expIdx].location = e.target.value;
                        setExperiences(updated);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] uppercase font-bold text-slate-500">
                        Bullet Points (Google XYZ style)
                      </label>
                      <button
                        onClick={() => handleAddBullet(expIdx)}
                        className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        Add bullet
                      </button>
                    </div>
                    {exp.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5">
                        <textarea
                          rows={2}
                          value={b}
                          onChange={(e) => {
                            const updated = [...experiences];
                            updated[expIdx].bullets[bIdx] = e.target.value;
                            setExperiences(updated);
                          }}
                          className="flex-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 resize-none font-sans"
                        />
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => handleEnhanceBullet(expIdx, bIdx)}
                            title="Enhance with power verbs & metrics"
                            className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white hover:opacity-90 cursor-pointer"
                          >
                            <Wand2 className="w-3 h-3" />
                          </button>
                          {exp.bullets.length > 1 && (
                            <button
                              onClick={() => handleRemoveBullet(expIdx, bIdx)}
                              title="Remove bullet"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                  <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Projects</span>
                </h4>
                <button
                  type="button"
                  onClick={handleAddProject}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {projects.length === 0 && <p className="text-[11px] text-slate-400">No projects added yet.</p>}

              {projects.map((proj, idx) => (
                <div key={proj.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <input
                      type="text"
                      value={proj.name}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].name = e.target.value;
                        setProjects(updated);
                      }}
                      className="flex-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-900"
                    />
                    <button
                      onClick={() => handleRemoveProject(proj.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={proj.description}
                    onChange={(e) => {
                      const updated = [...projects];
                      updated[idx].description = e.target.value;
                      setProjects(updated);
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 resize-none"
                  />
                  <input
                    type="text"
                    value={proj.tech}
                    onChange={(e) => {
                      const updated = [...projects];
                      updated[idx].tech = e.target.value;
                      setProjects(updated);
                    }}
                    placeholder="Tech stack used"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600"
                  />
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Education</span>
                </h4>
                <button
                  type="button"
                  onClick={handleAddEducation}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              {education.length === 0 && (
                <p className="text-[11px] text-slate-400">No education added yet — click "Add" to get started.</p>
              )}

              {education.map((edu, idx) => (
                <div key={edu.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx].degree = e.target.value;
                        setEducation(updated);
                      }}
                      className="flex-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-900"
                    />
                    <button
                      onClick={() => handleRemoveEducation(edu.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => {
                      const updated = [...education];
                      updated[idx].institution = e.target.value;
                      setEducation(updated);
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx].year = e.target.value;
                        setEducation(updated);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600"
                    />
                    <input
                      type="text"
                      value={edu.grade}
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx].grade = e.target.value;
                        setEducation(updated);
                      }}
                      placeholder="Grade / CGPA"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live Resume Preview — always mounted so it's available to print regardless
          of which tab is active on screen; visibility on-screen is controlled by
          activeTab, visibility when printing is forced by the #resume-print-area rule above. */}
      <div id="resume-print-area" className={activeTab === 'preview' ? '' : 'hidden'}>
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white text-slate-900 shadow-2xl font-sans space-y-6 relative overflow-hidden">
          <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${tpl.from} ${tpl.to}`} />

          {/* Header */}
          <div
            className={`border-b border-slate-300 pb-4 space-y-1 ${
              tpl.align === 'center' ? 'text-center' : 'text-left'
            }`}
          >
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">{personalInfo.fullName}</h1>
            <p className={`text-sm font-bold ${tpl.text}`}>{personalInfo.roleTitle}</p>
            <div
              className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 pt-1 ${
                tpl.align === 'center' ? 'justify-center' : 'justify-start'
              }`}
            >
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.linkedin}</span>
              {personalInfo.github && (
                <>
                  <span>•</span>
                  <span>{personalInfo.github}</span>
                </>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">{personalInfo.summary}</p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Work Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <strong className="font-bold text-slate-900">
                    {exp.role} — <span className="font-semibold text-slate-700">{exp.company}</span>
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1 leading-snug">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          {projects.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Projects
              </h2>
              {projects.map((p) => (
                <div key={p.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline text-xs">
                    <strong className="font-bold text-slate-900">{p.name}</strong>
                    <span className="text-slate-500 text-[11px]">{p.tech}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-snug">{p.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between text-xs">
                <strong className="font-bold text-slate-900">
                  {edu.degree} — {edu.institution}
                </strong>
                <span className="text-slate-500 text-[11px]">
                  {edu.year} {edu.grade && `(${edu.grade})`}
                </span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="space-y-1.5">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Certifications
              </h2>
              <ul className="text-xs text-slate-700 space-y-0.5">
                {certifications.map((c) => (
                  <li key={c.id} className="flex justify-between">
                    <span>
                      {c.name} — {c.issuer}
                    </span>
                    <span className="text-slate-500 text-[11px]">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Technical Core Competencies
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Core Technologies:</strong> {skills.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
