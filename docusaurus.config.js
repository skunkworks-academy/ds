const siteUrl = 'https://ds.skunkworksacademy.com';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Desh Singh IDR',
  tagline: 'Cloud, Cybersecurity, Automation and Strategic IT Leadership',
  url: siteUrl,
  baseUrl: '/',
  organizationName: 'skunkworks-academy',
  projectName: 'ds',
  // GitHub Pages reliably serves directory index routes such as /idr/calendar/.
  // The custom 404 fallback also normalises the same known routes when a browser
  // requests them without the trailing slash.
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'throw'}},
  themes: ['@docusaurus/theme-mermaid'],
  headTags: [
    {tagName:'meta',attributes:{name:'robots',content:'noindex, nofollow, noarchive, nosnippet'}},
    {tagName:'meta',attributes:{name:'referrer',content:'strict-origin-when-cross-origin'}},
    {tagName:'meta',attributes:{name:'color-scheme',content:'light dark'}},
    {tagName:'link',attributes:{rel:'icon',type:'image/png',sizes:'32x32',href:'https://www.skunkworksacademy.com/images/favicon-black.png?v=2026.08.25.1',media:'(prefers-color-scheme: light)'}},
    {tagName:'link',attributes:{rel:'icon',type:'image/png',sizes:'32x32',href:'https://www.skunkworksacademy.com/images/favicon-white.png?v=2026.08.25.1',media:'(prefers-color-scheme: dark)'}},
    {tagName:'link',attributes:{rel:'shortcut icon',type:'image/png',href:'https://www.skunkworksacademy.com/images/favicon-black.png?v=2026.08.25.1'}},
    {tagName:'link',attributes:{rel:'stylesheet',href:'https://www.skunkworksacademy.com/assets/skunkworks-design-system.css?v=2026.08.15.1','data-skunkworks-design-system':'canonical'}},
    {tagName:'script',attributes:{defer:'true',src:'https://www.skunkworksacademy.com/assets/academy-navigation.js?v=2026.08.15.1','data-skunkworks-global-nav':'v10'}},
    {tagName:'script',attributes:{type:'application/ld+json'},innerHTML:JSON.stringify({
      '@context':'https://schema.org','@type':'LearningResource',name:'Deshan Singh Individual Development Roadmap',
      description:'A 12-month cloud, cybersecurity, automation and strategic IT leadership roadmap.',
      educationalLevel:'Senior professional development',
      provider:{'@type':'EducationalOrganization',name:'Skunkworks Academy',url:'https://www.skunkworksacademy.com/'},
      mentor:{'@type':'Person',name:'Raydo Matthee'},url:`${siteUrl}/`
    })}
  ],
  presets: [['classic', {
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
      routeBasePath: 'idr',
      editUrl:'https://github.com/skunkworks-academy/ds/edit/main/',
      showLastUpdateAuthor:true,
      showLastUpdateTime:true
    },
    blog:false,
    sitemap:false,
    theme:{customCss: require.resolve('./src/css/custom.css')}
  }]],
  themeConfig: {
    colorMode:{defaultMode:'light',disableSwitch:false,respectPrefersColorScheme:true},
    prism:{additionalLanguages:['bash','json','powershell','yaml','python']},
    mermaid:{theme:{light:'neutral',dark:'dark'},options:{securityLevel:'strict'}},
    metadata:[
      {name:'description',content:'Desh Singh’s interactive cloud, cybersecurity, automation and strategic IT leadership development roadmap.'},
      {name:'theme-color',content:'#0f62fe'},
      {property:'og:title',content:'Desh Singh — Individual Development Roadmap'},
      {property:'og:description',content:'A practical IDR with a 12-week sprint, labs, assignments, credentials, projects, KPIs and progress tools.'},
      {property:'og:url',content:`${siteUrl}/`}
    ]
  }
};
module.exports = config;
