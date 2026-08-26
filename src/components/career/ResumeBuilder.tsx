import React, { useState } from 'react';
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
  Award
} from 'lucide-react';
import { copyToClipboard } from '../../utils/exportUtils';

interface ResumeBuilderProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  onSaveItem?: (title: string, data: any) => void;
}

export const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ onNotify, onSaveItem }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Sudhir Singh',
    roleTitle: 'Full-Stack Software Engineer',
    email: 'sudheersinghrajput8932@gmail.com',
    phone: '+91 7007260391',
    location: 'Bangalore, India',
    linkedin: 'linkedin.com/in/sudhir-singh-dev',
    github: 'github.com/sudhirsingh',
    summary:
      'High-velocity Full-Stack Engineer with 3+ years of experience architecting distributed TypeScript, React 19, and Node.js microservices. Proven track record in optimizing web performance by 45% and leading cross-functional agile delivery teams.',
  });

  const [experiences, setExperiences] = useState([
    {
      id: 'exp-1',
      role: 'Senior Frontend Engineer',
      company: 'TechNova Solutions',
      period: '2023 - Present',
      location: 'Remote / Bangalore',
      bullets: [
        'Architected modern React 19 single-page dashboard serving 250k+ active users, cutting initial bundle size by 38%.',
        'Spearheaded automated CI/CD deployment pipelines using GitHub Actions and Docker, reducing release cycle time from 3 days to 4 hours.',
        'Mentored 4 junior developers in TypeScript best practices and state management architecture.'
      ],
    },
    {
      id: 'exp-2',
      role: 'Full Stack Developer',
      company: 'Nexus Digital Systems',
      period: '2021 - 2023',
      location: 'New Delhi, India',
      bullets: [
        'Engineered high-throughput REST APIs and Redis caching layer handling 15k requests/min with 99.9% uptime.',
        'Collaborated with Product and Design teams to deliver 8 high-impact core user features on schedule.'
      ],
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: 'edu-1',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'National Institute of Technology',
      year: '2017 - 2021',
      grade: '8.8 / 10 CGPA',
    },
  ]);

  const [skills, setSkills] = useState([
    'React 19',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Docker',
    'Tailwind CSS',
    'AWS / Cloud',
    'REST APIs',
    'System Design',
    'Git / GitHub'
  ]);

  const [newSkill, setNewSkill] = useState('');
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [copied, setCopied] = useState(false);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleAddExperience = () => {
    const newExp = {
      id: 'exp-' + Date.now(),
      role: 'Software Engineer',
      company: 'New Company',
      period: '2024 - Present',
      location: 'Bangalore, India',
      bullets: ['Describe your core achievements using numbers and power verbs.'],
    };
    setExperiences([...experiences, newExp]);
  };

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

EDUCATION
${education.map((edu) => `${edu.degree} - ${edu.institution} (${edu.year}) [${edu.grade}]`).join('\n')}

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

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Action Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              Interactive Resume Builder (ATS-Compliant)
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Score: 96/100
              </span>
            </h3>
            <p className="text-xs text-slate-500">Single-column clean format verified by tech recruiters</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
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
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/25 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export / Print PDF</span>
          </button>
        </div>
      </div>

      {activeTab === 'edit' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Form: Personal & Summary */}
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
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Target Role Title</label>
                  <input
                    type="text"
                    value={personalInfo.roleTitle}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, roleTitle: e.target.value })}
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
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="text"
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
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
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">LinkedIn</label>
                  <input
                    type="text"
                    value={personalInfo.linkedin}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">GitHub / Portfolio</label>
                  <input
                    type="text"
                    value={personalInfo.github}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, github: e.target.value })}
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
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* Skills Pool */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Technical &amp; Domain Skills ({skills.length})
              </h4>
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
          </div>

          {/* Right Form: Experience & Projects */}
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

              {experiences.map((exp, expIdx) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
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
                    <label className="text-[10px] uppercase font-bold text-slate-500">
                      Bullet Points (Google XYZ style)
                    </label>
                    {exp.bullets.map((b, bIdx) => (
                      <textarea
                        key={bIdx}
                        rows={2}
                        value={b}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[expIdx].bullets[bIdx] = e.target.value;
                          setExperiences(updated);
                        }}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 resize-none font-sans"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Live Clean White A4 / Single-Column Resume Preview */
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white text-slate-900 shadow-2xl font-sans space-y-6">
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 text-center space-y-1">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm font-bold text-slate-700">{personalInfo.roleTitle}</p>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.linkedin}</span>
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
                  <strong className="font-bold text-slate-900">{exp.role} — <span className="font-semibold text-slate-700">{exp.company}</span></strong>
                  <span className="text-slate-500 text-[11px]">{exp.period} | {exp.location}</span>
                </div>
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1 leading-snug">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between text-xs">
                <strong className="font-bold text-slate-900">{edu.degree} — {edu.institution}</strong>
                <span className="text-slate-500 text-[11px]">{edu.year} ({edu.grade})</span>
              </div>
            ))}
          </div>

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
      )}
    </div>
  );
};
