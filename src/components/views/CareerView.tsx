import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  FileText,
  Mic,
  Compass,
  CheckCircle2,
  DollarSign,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  BookOpen,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { ResumeBuilder } from '../career/ResumeBuilder';
import { AiResumeAssistant } from '../ai/AiResumeAssistant';
import { AiInterviewCoach } from '../ai/AiInterviewCoach';
import { CalculatorsHub } from '../calculators/CalculatorsHub';
import { CAREER_ROADMAPS } from '../../data/careerRoadmapsData';
import { copyToClipboard } from '../../utils/exportUtils';

interface CareerViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onSaveItem?: (title: string, data: any) => void;
  initialSubTab?: string;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const CareerView: React.FC<CareerViewProps> = ({ onNotify, addToast, onSaveItem, initialSubTab }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab || 'resume-builder');
  const [selectedRoadmap, setSelectedRoadmap] = useState(CAREER_ROADMAPS[0]);
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  const handleCopyChecklist = async (text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedChecklist(true);
      setTimeout(() => setCopiedChecklist(false), 2000);
      onNotify('success', 'Checklist Copied', 'Paste into Notion, Notes, or your daily planner.');
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Top Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-black shadow-md shadow-indigo-600/25 shrink-0">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex flex-wrap items-center gap-2 tracking-tight">
              <span>Career Solutions Hub</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                For Students &amp; Job Seekers
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Tools, templates, roadmaps, and AI assistants designed to land your dream placement.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Sub Navigation Bar with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="flex items-center gap-2 overflow-x-auto pb-1 p-2 rounded-2xl bg-white border border-slate-200 shadow-xs custom-scrollbar"
      >
        <button
          onClick={() => setActiveSubTab('resume-builder')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'resume-builder'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Interactive Resume Builder</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ai-resume')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'ai-resume'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Resume Assistant (ATS)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ai-interview')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'ai-interview'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Mic className="w-4 h-4" />
          <span>AI Interview Coach (STAR)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('roadmaps')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'roadmaps'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Career Roadmaps</span>
        </button>

        <button
          onClick={() => setActiveSubTab('salary-calc')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'salary-calc'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Salary Calculator (CTC)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('checklists')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'checklists'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Job &amp; LinkedIn Checklists</span>
        </button>
      </motion.div>

      {/* 3. Subtab Contents */}
      {activeSubTab === 'resume-builder' && (
        <ResumeBuilder onNotify={onNotify} onSaveItem={onSaveItem} />
      )}

      {activeSubTab === 'ai-resume' && (
        <AiResumeAssistant onNotify={onNotify} onSaveItem={onSaveItem} />
      )}

      {activeSubTab === 'ai-interview' && (
        <AiInterviewCoach onNotify={onNotify} />
      )}

      {activeSubTab === 'salary-calc' && (
        <CalculatorsHub onNotify={onNotify} defaultTab="salary" />
      )}

      {activeSubTab === 'roadmaps' && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Roadmap Selector Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Select Career Track
            </h3>
            {CAREER_ROADMAPS.map((roadmap) => (
              <div
                key={roadmap.id}
                onClick={() => setSelectedRoadmap(roadmap)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  selectedRoadmap.id === roadmap.id
                    ? 'bg-indigo-50 border-indigo-500 shadow-xs ring-1 ring-indigo-500/30 text-slate-900'
                    : 'bg-white border-slate-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{roadmap.role}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                    {roadmap.timeline}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-600">
                  <span>Avg India: <strong className="text-emerald-700">{roadmap.avgSalaryIndia}</strong></span>
                  <span className="text-slate-500 font-mono text-[10px]">{roadmap.difficulty}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap Detail View */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">{selectedRoadmap.title}</h2>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">{selectedRoadmap.description}</p>
              </div>
              <div className="sm:text-right">
                <span className="text-[10px] uppercase font-bold text-emerald-700 block">Expected Comp</span>
                <span className="text-xs font-bold text-slate-900">{selectedRoadmap.avgSalaryIndia} (India)</span>
              </div>
            </div>

            {/* Step by Step Phases */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold text-indigo-700 tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Step-by-Step Curriculum</span>
              </h3>

              {selectedRoadmap.phases.map((phase, idx) => (
                <div key={idx} className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700">
                      {phase.phaseName}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-600 font-mono">
                      {phase.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {phase.skillsToLearn.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-[10px] font-medium text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700">
                    <strong className="text-indigo-700 font-semibold">Milestone Project: </strong>
                    {phase.milestoneProject}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications & Interview Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <span className="font-bold text-indigo-700 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-600" /> Recommended Certifications:
                </span>
                <ul className="list-disc pl-4 text-slate-600 text-[11px] space-y-1">
                  {selectedRoadmap.certificationsRecommended.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <span className="font-bold text-purple-700 flex items-center gap-1.5">
                  <Mic className="w-4 h-4 text-purple-600" /> High-Yield Interview Topics:
                </span>
                <ul className="list-disc pl-4 text-slate-600 text-[11px] space-y-1">
                  {selectedRoadmap.interviewFocusAreas.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeSubTab === 'checklists' && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Job Search Checklist */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>21-Day Off-Campus Job Search Checklist</span>
              </h3>
              <button
                onClick={() =>
                  handleCopyChecklist(
                    `21-Day Job Search Checklist:\n• Day 1-3: Resume ATS audit with Google XYZ bullets\n• Day 4-7: Deploy 2 live projects with GitHub code\n• Day 8-14: 5 personalized LinkedIn outreach notes/day\n• Day 15-21: 50 Leetcode Mediums & Behavioral STAR practice`
                  )
                }
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
              >
                {copiedChecklist ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedChecklist ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-slate-300">
                <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-600" />
                <span>Ensure resume is 1-page, single-column, standard font (10-12pt) with ATS score &gt; 85%.</span>
              </label>

              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-slate-300">
                <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-600" />
                <span>Deploy 2 production-grade applications with live working URLs and clean GitHub code.</span>
              </label>

              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-slate-300">
                <input type="checkbox" className="mt-0.5 accent-indigo-600" />
                <span>Identify 20 target hiring managers and send personalized Loom video audits.</span>
              </label>

              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-slate-300">
                <input type="checkbox" className="mt-0.5 accent-indigo-600" />
                <span>Master top 20 STAR behavioral interview answers with quantified metric outcomes.</span>
              </label>
            </div>
          </div>

          {/* LinkedIn Profile Checklist */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>LinkedIn Inbound Recruiter Optimization</span>
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-indigo-700 block font-semibold">1. Headline Architecture:</strong>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  "[Target Role] | Helping [Companies] scale [Metric] with [Key Tech Stack]." Avoid generic "Aspiring Developer".
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-indigo-700 block font-semibold">2. Featured Section Pin:</strong>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  Pin your best project demo video, top technical writeup, or open-source repository.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-indigo-700 block font-semibold">3. Creator Mode &amp; Keywords:</strong>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  Add 5 core skillset hashtags (e.g. #React, #TypeScript, #Cloud) to trigger recruiter search indexing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
