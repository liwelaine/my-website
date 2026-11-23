(function () {
  const projects = window.portfolioProjects || [];
  const projectPaths = {
    helperai: 'case-helperai.html',
    gartner: 'case-gartner.html',
    webinar: 'case-webinar.html',
    content: 'case-content-strategy.html'
  };
  const legacyTitles = {
    '': 'Selected Work — Elaine Lee',
    about: 'About Elaine Lee — Product Marketing',
    helperai: 'HelperAI: From Prototype to Production — Elaine Lee',
    gartner: 'ASUS × Gartner Demand Generation — Elaine Lee',
    webinar: 'Global Education Webinar — Elaine Lee',
    content: 'ASUS Business Content Strategy — Elaine Lee'
  };
  const independentProject = {
    id: 'ai-pipeline',
    number: '05',
    category: 'INDEPENDENT PROJECT · AI + CONTENT',
    cardTitle: 'AI Content Pipeline',
    description: 'An independent prototype connecting audience strategy, content generation, CRM-style distribution, and simulated engagement analysis.',
    result: 'One company profile in → a full content loop out',
    href: 'portfolio-case-study-2.html'
  };
  const app = document.getElementById('app');
  if (!app) return;

  function card(project, independent) {
    const href = independent ? project.href : projectPaths[project.id];
    return `<a class="work-card${independent ? ' independent-card' : ''}" href="${href}">
      <div class="card-top"><span class="card-number">${project.number}${independent ? ' / 05' : ' / 04'}</span><span class="card-category">${project.category}</span></div>
      <h3>${project.cardTitle}</h3><p>${project.description}</p>
      <div class="card-bottom"><span class="card-result">${project.result}</span><span class="card-arrow" aria-hidden="true">→</span></div>
    </a>`;
  }

  function workGrid(includeIndependent) {
    const items = projects.map(project => card(project, false));
    if (includeIndependent) items.push(card(independentProject, true));
    return `<div class="work-grid">${items.join('')}</div>`;
  }

  function homePage() {
    return `<section class="home-hero"><div class="wrap hero-grid">
      <div><div class="eyebrow">Elaine Lee · Product Marketing · NYC area</div>
        <h1>I make complex products easier to understand—and choose.</h1>
        <p class="hero-intro">I connect customer insight, product value, and go-to-market execution across AI startups and global B2B technology.</p>
        <div class="hero-actions"><a class="button-link" href="work.html">Explore selected work <span aria-hidden="true">→</span></a><a class="arrow-link" href="mailto:el4427@nyu.edu">Get in touch ↗</a></div>
      </div>
      <aside class="hero-aside"><div class="eyebrow">How I work</div><p><strong>Understand the audience.</strong> Turn technical capabilities into a story people can act on.</p><p><strong>Connect the journey.</strong> Bring positioning, campaigns, and follow-up together.</p></aside>
    </div></section>
    <section class="section-block"><div class="wrap">
      <div class="section-heading"><div><div class="eyebrow">Selected work · 4 case studies</div><h2>Strategy, made useful.</h2></div><p>Examples across product launches, demand generation, partner marketing, and content systems.</p></div>
      ${workGrid(false)}<p class="inline-links"><a class="arrow-link" href="work.html">View all selected work, including independent projects →</a></p>
    </div></section>
    <section class="wrap profile-strip"><div><div class="eyebrow">A little about me</div><h2>Curious about the customer. Fluent in the product.</h2></div><div class="profile-copy"><p>My work spans early-stage AI product marketing and global B2B programs at ASUS. I enjoy making technical value clear, learning what different buyers need, and building programs that connect a message to measurable action.</p><p>I hold an M.S. in Information Systems from NYU.</p><a class="arrow-link" href="about.html">More about Elaine →</a></div></section>`;
  }

  function workPage() {
    return `<section class="page-intro wrap"><div class="eyebrow">Selected work</div><h1>Work that connects the dots.</h1><p>Four employer case studies, plus one clearly labeled independent project. Each one shows the audience, the strategy, my role, and what the available evidence can—and cannot—say.</p></section>
      <section class="section-block"><div class="wrap">
        <div class="section-heading"><div><div class="eyebrow">Four case studies + one independent project</div><h2>Selected projects</h2></div><p>Employer work is distinguished from independent work, with role attribution and measurement context preserved.</p></div>
        ${workGrid(true)}
      </div></section>`;
  }

  function aboutPage() {
    return `<section class="page-intro wrap"><div class="eyebrow">About</div><h1>Make the complex clear. Make the work count.</h1><p>I'm Elaine, a product marketer drawn to technical products, thoughtful storytelling, and the details that make a go-to-market plan work in real life.</p></section>
      <section class="wrap about-grid"><div class="about-copy">
        <p>Across early-stage AI and global enterprise technology, I've worked on customer research, positioning, product launches, demand generation, partner programs, and content strategy. I like starting with the buyer's problem, finding the product truth that matters, and helping teams carry that story through the whole customer journey.</p>
        <p>My M.S. in Information Systems from NYU gives me a technical foundation for working closely with product and engineering teams. Outside the case studies, I build small independent projects to explore how AI can support practical marketing workflows.</p>
        <div class="inline-links"><a class="button-link" href="Elaine_Lee_Resume.pdf" target="_blank" rel="noopener">View résumé (PDF) ↗</a><a class="arrow-link" href="mailto:el4427@nyu.edu">Email Elaine ↗</a></div>
      </div><aside class="detail-panel"><div class="eyebrow">Experience & focus</div><h2>Where I bring value</h2>
        <div class="detail-item"><strong>AI product marketing</strong><span>Customer discovery · positioning · launch</span></div>
        <div class="detail-item"><strong>Global B2B demand</strong><span>Campaigns · regional activation · lead handoff</span></div>
        <div class="detail-item"><strong>Partner & content programs</strong><span>Co-marketing · webinars · sales enablement</span></div>
        <div class="detail-item"><strong>Education</strong><span>M.S. Information Systems · New York University</span></div>
      </aside></section>`;
  }

  function helperAIShowcase() {
    return `<section class="product-showcase" aria-labelledby="product-overview">
      <div class="eyebrow">Product overview</div><h2 id="product-overview">What is HelperAI?</h2>
      <p><strong>HelperAI was an AI agent development and deployment platform designed for developers.</strong> It helped teams move AI agents from prototype to production by bringing together the infrastructure needed to build, connect, run, and manage them.</p>
      <p>For example, a sales agent might look up account information, retrieve relevant context, and create a follow-up task. Beyond the AI model, that workflow needs API connections, user authorization, memory, and reliable deployment.</p>
      <div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/hHG4B-13010?start=2&amp;rel=0" title="HelperAI product walkthrough video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <p class="case-note"><a href="https://www.youtube.com/watch?v=hHG4B-13010&amp;t=2s" target="_blank" rel="noopener noreferrer">Watch the HelperAI demo on YouTube ↗</a></p>
    </section>
    <section class="feature-section" aria-labelledby="features-heading"><div class="feature-heading"><div class="eyebrow">Platform capability map</div><h2 id="features-heading">From prototype to production.</h2><p>A conceptual overview of the four capability groups that supported the agent lifecycle.</p></div>
      <div class="feature-map" role="group" aria-label="HelperAI capabilities grouped into Build, Connect, Run, and Manage">
        <div class="feature-stage"><div class="step">01 / CREATE</div><h3>Build</h3><div class="value">Create an agent and give it knowledge</div><ul><li><strong>Agent construction</strong>Configure agent behavior and tasks</li><li><strong>Knowledge base</strong>Use reference information to answer questions</li></ul></div>
        <div class="feature-stage"><div class="step">02 / INTEGRATE</div><h3>Connect</h3><div class="value">Make the agent useful in real systems</div><ul><li><strong>API tools</strong>Call external services and take actions</li><li><strong>OAuth2 authorization</strong>Manage user-approved access and tokens</li><li><strong>Bot integrations</strong>Connect via Slack, Telegram, or webhooks</li></ul></div>
        <div class="feature-stage"><div class="step">03 / EXECUTE</div><h3>Run</h3><div class="value">Carry out tasks with relevant context</div><ul><li><strong>Memory</strong>Retain context across interactions</li><li><strong>Event-driven tasks</strong>Trigger work from events or subscriptions</li><li><strong>Runtime management</strong>Operate agent execution</li></ul></div>
        <div class="feature-stage"><div class="step">04 / OPERATE</div><h3>Manage</h3><div class="value">Control releases and ongoing changes</div><ul><li><strong>Versioning</strong>Track and control updates</li><li><strong>Environments</strong>Use different development and production settings</li><li><strong>Deployment</strong>Launch and maintain agents</li></ul></div>
      </div><p class="feature-caption">Conceptual feature map based on HelperAI's product capabilities—not a literal diagram of its internal system architecture.</p>
    </section>`;
  }

  function casePage(project) {
    const index = projects.indexOf(project);
    const next = projects[(index + 1) % projects.length];
    return `<article class="wrap case-page">
      <header class="case-hero"><a class="back-link" href="work.html">← All selected work</a><div class="eyebrow">${project.number} / 04 · ${project.category}</div><h1>${project.title}</h1><p class="case-lede">${project.lede}</p></header>
      ${project.id === 'helperai' ? helperAIShowcase() : ''}
      <div class="case-facts">${project.facts.map(fact => `<div class="case-fact"><small>${fact[0]}</small><strong>${fact[1]}</strong></div>`).join('')}</div>
      ${project.sections.map((section, i) => `<section class="story" aria-labelledby="story-${i}"><div class="story-label">${String(i + 1).padStart(2, '0')} / ${section.label}</div><div><h2 id="story-${i}">${section.title}</h2>${section.body}</div></section>${i < project.sections.length - 1 ? '<div class="story-divider"></div>' : ''}`).join('')}
      <div class="takeaway"><div class="eyebrow">Key takeaway</div><p>${project.takeaway}</p></div>
      ${project.links.length ? `<div class="source-links">${project.links.map(link => `<a href="${link[1]}" target="_blank" rel="noopener noreferrer">${link[0]} ↗</a>`).join('')}</div>` : ''}
      ${project.note ? `<p class="case-note">${project.note}</p>` : ''}
      <nav class="case-end" aria-label="Case study navigation"><a href="work.html">← All selected work</a><a href="${projectPaths[next.id]}">Next: ${next.cardTitle} →</a></nav>
    </article>`;
  }

  function render() {
    const page = document.body.dataset.page;
    if (page === 'home') app.innerHTML = homePage();
    else if (page === 'work') app.innerHTML = workPage();
    else if (page === 'about') app.innerHTML = aboutPage();
    else if (page === 'case') {
      const project = projects.find(item => item.id === document.body.dataset.project);
      if (project) app.innerHTML = casePage(project);
    }

    const legacy = (location.hash || '').replace(/^#\/?/, '');
    const aliases = { work: '', 'work/chainsight': 'helperai', 'work/helperai': 'helperai', 'work/demand-gen': 'gartner', 'work/gartner': 'gartner', 'work/webinar': 'webinar', 'work/asus': 'content', 'work/content-strategy': 'content', 'ai-workflow': 'content' };
    const legacyId = aliases[legacy] ?? legacy;
    if (legacy && legacyId === '') {
      app.innerHTML = workPage();
      document.title = legacyTitles[legacyId];
    } else if (legacy && legacyId === 'about') {
      app.innerHTML = aboutPage();
      document.title = legacyTitles[legacyId];
    } else if (legacy) {
      const project = projects.find(item => item.id === legacyId);
      if (project) {
        app.innerHTML = casePage(project);
        document.title = legacyTitles[legacyId];
      }
    }
  }

  render();
  window.addEventListener('hashchange', render);
})();
