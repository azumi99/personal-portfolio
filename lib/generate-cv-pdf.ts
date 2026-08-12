type PdfLine = {
  text: string;
  size: number;
  bold?: boolean;
  date?: string;
  boldPrefix?: string;
};

function estimateTextWidth(text: string, size: number, bold: boolean) {
  let width = 0;
  for (const ch of text) {
    if (ch === " " || ch === "." || ch === ",") width += bold ? 0.33 : 0.28;
    else if (ch === "i" || ch === "l" || ch === "1" || ch === "(" || ch === ")") width += bold ? 0.33 : 0.28;
    else if (ch === "f" || ch === "t" || ch === "I") width += bold ? 0.38 : 0.33;
    else if (ch === "r" || ch === "j") width += bold ? 0.38 : 0.33;
    else width += bold ? 0.6 : 0.5;
  }
  return width * size;
}

function wrapText(text: string, maxLength: number) {
  if (!text) return [""];

  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length > maxLength && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = nextLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function escapePdfText(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function padOffset(offset: number) {
  return offset.toString().padStart(10, "0");
}

export function generateCvPdf(portfolioUrl: string) {
  const lines: PdfLine[] = [
    { text: "ILHAM TEGAR BINTANG ANANDA", size: 18, bold: true },
    { text: "Tangerang Selatan, Indonesia | +62 822 5111 6009 | ilhambintang399@gmail.com", size: 9 },
    { text: ` ${portfolioUrl}`, size: 9, boldPrefix: "Portfolio:" },
    { text: "", size: 8 },
    { text: "PROFESSIONAL SUMMARY", size: 11, bold: true },
    {
      text: "Mobile Developer with 3 years of IT Support experience, transitioning into development in December 2022. Earned a Bachelor's degree in Information Systems from Universitas Bina Sarana Informatika. Specializes in cross-platform mobile apps (React Native, Expo), Laravel API integrations, Filament dashboards, automation workflows, and business systems supporting real operations.",
      size: 9,
    },
    { text: "", size: 8 },
    { text: "TECHNICAL SKILLS", size: 11, bold: true },
    { text: " React Native, Expo, Laravel, Filament, Next.js", size: 9, boldPrefix: "Framework & App:" },
    { text: " WordPress, ERPNext, Frappe", size: 9, boldPrefix: "CMS & Backend:" },
    { text: " n8n, Claude Code, Antigravity, OpenClaw, Hermes", size: 9, boldPrefix: "AI Agent & Automation:" },
    { text: " MySQL, PostgreSQL, SQLite, Supabase, Firebase", size: 9, boldPrefix: "Databases & Cloud:" },
    { text: " MikroTik, Networking, VMware ESXi, Synology NAS", size: 9, boldPrefix: "Infrastructure & Ops:" },
    { text: "", size: 8 },
    { text: "PROFESSIONAL EXPERIENCE", size: 11, bold: true },
    { text: "Mobile Developer | ATT Group, Jakarta Barat", size: 10, bold: true, date: "Dec 2022 - Present" },
    { text: "- Developed and maintained mobile projects: HRIS, Wakita apps, CRM, FedEx Monitoring Service, and FSM.", size: 9 },
    { text: "- Engineered automation workflows with n8n and AI agents for WhatsApp verification and intelligent OCR.", size: 9 },
    { text: "- Built AWB OCR Management Dashboard with Filament, integrated with CRM via webhook synchronization.", size: 9 },
    { text: "- Built Transys Master Data (ERPNext/Frappe) for logistics and geographical data, including RMS Rate Management and CRM integration.", size: 9 },
    { text: "- Developed an offline-first React Native (Expo) installer app with automated background photo synchronization.", size: 9 },
    { text: "- Implemented FSM distribution and installation dashboard (Laravel Filament) for nationwide TV distribution and school installation progress.", size: 9 },
    { text: "", size: 8 },
    { text: "IT Support Specialist | ATT Group, Jakarta Barat", size: 10, bold: true, date: "2019 - 2022" },
    { text: "- Responsible for technical support, network installation, and hardware maintenance.", size: 9 },
    { text: "- Specialized in virtualization using VMware ESXi and managed Synology NAS infrastructure.", size: 9 },
    { text: "- Handled SEO and web development for internal corporate WordPress profiles.", size: 9 },
    { text: "", size: 8 },
    { text: "IT Support | SMKN 1 Simpang Pematang, Lampung", size: 10, bold: true, date: "2018 - 2019" },
    { text: "- Handled school IT infrastructure, computer labs, server prep for exams, PCs, printers, and networking equipment.", size: 9 },
    { text: "", size: 8 },
    { text: "EDUCATION", size: 11, bold: true },
    { text: "Bachelor of Information Systems (S1) | Universitas Bina Sarana Informatika", size: 9, bold: true, date: "2020 - 2024" },
    { text: "Teknik Komputer Jaringan | SMKN 1 Simpang Pematang", size: 9, date: "2016 - 2018" },
    { text: "", size: 8 },
    { text: "SELECTED PROJECTS", size: 11, bold: true },
    {
      text: "FSM Field Service Management, FSM Dashboard, Lancar Business Finance Tracker, Intelligent OCR & CRM Automation, AWB OCR Management Dashboard, WP Auto AI Content SaaS, All Indonesian AI Media, WA Verification AI Automation, Transys Master Data ERPNext, FedEx Monitoring Service, Mobile CRM Transys, Logistika Mobile.",
      size: 9,
    },
  ];

  const pageWidth = 595;
  const pageHeight = 842;
  const margin = 48;
  const pages: string[] = [];
  let operations: string[] = [];
  let y = pageHeight - margin;

  function addLine(text: string, size: number, bold = false, date?: string, boldPrefix?: string) {
    if (y < margin + 24) {
      pages.push(operations.join("\n"));
      operations = [];
      y = pageHeight - margin;
    }

    if (boldPrefix) {
      const prefixWidth = estimateTextWidth(boldPrefix, size, true) + 4;
      operations.push(`BT /F2 ${size} Tf ${margin} ${y} Td (${escapePdfText(boldPrefix)}) Tj ET`);
      operations.push(`BT /F1 ${size} Tf ${margin + prefixWidth} ${y} Td (${escapePdfText(text)}) Tj ET`);
    } else {
      const font = bold ? "F2" : "F1";
      operations.push(`BT /${font} ${size} Tf ${margin} ${y} Td (${escapePdfText(text)}) Tj ET`);
    }

    if (date) {
      const dateWidth = estimateTextWidth(date, size, bold);
      const dateX = pageWidth - margin - dateWidth;
      const font = bold ? "F2" : "F1";
      operations.push(`BT /${font} ${size} Tf ${dateX} ${y} Td (${escapePdfText(date)}) Tj ET`);
    }

    y -= Math.ceil(size * 1.3);
  }

  function addSeparator(topOffset = 5, bottomMargin = 16) {
    if (y < margin + 24) {
      pages.push(operations.join("\n"));
      operations = [];
      y = pageHeight - margin;
    }
    const lineY = y + topOffset;
    operations.push(`0.5 w ${margin} ${lineY} m ${pageWidth - margin} ${lineY} l S`);
    y = lineY - bottomMargin;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isSectionHeader = line.size === 11 && line.bold;
    const isHeaderBlock = i <= 3;

    const maxLength = line.size >= 11 ? 68 : 95;
    const wrapped = wrapText(line.text, maxLength);

    for (let w = 0; w < wrapped.length; w++) {
      const isLastWrap = w === wrapped.length - 1;
      addLine(wrapped[w], line.size, line.bold, isLastWrap ? line.date : undefined, line.boldPrefix);
    }

    if (isSectionHeader) {
      addSeparator();
    } else if (isHeaderBlock && i === 3) {
      addSeparator(10, 24);
    }
  }

  pages.push(operations.join("\n"));

  const objects: string[] = [];
  const addObject = (value: string) => {
    objects.push(value);
    return objects.length;
  };

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("");
  const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageIds: number[] = [];

  for (const pageContent of pages) {
    const contentId = addObject(`<< /Length ${new Blob([pageContent]).size} >>\nstream\n${pageContent}\nendstream`);
    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
    pageIds.push(pageId);
  }

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets = [0];

  for (const [index, object] of objects.entries()) {
    offsets.push(new Blob([pdf]).size);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  }

  const xrefOffset = new Blob([pdf]).size;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${padOffset(offsets[index])} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return new Blob([pdf], { type: "application/pdf" });
}
