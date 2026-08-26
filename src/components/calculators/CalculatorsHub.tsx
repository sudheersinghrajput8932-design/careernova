import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Percent,
  RefreshCw,
  Copy,
  Check,
  Building2,
  PieChart,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { copyToClipboard } from '../../utils/exportUtils';

interface CalculatorsHubProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  defaultTab?: 'emi' | 'salary' | 'breakeven';
}

export const CalculatorsHub: React.FC<CalculatorsHubProps> = ({ onNotify, defaultTab = 'emi' }) => {
  const [activeCalc, setActiveCalc] = useState<'emi' | 'salary' | 'breakeven'>(defaultTab);

  // --- EMI CALCULATOR STATE ---
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  // EMI Math
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // --- SALARY IN-HAND CALCULATOR STATE (India CTC Breakdown) ---
  const [annualCtc, setAnnualCtc] = useState<number>(1200000); // 12 LPA default
  const [isMetro, setIsMetro] = useState<boolean>(true);

  // Salary Math
  const basicSalary = annualCtc * 0.40; // 40% of CTC
  const hra = basicSalary * (isMetro ? 0.50 : 0.40); // 50% or 40% of Basic
  const employerPf = Math.min(basicSalary * 0.12, 1800 * 12);
  const employeePf = employerPf;
  const professionalTax = 2500; // Standard annual PT
  const specialAllowance = Math.max(0, annualCtc - (basicSalary + hra + employerPf));
  
  // Tax estimation (Simplified New Regime 2026)
  let taxableIncome = Math.max(0, annualCtc - 75000); // Standard deduction
  let incomeTax = 0;
  if (taxableIncome > 1500000) {
    incomeTax = 150000 + (taxableIncome - 1500000) * 0.30;
  } else if (taxableIncome > 1200000) {
    incomeTax = 90000 + (taxableIncome - 1200000) * 0.20;
  } else if (taxableIncome > 700000) {
    incomeTax = (taxableIncome - 700000) * 0.10;
  } else {
    incomeTax = 0; // Rebate u/s 87A for <= 7L
  }
  const monthlyInHand = Math.round((annualCtc - (employeePf + professionalTax + incomeTax)) / 12);
  const annualInHand = monthlyInHand * 12;

  // --- BREAK-EVEN & ROI CALCULATOR STATE ---
  const [fixedCosts, setFixedCosts] = useState<number>(50000); // e.g. Rent, salaries/mo
  const [unitSellingPrice, setUnitSellingPrice] = useState<number>(500);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState<number>(200);

  const contributionMargin = Math.max(1, unitSellingPrice - variableCostPerUnit);
  const contributionMarginRatio = (contributionMargin / (unitSellingPrice || 1)) * 100;
  const breakEvenUnits = Math.ceil(fixedCosts / contributionMargin);
  const breakEvenRevenue = breakEvenUnits * unitSellingPrice;

  const [copied, setCopied] = useState(false);

  const handleCopySummary = async () => {
    let text = '';
    if (activeCalc === 'emi') {
      text = `EMI CALCULATOR RESULT:
Principal Loan: ₹${loanAmount.toLocaleString('en-IN')}
Interest Rate: ${interestRate}% p.a.
Tenure: ${tenureYears} Years (${totalMonths} Months)
Monthly EMI: ₹${Math.round(emi).toLocaleString('en-IN')}
Total Interest Payable: ₹${Math.round(totalInterest).toLocaleString('en-IN')}
Total Repayment: ₹${Math.round(totalPayment).toLocaleString('en-IN')}`;
    } else if (activeCalc === 'salary') {
      text = `SALARY IN-HAND BREAKDOWN:
Annual CTC: ₹${annualCtc.toLocaleString('en-IN')} (${(annualCtc / 100000).toFixed(1)} LPA)
Estimated Monthly In-Hand: ₹${monthlyInHand.toLocaleString('en-IN')} / month
Estimated Annual In-Hand: ₹${annualInHand.toLocaleString('en-IN')}
Basic Salary: ₹${Math.round(basicSalary).toLocaleString('en-IN')}
HRA: ₹${Math.round(hra).toLocaleString('en-IN')}
Annual PF Deduction: ₹${Math.round(employeePf).toLocaleString('en-IN')}
Estimated Tax: ₹${Math.round(incomeTax).toLocaleString('en-IN')}`;
    } else {
      text = `BREAK-EVEN BUSINESS ANALYSIS:
Monthly Fixed Costs: ₹${fixedCosts.toLocaleString('en-IN')}
Unit Selling Price: ₹${unitSellingPrice.toLocaleString('en-IN')}
Variable Cost Per Unit: ₹${variableCostPerUnit.toLocaleString('en-IN')}
Contribution Margin per Unit: ₹${contributionMargin.toLocaleString('en-IN')} (${contributionMarginRatio.toFixed(1)}%)
Break-Even Units Required: ${breakEvenUnits.toLocaleString('en-IN')} units / month
Break-Even Monthly Revenue: ₹${breakEvenRevenue.toLocaleString('en-IN')}`;
    }

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onNotify('success', 'Calculation Summary Copied', 'Ready to paste into your planning notes.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveCalc('emi')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCalc === 'emi'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Loan EMI Calculator</span>
          </button>

          <button
            onClick={() => setActiveCalc('salary')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCalc === 'salary'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Salary In-Hand (CTC)</span>
          </button>

          <button
            onClick={() => setActiveCalc('breakeven')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCalc === 'breakeven'
                ? 'bg-indigo-500 text-slate-100 shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Break-Even & ROI Unit</span>
          </button>
        </div>

        <button
          onClick={handleCopySummary}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy Summary'}</span>
        </button>
      </div>

      {/* 1. EMI CALCULATOR */}
      {activeCalc === 'emi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100">Loan Parameters</h3>
                <p className="text-xs text-slate-400">Business, Personal, or Home Loan</p>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Principal Loan Amount</span>
                <span className="font-bold text-cyan-400">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={50000}
                max={5000000}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>₹50,000</span>
                <span>₹25 Lakh</span>
                <span>₹50 Lakh</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Annual Interest Rate</span>
                <span className="font-bold text-cyan-400">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min={5}
                max={24}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>5% (Subsidized)</span>
                <span>12% (Standard)</span>
                <span>24% (NBFC / Micro)</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Loan Tenure</span>
                <span className="font-bold text-cyan-400">{tenureYears} Years ({totalMonths} Months)</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>1 Year</span>
                <span>5 Years</span>
                <span>25 Years</span>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                Monthly Repayment Estimate
              </span>
              <div className="text-3xl font-extrabold text-slate-100 mt-1">
                ₹{Math.round(emi).toLocaleString('en-IN')}
                <span className="text-xs text-slate-400 font-normal"> / month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block font-semibold">Total Interest Amount</span>
                <span className="text-sm font-bold text-amber-400 mt-0.5 block">
                  ₹{Math.round(totalInterest).toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-500">
                  ({((totalInterest / totalPayment) * 100).toFixed(1)}% of total)
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block font-semibold">Total Payment (P + I)</span>
                <span className="text-sm font-bold text-cyan-300 mt-0.5 block">
                  ₹{Math.round(totalPayment).toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-500">Across {totalMonths} payments</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>
                Tip: Making 1 extra EMI payment per year can reduce your total loan tenure by up to 18 months!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 2. SALARY CALCULATOR */}
      {activeCalc === 'salary' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100">Annual CTC Structure</h3>
                <p className="text-xs text-slate-400">Calculate Take-Home Pay in India (New Tax Regime)</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Total Annual Cost to Company (CTC)</span>
                <span className="font-bold text-emerald-400">
                  ₹{annualCtc.toLocaleString('en-IN')} ({(annualCtc / 100000).toFixed(1)} LPA)
                </span>
              </div>
              <input
                type="range"
                min={300000}
                max={5000000}
                step={50000}
                value={annualCtc}
                onChange={(e) => setAnnualCtc(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>₹3 LPA</span>
                <span>₹15 LPA</span>
                <span>₹50 LPA</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-300 font-semibold">Metro City Location (Higher HRA)</span>
              <button
                type="button"
                onClick={() => setIsMetro(!isMetro)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  isMetro ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-400'
                }`}
              >
                {isMetro ? 'Metro (50% Basic)' : 'Non-Metro (40% Basic)'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                Estimated Monthly In-Hand Pay
              </span>
              <div className="text-3xl font-extrabold text-slate-100 mt-1">
                ₹{monthlyInHand.toLocaleString('en-IN')}
                <span className="text-xs text-slate-400 font-normal"> / month (Net In-Bank)</span>
              </div>
              <span className="text-xs text-slate-400 mt-0.5 block">
                Annual In-Hand: ₹{annualInHand.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                <span>Basic Salary (40%):</span>
                <span className="font-bold text-slate-100">₹{Math.round(basicSalary / 12).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                <span>HRA Allowance:</span>
                <span className="font-bold text-slate-100">₹{Math.round(hra / 12).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                <span>Employee PF Deduction:</span>
                <span className="font-bold text-amber-400">-₹{Math.round(employeePf / 12).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                <span>Estimated Income Tax (TDS):</span>
                <span className="font-bold text-rose-400">-₹{Math.round(incomeTax / 12).toLocaleString('en-IN')}/mo</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BREAK-EVEN & ROI CALCULATOR */}
      {activeCalc === 'breakeven' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100">Unit Economics & Costs</h3>
                <p className="text-xs text-slate-400">Discover when your startup reaches profitability</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Monthly Fixed Costs (Rent, Salaries, Software)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-500">₹</span>
                <input
                  type="number"
                  value={fixedCosts}
                  onChange={(e) => setFixedCosts(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Selling Price per Unit</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-500">₹</span>
                  <input
                    type="number"
                    value={unitSellingPrice}
                    onChange={(e) => setUnitSellingPrice(Math.max(1, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Variable Cost per Unit</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-500">₹</span>
                  <input
                    type="number"
                    value={variableCostPerUnit}
                    onChange={(e) => setVariableCostPerUnit(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
                Monthly Break-Even Requirement
              </span>
              <div className="text-3xl font-extrabold text-slate-100 mt-1">
                {breakEvenUnits.toLocaleString('en-IN')}
                <span className="text-xs text-slate-400 font-normal"> Units / Month</span>
              </div>
              <span className="text-xs text-slate-400 mt-0.5 block">
                Required Monthly Revenue: <strong className="text-slate-200">₹{breakEvenRevenue.toLocaleString('en-IN')}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block font-semibold">Contribution Margin</span>
                <span className="text-sm font-bold text-indigo-300 mt-0.5 block">
                  ₹{contributionMargin.toLocaleString('en-IN')} / unit
                </span>
                <span className="text-[10px] text-slate-500">{contributionMarginRatio.toFixed(1)}% of price</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block font-semibold">Daily Sales Target</span>
                <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
                  {Math.ceil(breakEvenUnits / 30)} units / day
                </span>
                <span className="text-[10px] text-slate-500">Based on 30-day month</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-indigo-300 text-xs">
              Every unit sold beyond <strong>{breakEvenUnits} units</strong> generates pure gross profit of ₹{contributionMargin}!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
