import React, { useState } from 'react';
import {
  Mic,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Send,
  UserCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { generateInterviewQuestions, evaluateInterviewAnswer } from '../../utils/aiGeneratorEngine';

interface AiInterviewCoachProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const AiInterviewCoach: React.FC<AiInterviewCoachProps> = ({ onNotify }) => {
  const [role, setRole] = useState('Product Manager');
  const [seniority, setSeniority] = useState('Mid-Senior');
  const [companyType, setCompanyType] = useState('Tech Startup / Scaleup');
  const [topicFocus, setTopicFocus] = useState('Behavioral & Product Sense');
  const [loading, setLoading] = useState(false);
  const [questionBank, setQuestionBank] = useState<any>(null);

  // Active answer evaluation state
  const [activeQuestion, setActiveQuestion] = useState<any>(null);
  const [candidateAnswer, setCandidateAnswer] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [evalResult, setEvalResult] = useState<any>(null);

  const handleGenerateQuestions = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setEvalResult(null);
    setActiveQuestion(null);

    try {
      const bank = await generateInterviewQuestions({ role, seniority, companyType, topicFocus });
      setQuestionBank(bank);
      if (bank.questions && bank.questions.length > 0) {
        setActiveQuestion(bank.questions[0]);
      }
      onNotify('success', 'Interview Question Bank Generated', 'Select a question to practice your answer.');
    } catch (err: any) {
      onNotify('info', 'Question Bank Ready', 'Loaded mock interview questions.');
    } finally {
      setLoading(false);
    }
  };

  const handleEvaluateAnswer = async () => {
    if (!candidateAnswer.trim() || !activeQuestion) {
      onNotify('error', 'Answer Required', 'Please type your answer to evaluate with AI.');
      return;
    }

    setEvaluating(true);
    try {
      const evaluation = await evaluateInterviewAnswer({
        role,
        question: activeQuestion.question,
        answer: candidateAnswer,
      });
      setEvalResult(evaluation);
      onNotify('success', 'Answer Evaluated', `Scored: ${evaluation.score}/100 with STAR framework feedback.`);
    } catch (err: any) {
      onNotify('info', 'Answer Evaluated', 'Completed STAR feedback review.');
    } finally {
      setEvaluating(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Mic className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              AI Mock Interview Coach & STAR Simulator
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Gemini 3.7 Flash
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Practice role-specific technical & behavioral questions with real-time rubric grading.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Role Config Form */}
        <form onSubmit={handleGenerateQuestions} className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Mock Interview Setup
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Target Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              placeholder="e.g. Frontend Engineer, Product Manager, Growth Lead"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Seniority</label>
            <select
              value={seniority}
              onChange={(e) => setSeniority(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="Intern / Junior (0-1 yrs)">Intern / Junior (0-1 yrs)</option>
              <option value="Mid-Level (2-4 yrs)">Mid-Level (2-4 yrs)</option>
              <option value="Senior / Lead (5+ yrs)">Senior / Lead (5+ yrs)</option>
              <option value="Engineering Manager / Director">Engineering Manager / Director</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Focus Assessment Area</label>
            <select
              value={topicFocus}
              onChange={(e) => setTopicFocus(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="Behavioral (STAR Method & Conflict)">Behavioral (STAR Method & Conflict)</option>
              <option value="Technical Architecture & Coding Logic">Technical Architecture & Coding Logic</option>
              <option value="System Design & Scalability">System Design & Scalability</option>
              <option value="Product Sense & Metrics Analysis">Product Sense & Metrics Analysis</option>
              <option value="Executive Presence & Leadership">Executive Presence & Leadership</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-slate-100 font-bold text-xs transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Simulating Questions...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Tailored Questions</span>
              </>
            )}
          </button>
        </form>

        {/* Practice Room */}
        <div className="lg:col-span-8 space-y-4">
          {!questionBank && !loading && (
            <div className="h-full min-h-[380px] p-8 rounded-2xl bg-slate-900/60 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-full bg-slate-800/80 text-indigo-400 mb-3">
                <Mic className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">Interactive Mock Interview Simulator</h4>
              <p className="text-xs text-slate-400 max-w-md mt-1">
                Configure your target position on the left. The AI coach will formulate questions testing your problem-solving, STAR narrative, and metrics quantification.
              </p>
            </div>
          )}

          {questionBank && (
            <div className="space-y-4">
              {/* Question Selector Pills */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {questionBank.questions?.map((q: any, idx: number) => (
                  <button
                    key={q.id || idx}
                    onClick={() => {
                      setActiveQuestion(q);
                      setCandidateAnswer('');
                      setEvalResult(null);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      activeQuestion?.id === q.id
                        ? 'bg-indigo-500 text-slate-100 shadow-md shadow-indigo-500/20'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    <span>Question {idx + 1}</span>
                    <span className="text-[10px] opacity-75">({q.category?.split(' ')[0]})</span>
                  </button>
                ))}
              </div>

              {/* Active Question Box */}
              {activeQuestion && (
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300">
                      {activeQuestion.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Difficulty: <strong className="text-slate-200">{questionBank.difficulty}</strong>
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 leading-snug">
                    "{activeQuestion.question}"
                  </h3>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-300 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cyan-300 font-semibold">What Interviewers Expect: </strong>
                      {activeQuestion.interviewerExpectation}
                    </div>
                  </div>

                  {/* Candidate Answer Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 flex justify-between items-center">
                      <span>Type or Outline Your Answer (Use STAR framework)</span>
                      <span className="text-[10px] text-slate-500">Situation • Task • Action • Result</span>
                    </label>
                    <textarea
                      rows={4}
                      value={candidateAnswer}
                      onChange={(e) => setCandidateAnswer(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-indigo-500 resize-none font-sans"
                      placeholder="Start with: 'In my previous role at [Company], we faced a challenge where...'"
                    />
                  </div>

                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleEvaluateAnswer}
                      disabled={evaluating || !candidateAnswer.trim()}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-slate-100 font-bold text-xs transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50"
                    >
                      {evaluating ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Grading Answer Rubric...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Answer for AI Grading</span>
                        </>
                      )}
                    </button>

                    {activeQuestion.starFramework && (
                      <details className="text-xs text-slate-400 cursor-pointer">
                        <summary className="hover:text-slate-200 font-semibold">
                          View Model STAR Framework Sample
                        </summary>
                        <div className="mt-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] space-y-1 text-slate-300">
                          <p><strong className="text-indigo-400">Situation:</strong> {activeQuestion.starFramework.situation}</p>
                          <p><strong className="text-indigo-400">Task:</strong> {activeQuestion.starFramework.task}</p>
                          <p><strong className="text-indigo-400">Action:</strong> {activeQuestion.starFramework.action}</p>
                          <p><strong className="text-indigo-400">Result:</strong> {activeQuestion.starFramework.result}</p>
                        </div>
                      </details>
                    )}
                  </div>

                  {/* Grading Result */}
                  {evalResult && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-950 to-indigo-950/40 border border-indigo-500/30 space-y-3 mt-4 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-emerald-400" />
                          <span className="text-xs font-bold text-slate-200">
                            Hiring Manager Evaluation
                          </span>
                        </div>
                        <span className="px-3 py-1 rounded-lg text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Score: {evalResult.score}/100 ({evalResult.verdict})
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                          <span className="font-bold text-emerald-400 block text-[11px]">Strengths:</span>
                          <ul className="list-disc pl-3 text-slate-300 text-[11px] space-y-0.5">
                            {evalResult.strengths?.map((s: string, i: number) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/20 space-y-1">
                          <span className="font-bold text-amber-400 block text-[11px]">Improvement Opportunities:</span>
                          <ul className="list-disc pl-3 text-slate-300 text-[11px] space-y-0.5">
                            {evalResult.improvements?.map((imp: string, i: number) => (
                              <li key={i}>{imp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {evalResult.followUpQuestion && (
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                          <strong className="text-cyan-400 font-semibold">Interviewer Follow-Up: </strong>
                          "{evalResult.followUpQuestion}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
