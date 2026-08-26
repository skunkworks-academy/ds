import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();const errors=[];const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const required=['docusaurus.config.js','sidebars.js','src/pages/index.jsx','src/components/ProgressWorkspace.jsx','docs/overview.md','docs/12-week-sprint.md','docs/credentials.md','docs/labs.md','docs/projects.md','docs/kpis.md','docs/download-and-review.md','scripts/generate-idr-pdf.mjs','static/CNAME','static/downloads/desh-idr-12-week-calendar.ics'];
for(const f of required){if(!fs.existsSync(path.join(root,f))||fs.statSync(path.join(root,f)).size===0)errors.push(`${f}: missing or empty`)}
if(fs.existsSync(path.join(root,'static/CNAME'))&&read('static/CNAME').trim()!=='ds.skunkworksacademy.com')errors.push('static/CNAME: wrong domain');
const config=read('docusaurus.config.js');
for(const needle of ['https://ds.skunkworksacademy.com','academy-navigation.js','skunkworks-design-system.css','favicon-black.png','favicon-white.png','onBrokenMarkdownLinks'])if(!config.includes(needle))errors.push(`docusaurus.config.js: missing ${needle}`);
const pdfUrl='/downloads/Deshan_Singh_Individual_Development_Roadmap.pdf';
if(!read('src/pages/index.jsx').includes(pdfUrl))errors.push('src/pages/index.jsx: missing full IDR PDF download');
if(!read('docs/download-and-review.md').includes(pdfUrl))errors.push('docs/download-and-review.md: missing full IDR PDF download');
if(!read('docs/overview.md').includes(pdfUrl))errors.push('docs/overview.md: missing full IDR PDF download');
const pkg=JSON.parse(read('package.json'));
if(!pkg.scripts?.['generate:pdf']||!pkg.scripts?.build?.includes('generate:pdf'))errors.push('package.json: PDF generation is not part of the build');
if(!pkg.dependencies?.pdfkit)errors.push('package.json: pdfkit dependency missing');
const contentRoots=['docs','src','scripts','README.md','PRIVACY.md'];
const forbidden=['Deshansingh0@gmail.com','Deshan@skunkwork.africa','082 097 3363','820973363','1847818518','account_statement'];
function scan(target){if(target==='scripts/validate-site.mjs')return;const full=path.join(root,target);if(!fs.existsSync(full))return;const st=fs.statSync(full);if(st.isDirectory()){for(const e of fs.readdirSync(full))scan(path.join(target,e));return;}if(!/\.(md|mdx|js|jsx|mjs|css|json|txt)$/i.test(target))return;const c=fs.readFileSync(full,'utf8');for(const s of forbidden)if(c.includes(s))errors.push(`${target}: contains protected source data`)}
for(const r of contentRoots)scan(r);
const sprint=read('docs/12-week-sprint.md');const weekRows=(sprint.match(/^\|\s*\d+\s*\|/gm)||[]).length;if(weekRows!==12)errors.push(`docs/12-week-sprint.md: expected 12 week rows, found ${weekRows}`);
if(errors.length){console.error('IDR site validation failed.');for(const e of errors)console.error(`- ${e}`);process.exit(1)}
console.log('IDR site validation passed: domain, canonical Academy shell, 12-week curriculum, downloadable PDF integration and privacy controls are present.');
