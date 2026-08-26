import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const root = process.cwd();
const outputDir = path.join(root, 'static', 'downloads');
const output = path.join(outputDir, 'Deshan_Singh_Individual_Development_Roadmap.pdf');
fs.mkdirSync(outputDir, {recursive: true});

const docs = [
  ['Executive Summary', 'docs/overview.md'],
  ['Complete IDR Handbook', 'docs/complete-idr.md'],
  ['Capability Profile', 'docs/profile.md'],
  ['Career Pathway', 'docs/pathway.md'],
  ['12-Month Roadmap', 'docs/roadmap.md'],
  ['12-Week Applied Sprint', 'docs/12-week-sprint.md'],
  ['Credential and Skill Milestones', 'docs/credentials.md'],
  ['Course Curriculum', 'docs/curriculum.md'],
  ['Hands-On Labs', 'docs/labs.md'],
  ['Assignments', 'docs/assignments.md'],
  ['Portfolio Projects', 'docs/projects.md'],
  ['Study and Review Calendar', 'docs/calendar.md'],
  ['Goals and KPIs', 'docs/kpis.md'],
  ['Mentor and Review Process', 'docs/mentor.md'],
  ['Governance, Privacy and Safety', 'docs/governance.md'],
  ['Learning Resources', 'docs/resources.md'],
  ['References and Source Register', 'docs/references.md'],
  ['Download, Review and Sign-Off', 'docs/download-and-review.md'],
];

const BLUE = '#0F62FE';
const INK = '#161616';
const MUTED = '#525252';
const BORDER = '#DDE3EA';
const PANEL = '#F7F9FC';

const doc = new PDFDocument({
  size: 'A4',
  margins: {top: 54, right: 48, bottom: 54, left: 48},
  info: {
    Title: 'Deshan Singh Individual Development Roadmap',
    Author: 'Skunkworks Academy',
    Subject: 'Complete 12-month professional development roadmap',
    Keywords: 'IDR, cloud architecture, cybersecurity, Zero Trust, SOC, automation, infrastructure as code, governance, leadership',
  },
});

const stream = fs.createWriteStream(output);
doc.pipe(stream);

const contentWidth = () => doc.page.width - doc.page.margins.left - doc.page.margins.right;
const bottom = () => doc.page.height - 58;

function footer() {
  const y = doc.page.height - 34;
  doc.save();
  doc.font('Helvetica').fontSize(7).fillColor(MUTED)
    .text('Skunkworks Academy · Deshan Singh IDR · Public evidence must use synthetic or expressly authorised data.', 48, y, {width: 420, lineBreak: false});
  doc.text(`Page ${doc.page.number}`, 500, y, {width: 48, align: 'right', lineBreak: false});
  doc.restore();
}

function header(label = 'INDIVIDUAL DEVELOPMENT ROADMAP') {
  doc.save();
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(BLUE).text('SKUNKWORKS ACADEMY', 48, 28, {lineBreak: false});
  doc.font('Helvetica').fillColor(MUTED).text(label, 300, 28, {width: 248, align: 'right', lineBreak: false});
  doc.strokeColor(BORDER).lineWidth(0.5).moveTo(48, 43).lineTo(547, 43).stroke();
  doc.restore();
}

function addPage(label) {
  doc.addPage();
  header(label);
  footer();
  doc.x = 48;
  doc.y = 58;
}

function ensure(height = 36, label = 'INDIVIDUAL DEVELOPMENT ROADMAP') {
  if (doc.y + height > bottom()) addPage(label);
}

function writeTitle(text) {
  ensure(44);
  doc.font('Helvetica-Bold').fontSize(19).fillColor(INK).text(text, {lineGap: 2});
  doc.moveDown(0.4);
}

function writeH2(text) {
  ensure(32);
  doc.font('Helvetica-Bold').fontSize(12.5).fillColor(INK).text(text);
  doc.moveDown(0.2);
}

function writeH3(text) {
  ensure(28);
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(INK).text(text);
  doc.moveDown(0.15);
}

function writeBody(text) {
  if (!text.trim()) return;
  ensure(28);
  doc.font('Helvetica').fontSize(9.1).fillColor(INK).text(text, {lineGap: 2.4});
  doc.moveDown(0.22);
}

function writeBullet(text, ordered = false) {
  ensure(25);
  const marker = ordered ? text.match(/^\d+\./)?.[0] ?? '•' : '•';
  const body = ordered ? text.replace(/^\d+\.\s*/, '') : text.replace(/^[-*]\s*/, '');
  const x = 48;
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(BLUE).text(marker, x, y, {width: 20, lineBreak: false});
  doc.font('Helvetica').fontSize(9).fillColor(INK).text(body, x + 22, y, {width: contentWidth() - 22, lineGap: 2.1});
  doc.x = 48;
  doc.moveDown(0.14);
}

function writeTableRow(line, isHeader = false) {
  const cells = line.split('|').slice(1, -1).map((cell) => cell.trim()).filter(Boolean);
  if (!cells.length) return;
  ensure(28);
  const text = cells.join('  ·  ');
  const y = doc.y;
  const h = Math.max(22, doc.heightOfString(text, {width: contentWidth() - 16, lineGap: 1.6}) + 10);
  ensure(h + 4);
  doc.save().roundedRect(48, y, contentWidth(), h, 3).fill(isHeader ? '#EEF4FF' : PANEL).restore();
  doc.font(isHeader ? 'Helvetica-Bold' : 'Helvetica').fontSize(isHeader ? 8.2 : 7.7).fillColor(INK)
    .text(text, 56, y + 5, {width: contentWidth() - 16, lineGap: 1.6});
  doc.x = 48;
  doc.y = y + h + 3;
}

function cleanInline(text) {
  return text
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 — $2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/\s+/g, ' ')
    .trim();
}

function renderMarkdown(file) {
  const raw = fs.readFileSync(path.join(root, file), 'utf8');
  const withoutFrontMatter = raw.replace(/^---[\s\S]*?---\s*/, '');
  const lines = withoutFrontMatter.split(/\r?\n/);
  let inFence = false;
  let tableHeaderPending = false;

  for (const original of lines) {
    const trimmed = original.trim();
    if (trimmed.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      const codeLine = cleanInline(original);
      if (codeLine) {
        ensure(20);
        doc.font('Courier').fontSize(7.6).fillColor(INK).text(codeLine, {width: contentWidth(), lineGap: 1.2});
      }
      continue;
    }
    if (!trimmed || trimmed.startsWith('<div') || trimmed.startsWith('</div') || trimmed.startsWith(':::')) continue;
    if (/^\|(?:\s*:?-+:?\s*\|)+$/.test(trimmed)) { tableHeaderPending = false; continue; }
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      writeTableRow(trimmed, tableHeaderPending);
      tableHeaderPending = false;
      continue;
    }
    if (/^#\s+/.test(trimmed)) { writeTitle(cleanInline(trimmed.replace(/^#\s+/, ''))); continue; }
    if (/^##\s+/.test(trimmed)) { writeH2(cleanInline(trimmed.replace(/^##\s+/, ''))); continue; }
    if (/^###\s+/.test(trimmed)) { writeH3(cleanInline(trimmed.replace(/^###\s+/, ''))); continue; }
    if (/^>\s*/.test(trimmed)) {
      ensure(44);
      const text = cleanInline(trimmed.replace(/^>\s*/, ''));
      const h = doc.heightOfString(text, {width: contentWidth() - 24, lineGap: 2.4}) + 20;
      ensure(h + 4);
      const y = doc.y;
      doc.save().roundedRect(48, y, contentWidth(), h, 5).fill('#EEF4FF').restore();
      doc.font('Helvetica-Oblique').fontSize(9.2).fillColor(INK).text(text, 60, y + 10, {width: contentWidth() - 24, lineGap: 2.4});
      doc.x = 48;
      doc.y = y + h + 7;
      continue;
    }
    if (/^[-*]\s+/.test(trimmed)) { writeBullet(cleanInline(trimmed)); continue; }
    if (/^\d+\.\s+/.test(trimmed)) { writeBullet(cleanInline(trimmed), true); continue; }
    if (/^\|/.test(trimmed)) { tableHeaderPending = true; }
    const text = cleanInline(trimmed);
    if (text) writeBody(text);
  }
}

// Cover
const x = 48;
doc.rect(0, 0, doc.page.width, 10).fill(BLUE);
doc.font('Helvetica-Bold').fontSize(9).fillColor(BLUE).text('SKUNKWORKS ACADEMY', x, 94);
doc.font('Helvetica-Bold').fontSize(28).fillColor(INK).text('Individual Development Roadmap', x, 124, {width: contentWidth()});
doc.font('Helvetica-Bold').fontSize(28).fillColor(INK).text('Deshan Singh', x, 166, {width: contentWidth()});
doc.font('Helvetica').fontSize(12).fillColor(MUTED)
  .text('Cloud Architecture · Cybersecurity Operations · Automation · Strategic IT Leadership', x, 214, {width: contentWidth(), lineGap: 3});
doc.y = 275;
doc.save().roundedRect(x, doc.y, contentWidth(), 124, 8).fill('#EEF4FF').restore();
doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text('Development placement', x + 14, 292);
doc.font('Helvetica').fontSize(9.4).fillColor(INK)
  .text('Primary: Cloud & Cybersecurity Solution Architect / Senior Technical Lead\nSecondary: Infrastructure Manager / Cybersecurity Manager / IT Manager\nMentor / facilitator: Raydo Matthee\nRoadmap: August 2026 – August 2027\nInitial execution: 12-week evidence-based sprint · approximately 3–4 focused hours weekly', x + 14, 315, {width: contentWidth() - 28, lineGap: 4});
doc.font('Helvetica').fontSize(8).fillColor(MUTED)
  .text('This PDF is generated from the current online IDR content. Credential availability and vendor documentation must be re-checked before exam booking.', x, 720, {width: contentWidth()});
footer();

for (const [label, file] of docs) {
  addPage(label.toUpperCase());
  renderMarkdown(file);
}

doc.end();
await new Promise((resolve, reject) => {
  stream.on('finish', resolve);
  stream.on('error', reject);
});

const bytes = fs.readFileSync(output);
if (bytes.subarray(0, 5).toString('ascii') !== '%PDF-') throw new Error('Generated IDR PDF is not a valid PDF header.');
if (bytes.length < 30000) throw new Error(`Generated IDR PDF is unexpectedly small (${bytes.length} bytes).`);
console.log(`Generated ${path.relative(root, output)} (${bytes.length} bytes) from ${docs.length} current IDR documents.`);
