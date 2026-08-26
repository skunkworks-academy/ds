import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const required = [
  'docusaurus.config.js',
  'sidebars.js',
  'src/pages/index.jsx',
  'src/components/ProgressWorkspace.jsx',
  'docs/overview.md',
  'docs/complete-idr.md',
  'docs/profile.md',
  'docs/pathway.md',
  'docs/roadmap.md',
  'docs/12-week-sprint.md',
  'docs/credentials.md',
  'docs/curriculum.md',
  'docs/labs.md',
  'docs/assignments.md',
  'docs/projects.md',
  'docs/calendar.md',
  'docs/kpis.md',
  'docs/mentor.md',
  'docs/governance.md',
  'docs/resources.md',
  'docs/references.md',
  'docs/download-and-review.md',
  'scripts/generate-idr-pdf.mjs',
  'static/404.html',
  'static/CNAME',
  'static/downloads/desh-idr-12-week-calendar.ics',
];

for (const file of required) {
  const full = path.join(root, file);
  if (!fs.existsSync(full) || fs.statSync(full).size === 0) errors.push(`${file}: missing or empty`);
}

if (fs.existsSync(path.join(root, 'static/CNAME')) && read('static/CNAME').trim() !== 'ds.skunkworksacademy.com') {
  errors.push('static/CNAME: wrong domain');
}

const config = read('docusaurus.config.js');
for (const needle of [
  'https://ds.skunkworksacademy.com',
  "baseUrl: '/'",
  'trailingSlash: true',
  "routeBasePath: 'idr'",
  'academy-navigation.js',
  'skunkworks-design-system.css',
  'favicon-black.png',
  'favicon-white.png',
  'onBrokenMarkdownLinks',
]) {
  if (!config.includes(needle)) errors.push(`docusaurus.config.js: missing ${needle}`);
}

const sidebar = read('sidebars.js');
for (const id of ['complete-idr', '12-week-sprint', 'calendar', 'references', 'download-and-review']) {
  if (!sidebar.includes(`'${id}'`)) errors.push(`sidebars.js: missing ${id}`);
}

const pdfUrl = '/downloads/Deshan_Singh_Individual_Development_Roadmap.pdf';
for (const file of ['src/pages/index.jsx', 'docs/overview.md', 'docs/complete-idr.md', 'docs/download-and-review.md']) {
  if (!read(file).includes(pdfUrl)) errors.push(`${file}: missing full IDR PDF download`);
}

for (const route of ['/idr/12-week-sprint/', '/idr/calendar/', '/idr/download-and-review/']) {
  const routeFile = route.includes('12-week-sprint') ? 'docs/12-week-sprint.md' : route.includes('calendar') ? 'docs/calendar.md' : 'docs/download-and-review.md';
  if (!read(routeFile).includes('---')) errors.push(`${routeFile}: invalid route document`);
}

const sprint = read('docs/12-week-sprint.md');
const weekRows = (sprint.match(/^\|\s*\d+\s*\|/gm) || []).length;
if (weekRows !== 12) errors.push(`docs/12-week-sprint.md: expected 12 week rows, found ${weekRows}`);
for (let week = 1; week <= 12; week += 1) {
  if (!sprint.includes(`## Week ${week}`)) errors.push(`docs/12-week-sprint.md: missing detailed Week ${week} section`);
}

const references = read('docs/references.md');
for (const source of [
  'learn.microsoft.com',
  'skills.github.com',
  'docs.github.com/actions',
  'developer.hashicorp.com/terraform',
  'aws.amazon.com',
  'netacad.com',
  'nist.gov/cyberframework',
  'cisecurity.org/controls',
  'attack.mitre.org',
  'cisa.gov',
  'owasp.org',
]) {
  if (!references.includes(source)) errors.push(`docs/references.md: missing reference family ${source}`);
}

const pkg = JSON.parse(read('package.json'));
if (!pkg.scripts?.['generate:pdf'] || !pkg.scripts?.build?.includes('generate:pdf')) errors.push('package.json: PDF generation is not part of the build');
if (!pkg.dependencies?.pdfkit) errors.push('package.json: pdfkit dependency missing');

const contentRoots = ['docs', 'src', 'scripts', 'README.md', 'PRIVACY.md'];
const forbidden = ['Deshansingh0@gmail.com', 'Deshan@skunkwork.africa', '082 097 3363', '820973363', '1847818518', 'account_statement'];

function scan(target) {
  if (target === 'scripts/validate-site.mjs') return;
  const full = path.join(root, target);
  if (!fs.existsSync(full)) return;
  const stat = fs.statSync(full);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(full)) scan(path.join(target, entry));
    return;
  }
  if (!/\.(md|mdx|js|jsx|mjs|css|json|txt|html)$/i.test(target)) return;
  const content = fs.readFileSync(full, 'utf8');
  for (const value of forbidden) {
    if (content.includes(value)) errors.push(`${target}: contains protected source data`);
  }
}
for (const target of contentRoots) scan(target);

if (errors.length) {
  console.error('IDR site validation failed.');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('IDR site validation passed: custom domain, clean routes, complete IDR content, references, downloadable PDF integration and privacy controls are present.');
