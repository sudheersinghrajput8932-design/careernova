import jsPDF from 'jspdf';

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}

export function downloadAsTextFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename.endsWith('.txt') || filename.endsWith('.md') ? filename : `${filename}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export interface PdfSection {
  heading: string;
  body: string | string[] | { label: string; value: string }[];
}

export function generateAndDownloadPdf(
  docTitle: string,
  sections: PdfSection[],
  filename: string = 'Entrepreneur-Toolkit-Export.pdf'
): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 28, 'F');

  // App & Brand Label
  doc.setTextColor(56, 189, 248); // sky-400
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('ENTREPRENEUR & BUSINESS AI TOOLKIT', margin, 12);

  doc.setTextColor(148, 163, 184); // slate-400
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  const dateStr = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  doc.text(`Generated: ${dateStr} | Dev: Sudhir Singh (+91 7007260391)`, margin, 20);

  y = 36;

  // Document Main Title
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  const titleLines = doc.splitTextToSize(docTitle, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 7 + 4;

  // Horizontal separator rule
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Sections
  sections.forEach((sec, idx) => {
    // Check if new page is needed for heading
    if (y > pageHeight - 30) {
      doc.addPage();
      y = margin;
    }

    // Section Heading
    doc.setFillColor(241, 245, 249); // slate-100
    doc.roundedRect(margin, y - 4, contentWidth, 8, 1.5, 1.5, 'F');

    doc.setTextColor(30, 41, 59); // slate-800
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`${idx + 1}. ${sec.heading}`, margin + 3, y + 1.5);
    y += 10;

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85); // slate-700

    if (typeof sec.body === 'string') {
      const lines = doc.splitTextToSize(sec.body, contentWidth);
      lines.forEach((line: string) => {
        if (y > pageHeight - 20) {
          doc.addPage();
          y = margin;
        }
        doc.text(line, margin, y);
        y += 5;
      });
      y += 4;
    } else if (Array.isArray(sec.body)) {
      sec.body.forEach((item) => {
        if (typeof item === 'string') {
          const bulletLines = doc.splitTextToSize(`• ${item}`, contentWidth - 4);
          bulletLines.forEach((bLine: string, bIdx: number) => {
            if (y > pageHeight - 20) {
              doc.addPage();
              y = margin;
            }
            doc.text(bLine, margin + (bIdx === 0 ? 0 : 4), y);
            y += 4.8;
          });
        } else if (typeof item === 'object' && 'label' in item) {
          if (y > pageHeight - 20) {
            doc.addPage();
            y = margin;
          }
          doc.setFont('helvetica', 'bold');
          doc.text(`${item.label}: `, margin, y);
          const labelWidth = doc.getTextWidth(`${item.label}: `);
          doc.setFont('helvetica', 'normal');
          const valLines = doc.splitTextToSize(item.value, contentWidth - labelWidth);
          valLines.forEach((vLine: string, vIdx: number) => {
            if (vIdx > 0 && y > pageHeight - 20) {
              doc.addPage();
              y = margin;
            }
            doc.text(vLine, vIdx === 0 ? margin + labelWidth : margin + 4, y);
            y += 4.8;
          });
        }
      });
      y += 4;
    }
  });

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Entrepreneur & Business AI Toolkit • Page ${i} of ${totalPages} • Contact: sudheersinghrajput8932@gmail.com`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  doc.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
}
