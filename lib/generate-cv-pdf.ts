type PdfLine = {
  text: string;
  size: number;
  bold?: boolean;
};

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
    { text: "ILHAM TEGAR BINTANG ANANDA", size: 20, bold: true },
    { text: "Tangerang Selatan, Indonesia | +62 822 5111 6009 | ilhambintang399@gmail.com", size: 10 },
    { text: `Portfolio: ${portfolioUrl}`, size: 10 },
    { text: "", size: 10 },
    { text: "PROFESSIONAL SUMMARY", size: 13, bold: true },
    {
      text: "Professional Mobile Developer with over 6 years of experience in the IT industry. Transitioned from IT Support to Development in 2022, specializing in React Native and Laravel API integration. Recently earned a Bachelor degree in Information Systems. Proven track record in building complex automation workflows, OCR systems, and ERP data management platforms.",
      size: 10,
    },
    { text: "", size: 10 },
    { text: "TECHNICAL SKILLS", size: 13, bold: true },
    { text: "Core: React Native, Expo, Laravel, Next.js, Filament", size: 10 },
    { text: "Ecosystem: OpenAI, ERPNext, Frappe, Firebase, WordPress, MikroTik, Networking", size: 10 },
    { text: "AI & Agents: n8n, Claude Code, Antigravity, Gemini, Hermes, OpenClaw, Z.ai", size: 10 },
    { text: "Databases: MySQL, PostgreSQL, SQLite, Supabase", size: 10 },
    { text: "", size: 10 },
    { text: "PROFESSIONAL EXPERIENCE", size: 13, bold: true },
    { text: "Mobile Developer | ATT Group, Jakarta Barat | Dec 2022 - Present", size: 11, bold: true },
    {
      text: "Developing and maintaining mobile projects including HRIS, Wakita apps, CRM, FedEx Monitoring, and FSM. Engineered automation workflows with n8n and AI agents for WhatsApp verification and intelligent OCR. Built AWB OCR Management Dashboard with Filament, Transys Master Data with ERPNext, and offline-first React Native installer apps with background photo synchronization.",
      size: 10,
    },
    { text: "IT Support Specialist | ATT Group, Jakarta Barat | 2019 - 2022", size: 11, bold: true },
    {
      text: "Responsible for technical support, network installation, hardware maintenance, VMware ESXi, Synology NAS infrastructure, SEO, and internal WordPress profile development.",
      size: 10,
    },
    { text: "IT Support | SMKN 1 Simpang Pematang, Lampung | 2018 - 2019", size: 11, bold: true },
    {
      text: "Handled school IT infrastructure, computer labs, server preparation for exams, PCs, printers, and networking equipment.",
      size: 10,
    },
    { text: "", size: 10 },
    { text: "EDUCATION", size: 13, bold: true },
    { text: "Bachelor of Information Systems (S1) | Universitas Bina Sarana Informatika | 2020 - 2024", size: 10, bold: true },
    { text: "Teknik Komputer Jaringan | SMKN 1 Simpang Pematang | 2016 - 2018", size: 10 },
    { text: "", size: 10 },
    { text: "SELECTED PROJECTS", size: 13, bold: true },
    {
      text: "FSM Field Service Management, FSM Dashboard, Lancar Business Finance Tracker, Intelligent OCR & CRM Automation, AWB OCR Management Dashboard, WP Auto AI Content SaaS, All Indonesian AI Media, WA Verification AI Automation, Transys Master Data ERPNext, FedEx Monitoring Service, Mobile CRM Transys, Logistika Mobile.",
      size: 10,
    },
  ];

  const pageWidth = 595;
  const pageHeight = 842;
  const margin = 48;
  const pages: string[] = [];
  let operations: string[] = [];
  let y = pageHeight - margin;

  function addLine(text: string, size: number, bold = false) {
    if (y < margin + 24) {
      pages.push(operations.join("\n"));
      operations = [];
      y = pageHeight - margin;
    }

    const font = bold ? "F2" : "F1";
    operations.push(`BT /${font} ${size} Tf ${margin} ${y} Td (${escapePdfText(text)}) Tj ET`);
    y -= Math.ceil(size * 1.45);
  }

  for (const line of lines) {
    const maxLength = line.size >= 13 ? 62 : 88;

    for (const wrappedLine of wrapText(line.text, maxLength)) {
      addLine(wrappedLine, line.size, line.bold);
    }

    if (line.size >= 13) {
      y -= 3;
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
