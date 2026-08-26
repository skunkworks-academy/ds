import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const root = process.cwd();
const outputDir = path.join(root, 'static', 'downloads');
const output = path.join(outputDir, 'Deshan_Singh_Individual_Development_Roadmap.pdf');
fs.mkdirSync(outputDir, {recursive: true});

const BLUE = '#0F62FE';
const BLACK = '#0F0F14';
const INK = '#161616';
const MUTED = '#525252';
const PANEL = '#F8FAFC';
const BORDER = '#E0E0E0';
const PALE_BLUE = '#EEF4FF';
const PALE_GREEN = '#F0FFF4';
const PALE_AMBER = '#FFF7ED';

const doc = new PDFDocument({
  size: 'A4',
  margins: {top: 52, right: 48, bottom: 52, left: 48},
  info: {
    Title: 'Deshan Singh Individual Development Roadmap',
    Author: 'Skunkworks Academy',
    Subject: '12-month professional development roadmap',
    Keywords: 'IDR, cloud architecture, cybersecurity, automation, strategic IT leadership',
  },
});

const stream = fs.createWriteStream(output);
doc.pipe(stream);

const pageWidth = () => doc.page.width;
const pageHeight = () => doc.page.height;
const contentWidth = () => pageWidth() - doc.page.margins.left - doc.page.margins.right;

function line(y = doc.y) {
  doc.save().strokeColor(BORDER).lineWidth(0.6)
    .moveTo(doc.page.margins.left, y)
    .lineTo(pageWidth() - doc.page.margins.right, y).stroke().restore();
}

function footer() {
  const y = pageHeight() - 34;
  doc.save();
  doc.font('Helvetica').fontSize(7).fillColor(MUTED)
    .text('Confidential development source - public portfolio evidence must be sanitised.', doc.page.margins.left, y, {width: contentWidth() - 70, lineBreak: false});
  doc.text(`Page ${doc.page.number}`, pageWidth() - doc.page.margins.right - 52, y, {width: 52, align: 'right', lineBreak: false});
  doc.restore();
}

function pageHeader() {
  doc.save();
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(BLACK)
    .text('SKUNKWORKS ACADEMY', doc.page.margins.left, 28, {lineBreak: false});
  doc.font('Helvetica').fillColor(MUTED)
    .text('Deshan Singh - Individual Development Roadmap', pageWidth() - doc.page.margins.right - 210, 28, {width: 210, align: 'right', lineBreak: false});
  line(42);
  doc.restore();
}

function decorateContentPage() {
  pageHeader();
  footer();
}

function addContentPage() {
  doc.addPage();
  decorateContentPage();
  doc.y = 58;
}

function ensureSpace(height = 60) {
  if (doc.y + height > pageHeight() - 58) addContentPage();
}

function eyebrow(text) {
  doc.font('Helvetica-Bold').fontSize(8).fillColor(BLUE).text(text.toUpperCase(), {characterSpacing: 0.6});
  doc.moveDown(0.35);
}

function h1(text) {
  ensureSpace(50);
  doc.font('Helvetica-Bold').fontSize(21).fillColor(BLACK).text(text, {lineGap: 2});
  doc.moveDown(0.45);
}

function h2(text) {
  ensureSpace(35);
  doc.font('Helvetica-Bold').fontSize(13).fillColor(INK).text(text);
  doc.moveDown(0.25);
}

function body(text, options = {}) {
  ensureSpace(35);
  doc.font('Helvetica').fontSize(9.5).fillColor(INK).text(text, {lineGap: 3, ...options});
  doc.moveDown(0.35);
}

function bullet(text) {
  ensureSpace(28);
  const x = doc.x;
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(10).fillColor(BLUE).text('•', x, y, {width: 12, lineBreak: false});
  doc.font('Helvetica').fontSize(9.3).fillColor(INK).text(text, x + 13, y, {width: contentWidth() - 13, lineGap: 2});
  doc.moveDown(0.2);
}

function infoBox(title, text, fill = PANEL) {
  const pad = 10;
  const w = contentWidth();
  const titleH = doc.heightOfString(title, {width: w - pad * 2});
  const bodyH = doc.heightOfString(text, {width: w - pad * 2, lineGap: 3});
  const h = titleH + bodyH + 30;
  ensureSpace(h + 8);
  const x = doc.page.margins.left;
  const y = doc.y;
  doc.save().roundedRect(x, y, w, h, 6).fillAndStroke(fill, BORDER).restore();
  doc.font('Helvetica-Bold').fontSize(11).fillColor(BLACK).text(title, x + pad, y + pad, {width: w - pad * 2});
  doc.font('Helvetica').fontSize(9.2).fillColor(INK).text(text, x + pad, y + pad + titleH + 7, {width: w - pad * 2, lineGap: 3});
  doc.y = y + h + 9;
}

function section(label, title) {
  eyebrow(label);
  h1(title);
}

function table(headers, rows, widths, fontSize = 7.3) {
  const x0 = doc.page.margins.left;
  const fullWidth = widths.reduce((a, b) => a + b, 0);
  const headerHeight = 26;
  ensureSpace(headerHeight + 38);

  let y = doc.y;
  doc.save().rect(x0, y, fullWidth, headerHeight).fill(BLACK).restore();
  let x = x0;
  headers.forEach((head, i) => {
    doc.font('Helvetica-Bold').fontSize(7.3).fillColor('#FFFFFF').text(head, x + 5, y + 7, {width: widths[i] - 10, height: headerHeight - 8});
    x += widths[i];
  });
  y += headerHeight;

  rows.forEach((row, rowIndex) => {
    const heights = row.map((cell, i) => doc.heightOfString(String(cell), {width: widths[i] - 10, lineGap: 1.5}));
    const rowHeight = Math.max(24, Math.max(...heights) + 10);
    if (y + rowHeight > pageHeight() - 62) {
      doc.y = y;
      addContentPage();
      y = doc.y;
      doc.save().rect(x0, y, fullWidth, headerHeight).fill(BLACK).restore();
      let hx = x0;
      headers.forEach((head, i) => {
        doc.font('Helvetica-Bold').fontSize(7.3).fillColor('#FFFFFF').text(head, hx + 5, y + 7, {width: widths[i] - 10});
        hx += widths[i];
      });
      y += headerHeight;
    }
    doc.save().rect(x0, y, fullWidth, rowHeight).fill(rowIndex % 2 ? PANEL : '#FFFFFF').restore();
    let cx = x0;
    row.forEach((cell, i) => {
      doc.save().strokeColor(BORDER).lineWidth(0.35).rect(cx, y, widths[i], rowHeight).stroke().restore();
      doc.font('Helvetica').fontSize(fontSize).fillColor(INK).text(String(cell), cx + 5, y + 5, {width: widths[i] - 10, lineGap: 1.5});
      cx += widths[i];
    });
    y += rowHeight;
  });
  doc.y = y + 8;
}

// Cover page
const coverX = doc.page.margins.left;
doc.rect(0, 0, pageWidth(), 10).fill(BLUE);
doc.font('Helvetica-Bold').fontSize(9).fillColor(BLUE).text('SKUNKWORKS ACADEMY', coverX, 96);
doc.font('Helvetica-Bold').fontSize(28).fillColor(BLACK).text('Individual Development Roadmap', coverX, 122, {width: contentWidth()});
doc.font('Helvetica-Bold').fontSize(28).fillColor(BLACK).text('Deshan Singh', coverX, 160, {width: contentWidth()});
doc.font('Helvetica').fontSize(12).fillColor(MUTED).text('Cloud Architecture - Cybersecurity Operations - Automation - Strategic IT Leadership', coverX, 207, {width: contentWidth(), lineGap: 3});
doc.y = 260;
infoBox('Development placement', 'Primary: Cloud & Cybersecurity Solution Architect / Senior Technical Lead\nSecondary: Infrastructure Manager / Cybersecurity Manager / IT Manager\nMentor / facilitator: Raydo Matthee\nRoadmap period: 12 months with 30, 60 and 90-day gates\nInitial learning load: 3-4 focused hours per week', PALE_BLUE);
h2('Purpose');
body("Convert Desh's substantial enterprise infrastructure and support experience into visible, senior-level evidence in secure cloud architecture, SOC leadership, Zero Trust, infrastructure automation, governance and strategic technology decision-making.");
doc.font('Helvetica').fontSize(8).fillColor(MUTED).text('Prepared by Skunkworks Academy', coverX, pageHeight() - 105);
doc.text('Review cycle: August 2026 - August 2027', coverX, pageHeight() - 90);
footer();

addContentPage();
section('Executive summary', 'Senior-professional development positioning');
body('Desh brings more than 15 years of enterprise infrastructure, endpoint, systems administration and Microsoft-platform experience, including Microsoft 365, Azure, Intune, SCCM/MDT, Active Directory, Exchange, Defender, Sentinel, networking, endpoint security and enterprise project delivery. His current experience includes solution-architecture responsibility and enterprise modernisation work.');
body('The IDR therefore avoids an entry-level support curriculum and concentrates on the capabilities that turn technical depth into architecture, security leadership, automation, governance and strategic decision-making.');
h2('12-month North Star');
infoBox('Outcome by August 2027', 'Desh should be able to design and defend a secure hybrid-cloud architecture, lead a practical SOC or security-modernisation initiative, automate repeatable infrastructure controls, communicate technology risk and investment decisions to leadership, and demonstrate a credible portfolio for senior cloud, infrastructure, cybersecurity or IT-management roles.');
h2('Development priorities');
[
  'Advanced cloud and hybrid architecture across Microsoft-first environments with cross-cloud literacy.',
  'SOC engineering, SIEM/XDR, threat detection and incident-response leadership.',
  'Zero Trust, identity, endpoint and cloud-governance architecture.',
  'PowerShell, Infrastructure as Code and secure delivery automation.',
  'Risk management, governance, budgeting and business-case communication.',
  'Cross-functional project leadership, mentoring and executive presentation.',
  'Public portfolio evidence that demonstrates senior-level decision quality rather than only tool familiarity.',
].forEach(bullet);
h2('Workload design');
body('The initial programme targets 3-4 focused hours per week. Practical work should overlap with safe, authorised professional development where possible, while keeping employer and customer data out of public evidence.');

addContentPage();
section('Roadmap', '12-month development sequence');
table(
  ['Months', 'Phase', 'Focus', 'Required outcome'],
  [
    ['1-2', 'Foundation validation', 'Baseline, role positioning, architecture principles, GitHub workflow', 'Approved capability baseline and first architecture artefact'],
    ['3-4', 'Security architecture', 'Zero Trust, identity, endpoint, SIEM/XDR and incident response', 'Security reference architecture and SOC detection pack'],
    ['5-6', 'Automation & cloud', 'PowerShell, GitHub Actions, Bicep/Terraform, Azure/AWS architecture', 'Tested automation toolkit and IaC baseline'],
    ['7-8', 'Governance & resilience', 'Risk, controls, cost, backup/DR, vendor and change governance', 'Governance pack and resilience design'],
    ['9-10', 'Leadership & strategy', 'Business case, budgeting, stakeholder alignment, mentoring', 'Strategic modernisation proposal and team-enablement evidence'],
    ['11-12', 'Career conversion', 'Portfolio, credential review, interview stories, leadership presentation', 'Final portfolio, capability scorecard and next-role plan'],
  ],
  [54, 100, 170, 171], 6.8,
);
h2('Formal review gates');
h2('Day 30');
['Learning cadence is sustainable.', 'GitHub evidence workflow is working.', 'First architecture artefact reviewed.'].forEach(bullet);
h2('Day 60');
['Zero Trust and SOC evidence demonstrates senior-level reasoning.', 'At least one automation has tests and rollback guidance.', 'Credential targets have been confirmed against current vendor offerings.'].forEach(bullet);
h2('Day 90');
['Capstone scope is approved.', 'At least three portfolio artefacts are mentor-reviewed.', 'A clear primary role target is selected for the next nine months.'].forEach(bullet);
infoBox('Annual completion gate', 'The IDR is complete when Desh can explain, demonstrate and defend the portfolio outputs in a senior technical or management interview - not merely when courses are marked complete.', PALE_GREEN);

addContentPage();
section('Initial execution', '12-week applied sprint');
table(
  ['Wk', 'Focus', 'Learning module', 'Practical output'],
  [
    ['1', 'Baseline & architecture', 'Senior-role gap analysis, architecture principles, Git workflow', 'Capability matrix + ADR template'],
    ['2', 'Identity & Zero Trust', 'Entra, MFA, Conditional Access, identity lifecycle', 'Synthetic identity/access reference design'],
    ['3', 'Endpoint security', 'Intune, Defender, compliance, attack-surface reduction', 'Secure endpoint baseline + exception model'],
    ['4', 'SOC & SIEM', 'Sentinel, detections, incident lifecycle, ATT&CK', 'Synthetic detections + triage worksheet'],
    ['5', 'Incident response', 'Severity, evidence, containment, communications', 'Endpoint compromise tabletop runbook'],
    ['6', 'PowerShell automation', 'Idempotence, logging, validation, error handling', 'Tested safe administrative script'],
    ['7', 'GitHub & secure delivery', 'Git, pull requests, Actions, secrets hygiene', 'CI workflow for automation project'],
    ['8', 'Infrastructure as Code', 'Bicep/Terraform, state, modules, guardrails', 'Reproducible non-production baseline'],
    ['9', 'Cloud governance', 'Landing zones, policy, tagging, cost, resilience', 'Azure governance blueprint + AWS notes'],
    ['10', 'Risk & compliance', 'Risk register, control mapping, exceptions', 'Control-to-evidence matrix'],
    ['11', 'Strategic leadership', 'Business case, roadmap, budget assumptions', 'Executive modernisation brief'],
    ['12', 'Capstone & career conversion', 'Portfolio review, presentation, interview stories', '10-minute architecture presentation + 90-day plan'],
  ],
  [24, 105, 185, 181], 6.4,
);
infoBox('Completion rule', 'A week is complete only when Desh can explain the decision, demonstrate the evidence, document limitations, protect confidential information and respond to review feedback.');

addContentPage();
section('Credentials', 'Credential and skill milestones');
table(
  ['Priority', 'Milestone', 'Why it matters'],
  [
    ['Core', 'GitHub Skills + Actions workflow evidence', 'Secure source-control and automation discipline'],
    ['Core', 'Microsoft Security Operations Analyst (SC-200) readiness', 'SOC, Sentinel, Defender and incident operations'],
    ['Core', 'Microsoft Identity and Access Administrator (SC-300) readiness', 'Identity and Zero Trust architecture'],
    ['Core', 'Microsoft Endpoint Administrator (MD-102) readiness', 'Intune and endpoint governance'],
    ['Core', 'Azure Administrator (AZ-104) readiness', 'Azure operational architecture and governance'],
    ['Stretch', 'Azure Security Engineer (AZ-500) readiness', 'Advanced Azure security design'],
    ['Supporting', 'AWS architecture learning milestone', 'Cross-cloud architecture literacy'],
    ['Supporting', 'Cisco cybersecurity learning milestone', 'Network and security architecture reinforcement'],
    ['Applied', 'PowerShell automation evidence', 'Reusable infrastructure automation capability'],
    ['Applied', 'Infrastructure-as-Code milestone', 'Bicep/Terraform reproducibility and governance'],
    ['Leadership', 'IT risk/governance milestone', 'Control ownership and business risk translation'],
    ['Leadership', 'Senior architecture presentation', 'Executive communication and career conversion'],
  ],
  [74, 225, 196], 6.8,
);
infoBox('Acceptance gate', 'A milestone counts only when Desh can show at least one current certificate, completed official learning record, working lab, reviewed architecture artefact or mentor-accepted portfolio item.');

addContentPage();
section('Hands-on practice', 'Authorised labs');
[
  ['Lab 1 - Zero Trust identity design', 'Create a synthetic organisation, identity lifecycle, MFA/Conditional Access policy set, break-glass design and exception process.'],
  ['Lab 2 - Secure endpoint baseline', 'Design Intune/Defender compliance, attack-surface reduction, update rings and controlled exception handling.'],
  ['Lab 3 - SOC detection engineering', 'Use synthetic Windows or cloud events to define detections, map them to MITRE ATT&CK, write triage steps and define false-positive handling.'],
  ['Lab 4 - Incident-response tabletop', 'Run a simulated endpoint compromise from alert through containment, recovery and lessons learned.'],
  ['Lab 5 - PowerShell automation', 'Automate a safe administrative task using input validation, logging, safe mode, error handling and test cases.'],
  ['Lab 6 - Secure GitHub Actions', 'Create a least-privilege workflow that validates scripts or IaC and contains no hard-coded secrets.'],
  ['Lab 7 - Infrastructure as Code', 'Create a non-production Bicep or Terraform baseline with variables, modules, tags, policy considerations and teardown guidance.'],
  ['Lab 8 - Hybrid-cloud governance', 'Compare Azure-first and AWS-equivalent controls for identity, network segmentation, logging, backup, tagging, cost and incident ownership.'],
].forEach(([title, text]) => {h2(title); body(text);});
infoBox('Lab evidence template', 'For every lab capture: objective, authorised scope, architecture, steps, test results, sanitised screenshots where appropriate, risks, rollback, lessons learned and next improvement.');

addContentPage();
section('Portfolio', 'Six senior-level projects');
table(
  ['#', 'Project', 'Required evidence'],
  [
    ['1', 'SOC Detection Pack', 'Synthetic detections, ATT&CK mapping, triage flow, incident metrics and false-positive handling.'],
    ['2', 'Zero Trust Reference Architecture', 'Identity, endpoint, network, apps, data, logging, exceptions and privileged-access model.'],
    ['3', 'Secure Endpoint Engineering Baseline', 'Intune/Defender architecture, update strategy, compliance, exception process and operating KPIs.'],
    ['4', 'Infrastructure-as-Code Baseline', 'Bicep/Terraform modules for a safe non-production environment with validation, teardown and governance notes.'],
    ['5', 'Automation & Compliance Toolkit', 'PowerShell utilities for safe administrative checks/configuration reporting with tests, logs and documentation.'],
    ['6', 'Strategic Security Modernisation Brief', 'Executive proposal connecting current-state risks, target architecture, roadmap, budget assumptions, KPIs, governance and business outcomes.'],
  ],
  [28, 165, 302], 6.7,
);
infoBox('Portfolio quality gate', 'Each project must contain a README, architecture or workflow diagram, authorised scope, tests or validation, security/privacy notes, evidence, limitations, lessons learned and mentor review.');

addContentPage();
section('Measurement', 'Goals and KPIs');
table(
  ['KPI', 'Target', 'Measurement'],
  [
    ['Sprint execution', '>=10 of 12 weeks accepted', 'Completed evidence, not attendance'],
    ['Portfolio evidence', '6 reviewed artefacts', 'Mentor-approved repositories/documents'],
    ['Security architecture', '2 reviewed architectures', 'Zero Trust + hybrid/cloud/security design'],
    ['Automation', '2 tested automations', 'Tests, logs, safe defaults and rollback'],
    ['SOC capability', '1 complete detection/IR pack', 'Detections, triage, metrics, ATT&CK mapping'],
    ['Governance', '1 risk/control pack', 'Risks, controls, ownership and evidence'],
    ['Leadership communication', '2 executive briefs/presentations', 'Clear business value and decision request'],
    ['Credential progress', '4 core + 4 supporting/applied milestones', 'Current vendor learning records or evidence'],
    ['Mentoring contribution', '2 knowledge-sharing sessions', 'Slides, notes or peer feedback'],
    ['Career conversion', '4 STAR/architecture interview stories', 'Evidence-linked interview narratives'],
  ],
  [145, 150, 200], 6.8,
);
infoBox('Review scorecard', 'Score each formal review from 1-5 across architecture quality, security reasoning, automation quality, governance, communication and leadership. Target: 4/5 or higher in every dimension by the annual review.', PALE_BLUE);

addContentPage();
section('Operating rhythm', 'Weekly study and mentor cadence');
table(
  ['Cadence', 'Suggested time', 'Activity', 'Purpose'],
  [
    ['Monday', '18:30-19:15', 'Focused theory / vendor learning', 'Senior-level concept and design decision'],
    ['Wednesday', '18:30-19:15', 'Guided lab planning', 'Scope, architecture and test plan'],
    ['Thursday', '18:30-19:30', 'Build / lab execution', 'Working technical evidence'],
    ['Saturday', '09:00-10:30', 'Deep work, documentation and portfolio', 'Finish artefact and reflection'],
    ['Alternate Wednesday', '19:30-20:00', 'Mentor review', 'Feedback, blockers, evidence and next decision'],
  ],
  [90, 90, 135, 180], 6.8,
);
h2('Mentor / facilitator');
body('Raydo Matthee supports fortnightly evidence reviews, architecture challenge, prioritisation, KPI review and 30/60/90-day decisions.');
h2('Mentor review questions');
[
  'Does the evidence demonstrate architecture and decision quality rather than tool usage alone?',
  'Are security controls mapped to business and operational outcomes?',
  'Are automation artefacts testable, safe by default and reversible?',
  'Does Desh communicate assumptions, trade-offs and residual risk clearly?',
  'Is the learning load sustainable and producing portfolio evidence?',
].forEach(bullet);

addContentPage();
section('Governance', 'Privacy, safety and evidence boundaries');
[
  'Use authorised lab tenants, local virtual machines, sandbox services or synthetic datasets.',
  'Never publish passwords, tokens, private keys, customer information, enterprise logs or confidential architecture.',
  'Use least privilege, clear ownership, rollback guidance and evidence of validation.',
  'Do not reproduce employer systems or sensitive configurations in public repositories.',
  'Credential targets must be checked against current vendor offerings before exam booking.',
  'All public evidence must be sanitised and safe to disclose.',
].forEach(bullet);
infoBox('Public repository boundary', 'This IDR is designed for professional-development use. Private contact data, financial information and detailed personal assessment responses must remain outside the public repository.', PALE_AMBER);
h2('Recommended sign-off');
table(
  ['Role', 'Name', 'Decision / signature', 'Date'],
  [
    ['Participant', 'Deshan Singh', '', ''],
    ['Mentor / facilitator', 'Raydo Matthee', '', ''],
    ['Manager / sponsor', 'To be confirmed', '', ''],
  ],
  [120, 130, 170, 75], 7,
);
h2('First 10 working days');
table(
  ['Day range', 'Action', 'Evidence'],
  [
    ['1-2', 'Validate primary role target and sustainable weekly time', 'Signed-off baseline and timetable'],
    ['1-4', 'Confirm current vendor credential availability', 'Credential register with official links'],
    ['2-5', 'Select first safe architecture problem', 'One-page scope and data boundary'],
    ['4-7', 'Set up GitHub evidence workflow', 'Repository, issue, branch and PR template'],
    ['5-8', 'Complete Week 1 architecture evidence', 'Capability matrix + ADR template'],
    ['8-10', 'First mentor review', 'Decision log and next actions'],
  ],
  [70, 250, 175], 6.7,
);

footer();
doc.end();

await new Promise((resolve, reject) => {
  stream.on('finish', resolve);
  stream.on('error', reject);
});

const bytes = fs.readFileSync(output);
if (bytes.length < 30000 || bytes.subarray(0, 5).toString('ascii') !== '%PDF-') {
  throw new Error('Generated IDR PDF failed integrity checks.');
}

console.log(`Generated ${path.relative(root, output)} (${bytes.length} bytes)`);
