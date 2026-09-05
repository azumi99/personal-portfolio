type PdfLine = {
  text: string;
  size: number;
  bold?: boolean;
  date?: string;
  boldPrefix?: string;
  color?: string;
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

// Word spacing for justification: stretch spaces so text fills the line width.
// Uses real Helvetica AFM widths (per mille) so the right edge lands precisely on the margin.
const HELV_REG: Record<string, number> = {};
const HELV_BOLD: Record<string, number> = {};
(function initWidths() {
  const reg = "278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015";
  const regChars = " !\"#$%&'()*+,-./0123456789:;<=>?@";
  regChars.split("").forEach((c, i) => (HELV_REG[c] = Number(reg.split(",")[i])));
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => (HELV_REG[c] = [667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611][i]));
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((c, i) => (HELV_REG[c] = [556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500][i]));

  const bold = "278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,278,333,556,333";
  const boldChars = " !\",-.069:;AEMSTWz"; // fallback base for common chars
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => (HELV_BOLD[c] = [722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611][i]));
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((c, i) => (HELV_BOLD[c] = [556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500][i]));
  HELV_BOLD[" "] = 278; HELV_BOLD[","] = 278; HELV_BOLD["."] = 278; HELV_BOLD["-"] = 333; HELV_BOLD["/"] = 278;
  HELV_BOLD[":"] = 278; HELV_BOLD[";"] = 278; HELV_BOLD["("] = 333; HELV_BOLD[")"] = 333; HELV_BOLD["|"] = 260;
  "0123456789".split("").forEach((c) => (HELV_BOLD[c] = 556));
  void bold; void boldChars;
})();

function measureHelvetica(text: string, size: number, bold: boolean) {
  const table = bold ? HELV_BOLD : HELV_REG;
  let width = 0;
  for (const ch of text) {
    width += (table[ch] ?? 556) / 1000;
  }
  return width * size;
}

function estimateWordSpacing(text: string, size: number, bold: boolean) {
  const spaceCount = (text.match(/ /g) || []).length;
  if (spaceCount < 1) return 0;
  const textWidth = measureHelvetica(text, size, bold);
  const lineWidth = 595.28 - 48 * 2;
  const extra = Math.max(0, lineWidth - textWidth);
  return extra / spaceCount;
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
    { text: ` ${portfolioUrl}`, size: 9, boldPrefix: "Portfolio:", color: "0.145 0.388 0.922" },
    { text: "", size: 8 },
    { text: "PROFESSIONAL SUMMARY", size: 11, bold: true },
    {
      text: "Mobile Developer with 3 years of IT Support experience, transitioning into development in December 2022. Earned a Bachelor's degree in Information Systems from Universitas Bina Sarana Informatika. Specializes in cross-platform mobile apps (React Native, Expo), Laravel API integrations, Node.js services, automation workflows, and business systems supporting real operations.",
      size: 9,
    },
    { text: "", size: 8 },
    { text: "TECHNICAL SKILLS", size: 11, bold: true },
    { text: " React Native, Expo, Laravel, Node.js, Next.js", size: 9, boldPrefix: "Framework & App:" },
    { text: " WordPress, ERPNext, Frappe", size: 9, boldPrefix: "CMS & Backend:" },
    { text: " n8n, Claude Code, Antigravity, OpenClaw, Hermes", size: 9, boldPrefix: "AI Agent & Automation:" },
    { text: " MySQL, PostgreSQL, SQLite, Supabase, Firebase", size: 9, boldPrefix: "Databases & Cloud:" },
    { text: " MikroTik, Networking, VMware ESXi, Synology NAS", size: 9, boldPrefix: "Infrastructure & Ops:" },
    { text: "", size: 8 },
    { text: "PROFESSIONAL EXPERIENCE", size: 11, bold: true },
    { text: "Mobile Developer | PT Paramitha Adikarya Teknologi / ATT Group, Jakarta Barat", size: 10, bold: true, date: "Dec 2022 - Present" },
    { text: "- Develop and maintain production mobile applications using React Native, including internal and operational applications.", size: 9 },
    { text: "- Build mobile applications using Expo and Expo Router, with custom configurations and architecture based on project requirements.", size: 9 },
    { text: "- Create and manage custom Expo development clients to support custom native modules and functionality beyond Expo Go capabilities.", size: 9 },
    { text: "- Integrate and develop native Android functionality with React Native applications for features that require platform-specific capabilities.", size: 9 },
    { text: "- Implement background location and geofencing features to support location-based operational workflows and automation.", size: 9 },
    { text: "- Integrate REST APIs and GraphQL to enable communication between mobile applications and backend services.", size: 9 },
    { text: "- Implement SQLite and local data storage for offline capabilities, local caching, and application data persistence.", size: 9 },
    { text: "- Integrate Firebase Cloud Messaging (FCM) to support push notifications and real-time application events.", size: 9 },
    { text: "- Implement authentication, data synchronization, API state management, error handling, and network-related functionality across mobile applications.", size: 9 },
    { text: "- Develop reusable UI components and application features using Gluestack UI, Tailwind CSS, and component-based architecture.", size: 9 },
    { text: "- Perform debugging, troubleshooting, maintenance, and performance optimization across development and production environments.", size: 9 },
    { text: "- Optimize mobile application performance, including rendering, network requests, state management, local storage, and background processes.", size: 9 },
    { text: "- Manage Android SDK, Expo SDK, native dependencies, Gradle, NDK, and build configurations for production applications.", size: 9 },
    { text: "- Handle Android build, signing, versioning, release, and deployment processes through Google Play Console.", size: 9 },
    { text: "- Perform React Native and Expo dependency upgrades while resolving compatibility issues between JavaScript libraries and native Android components.", size: 9 },
    { text: "- Develop and integrate backend APIs using Laravel, CodeIgniter, and Node.js to support mobile application requirements.", size: 9 },
    { text: "- Work with MySQL and PostgreSQL, including database queries, data integration, and performance optimization.", size: 9 },
    { text: "- Develop and customize applications using the Frappe Framework / ERPNext to support internal business processes and system integrations.", size: 9 },
    { text: "- Develop automation workflows using n8n to connect applications, APIs, databases, and internal business processes.", size: 9 },
    { text: "- Develop AI/OCR processing pipelines for automated document and image data extraction and validation using vision AI models.", size: 9 },
    { text: "- Optimize concurrent image processing to improve throughput for high-volume OCR workloads.", size: 9 },
    { text: "- Develop Change Data Capture (CDC) systems using Debezium and Apache Kafka for data replication across systems.", size: 9 },
    { text: "- Build user interfaces and web applications using Next.js for various internal systems and application requirements.", size: 9 },
    { text: "- Manage application deployment and services using Docker, PM2, Linux, and Cloudflare Tunnel.", size: 9 },
    { text: "- Collaborate with cross-functional teams to analyze requirements, develop features, troubleshoot issues, and deliver production-ready applications.", size: 9 },
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
      text: "FSM Field Service Management, Lancar Business Finance Tracker, Intelligent OCR & CRM Automation, AWB OCR Management Dashboard, All Indonesian AI Media, WA Verification AI Automation, Transys Master Data ERPNext, FedEx Monitoring Service, Mobile CRM Transys, Logistika Mobile.",
      size: 9,
    },
  ];

  const pageWidth = 595.28; // A4: 210mm
  const pageHeight = 841.89; // A4: 297mm
  const margin = 48;
  const pages: string[] = [];
  let operations: string[] = [];
  let y = pageHeight - margin;

  function addLine(text: string, size: number, bold = false, date?: string, boldPrefix?: string, color?: string, indent = 0) {
    if (y < margin + 24) {
      pages.push(operations.join("\n"));
      operations = [];
      y = pageHeight - margin;
    }

    const colorOp = color ? `${color} rg` : "";
    const resetOp = color ? "0 0 0 rg" : "";
    const x = margin + indent;

    if (boldPrefix) {
      const prefixWidth = estimateTextWidth(boldPrefix, size, true) + 4;
      operations.push(`BT /F2 ${size} Tf ${x} ${y} Td (${escapePdfText(boldPrefix)}) Tj ET`);
      operations.push(`BT /F1 ${size} Tf ${x + prefixWidth} ${y} Td ${colorOp} (${escapePdfText(text)}) Tj ${resetOp} ET`);
    } else {
      const font = bold ? "F2" : "F1";
      operations.push(`BT /${font} ${size} Tf ${x} ${y} Td ${colorOp} (${escapePdfText(text)}) Tj ${resetOp} ET`);
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
    // Hanging indent: continuation lines of bullets align with the text after "- "
    const isBullet = line.text.startsWith("- ");
    const indent = isBullet ? measureHelvetica("- ", line.size, false) : 0;
    const bulletWrapLength = isBullet ? maxLength - 4 : maxLength;
    const rewrapped = isBullet ? wrapText(line.text, bulletWrapLength) : wrapped;

    for (let w = 0; w < rewrapped.length; w++) {
      const isLastWrap = w === rewrapped.length - 1;
      addLine(rewrapped[w], line.size, line.bold, isLastWrap ? line.date : undefined, line.boldPrefix, line.color, w > 0 ? indent : 0);
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
