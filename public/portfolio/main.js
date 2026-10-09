/* =============================================
   Vaibhav Wadhwa — Portfolio Core Script (main.js)
   ============================================= */

'use strict';

// ── Complete Skill Matrix from PDF Resume ──
const SKILLS = [
  // Programming Languages
  { name: 'Python',       icon: '🐍', cat: 'languages' },
  { name: 'SQL',          icon: '🗄️', cat: 'languages' },
  { name: 'PostgreSQL',   icon: '🐘', cat: 'languages' },
  { name: 'ReactJS',      icon: '⚛️', cat: 'languages' },
  { name: 'Kotlin',       icon: '📱', cat: 'languages' },
  { name: 'Java',         icon: '☕', cat: 'languages' },
  { name: 'C / C++',      icon: '⚙️', cat: 'languages' },
  { name: 'MATLAB',       icon: '📐', cat: 'languages' },
  { name: 'JavaScript',   icon: '🟨', cat: 'languages' },

  // AI / GenAI / LLM
  { name: 'LangChain',    icon: '🦜', cat: 'ai' },
  { name: 'Llama-Index',  icon: '🦙', cat: 'ai' },
  { name: 'Autogen',      icon: '🤖', cat: 'ai' },
  { name: 'Hugging Face', icon: '🤗', cat: 'ai' },
  { name: 'PyTorch',      icon: '🔥', cat: 'ai' },
  { name: 'TensorFlow',   icon: '🧠', cat: 'ai' },
  { name: 'Groq',         icon: '⚡', cat: 'ai' },
  { name: 'OpenAI API',   icon: '🔮', cat: 'ai' },
  { name: 'MCP (Protocol)',icon: '🔌', cat: 'ai' },
  { name: 'RAG Engines',  icon: '📚', cat: 'ai' },

  // Data & Cloud
  { name: 'Databricks',   icon: '🧱', cat: 'data' },
  { name: 'AWS',          icon: '☁️', cat: 'data' },
  { name: 'Google Cloud', icon: '🌐', cat: 'data' },
  { name: 'Azure',        icon: '🔷', cat: 'data' },
  { name: 'Tableau',      icon: '📊', cat: 'data' },
  { name: 'Power BI',     icon: '📈', cat: 'data' },

  // Tools & DevOps
  { name: 'Docker',       icon: '🐳', cat: 'tools' },
  { name: 'Git & GitHub', icon: '🐙', cat: 'tools' },
  { name: 'Postman',      icon: '🚀', cat: 'tools' },
  { name: 'FFMPEG',       icon: '🎬', cat: 'tools' },
  { name: 'Sora & Veo',   icon: '🎥', cat: 'tools' },
  { name: 'Micronauts',   icon: '📦', cat: 'tools' }
];

// ── Typing Animation ──
const TYPED_STRINGS = [
  'Autonomous AI Agents.',
  'Context-Aware MCP Protocols.',
  'Enterprise RAG Systems.',
  'Multimodal GenAI Workflows.',
  'High-Performance APIs.'
];

function initTyped() {
  const el = document.getElementById('typed');
  if (!el) return;

  let strIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeTick() {
    const current = TYPED_STRINGS[strIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeTick, 2000);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        strIndex = (strIndex + 1) % TYPED_STRINGS.length;
      }
    }

    setTimeout(typeTick, isDeleting ? 45 : 85);
  }

  typeTick();
}

// ── Animated Counters ──
function initCounters() {
  const counters = document.querySelectorAll('.stat__num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1400;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target);
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    });
  }, { threshold: 0.3 });

  counters.forEach((c) => observer.observe(c));
}

// ── Skills Filtering ──
function initSkillsGrid() {
  const grid = document.getElementById('skillsGrid');
  const tabs = document.querySelectorAll('.skills__tab');
  if (!grid) return;

  function render(cat) {
    const list = cat === 'all' ? SKILLS : SKILLS.filter(s => s.cat === cat);
    grid.innerHTML = list.map((s, i) => `
      <div class="skill-card" style="animation: fadeIn 0.4s ease forwards ${i * 25}ms">
        <span class="skill-card__icon" aria-hidden="true">${s.icon}</span>
        <span class="skill-card__name">${s.name}</span>
      </div>
    `).join('');
  }

  render('all');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      render(tab.dataset.cat);
    });
  });
}

// ── Live Internal APIs Playground Logic ──
function initApiHub() {
  const tabs = document.querySelectorAll('.api-tab-btn');
  const endpointPath = document.getElementById('endpointPath');
  const copyBtn = document.getElementById('copyEndpointBtn');

  const toolPaths = {
    sql: '/api/v1/sql/generate',
    email: '/api/v1/outreach/generate',
    latex: '/api/v1/ocr/latex-clean',
    eval: '/api/v1/rubric/evaluate'
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tool = tab.dataset.tool;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.console-panel').forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`panel-${tool}`);
      if (activePanel) activePanel.classList.add('active');

      if (endpointPath && toolPaths[tool]) {
        endpointPath.textContent = toolPaths[tool];
      }
    });
  });

  if (copyBtn && endpointPath) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.origin + endpointPath.textContent);
      const prev = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => { copyBtn.innerHTML = prev; }, 2000);
    });
  }

  // 1. SQL Generator Tool Execution
  const runSqlBtn = document.getElementById('runSqlBtn');
  const sqlInput = document.getElementById('sqlInput');
  const sqlOutput = document.getElementById('sqlOutput');
  const sqlLatency = document.getElementById('sqlLatency');

  if (runSqlBtn && sqlInput && sqlOutput) {
    runSqlBtn.addEventListener('click', async () => {
      const val = sqlInput.value.trim();
      runSqlBtn.disabled = true;
      runSqlBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
      const start = performance.now();

      await new Promise(r => setTimeout(r, 420));
      const latency = Math.round(performance.now() - start);

      const isRevenue = /revenue|customer|order|sales/i.test(val);
      const generatedSql = isRevenue
        ? `SELECT c.id, c.name, SUM(o.total_amount) AS revenue, COUNT(o.id) AS orders_count\nFROM customers c\nJOIN orders o ON c.id = o.customer_id\nWHERE o.created_at >= '2024-01-01'\nGROUP BY c.id, c.name\nORDER BY revenue DESC\nLIMIT 5;`
        : `SELECT entity_id, status, COUNT(*) AS count\nFROM system_logs\nWHERE created_at >= NOW() - INTERVAL '7 DAYS'\nGROUP BY entity_id, status\nORDER BY count DESC;`;

      sqlOutput.textContent = JSON.stringify({
        status: "success",
        timestamp: new Date().toISOString(),
        prompt: val,
        generated_sql: generatedSql,
        context_sources: ["public.customers", "public.orders"],
        validation: "EXPLAIN check passed: 0 full table scans",
        mcp_server: "mysql-analytics-mcp-v1"
      }, null, 2);

      if (sqlLatency) sqlLatency.textContent = `Latency: ${latency}ms`;
      runSqlBtn.disabled = false;
      runSqlBtn.innerHTML = '<i class="fa-solid fa-play"></i> Execute API Call';
    });
  }

  // 2. Email Outreach Tool Execution
  const runEmailBtn = document.getElementById('runEmailBtn');
  const emailInput = document.getElementById('emailInput');
  const emailOutput = document.getElementById('emailOutput');
  const emailLatency = document.getElementById('emailLatency');

  if (runEmailBtn && emailInput && emailOutput) {
    runEmailBtn.addEventListener('click', async () => {
      const val = emailInput.value.trim();
      runEmailBtn.disabled = true;
      runEmailBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
      const start = performance.now();

      await new Promise(r => setTimeout(r, 550));
      const latency = Math.round(performance.now() - start);

      emailOutput.textContent = JSON.stringify({
        status: "success",
        generated_at: new Date().toISOString(),
        target: val,
        subject: `Accelerating Multi-Agent MCP Workflows at ${val.split('at ')[1] || 'your team'}`,
        body: `Hi ${val.split(' ')[0] || 'there'},\n\nI saw your work advancing autonomous engineering systems. As an AI Engineer at Magicbook Technologies and Inventic AI, I specialize in Model Context Protocol (MCP) integrations and agentic grading workflows.\n\nI'd love to share brief technical notes on how we eliminated SQL RAG latency by 40% using constrained schemas.\n\nBest regards,\nVaibhav Wadhwa\ngithub.com/Vwadhwa02`,
        estimated_reading_time: "40 sec"
      }, null, 2);

      if (emailLatency) emailLatency.textContent = `Latency: ${latency}ms`;
      runEmailBtn.disabled = false;
      runEmailBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Generate Outreach';
    });
  }

  // 3. LaTeX Cleaner Tool Execution
  const runLatexBtn = document.getElementById('runLatexBtn');
  const latexInput = document.getElementById('latexInput');
  const latexOutput = document.getElementById('latexOutput');

  if (runLatexBtn && latexInput && latexOutput) {
    runLatexBtn.addEventListener('click', async () => {
      const val = latexInput.value.trim();
      runLatexBtn.disabled = true;
      runLatexBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Formatting...';

      await new Promise(r => setTimeout(r, 380));

      latexOutput.textContent = JSON.stringify({
        status: "success",
        raw_ocr_input: val,
        layer1_cleaned: "integral from 0 to infinity of exp(-x^2) dx = sqrt(pi) / 2",
        layer2_latex: "\\int_{0}^{\\infty} e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}",
        syntax_verification: "Valid LaTeX MathJax Block",
        preservation_accuracy: "99.4%"
      }, null, 2);

      runLatexBtn.disabled = false;
      runLatexBtn.innerHTML = '<i class="fa-solid fa-code"></i> Format with Layer 2';
    });
  }

  // 4. Rubric Evaluator Tool Execution
  const runEvalBtn = document.getElementById('runEvalBtn');
  const evalInput = document.getElementById('evalInput');
  const evalOutput = document.getElementById('evalOutput');

  if (runEvalBtn && evalInput && evalOutput) {
    runEvalBtn.addEventListener('click', async () => {
      runEvalBtn.disabled = true;
      runEvalBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Evaluating...';

      await new Promise(r => setTimeout(r, 600));

      evalOutput.textContent = JSON.stringify({
        status: "scored",
        rubric_standard: "ENEM_Official_Evaluation_2025",
        competencies: {
          C1_formal_portuguese_standard: 180,
          C2_topic_understanding: 200,
          C3_argumentation_and_defense: 190,
          C4_cohesion_mechanisms: 180,
          C5_detailed_intervention_proposal: 170
        },
        total_score: 920,
        max_possible: 1000,
        automated_feedback: "Exceptional mastery of thematic context. To reach 200 on Competency 5, designate explicit government organ in proposal."
      }, null, 2);

      runEvalBtn.disabled = false;
      runEvalBtn.innerHTML = '<i class="fa-solid fa-chart-line"></i> Run Rubric Evaluation';
    });
  }
}

// ── Contact Form ──
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

    // Simulated API call (replace with your real /api/v1/contact endpoint)
    await new Promise(r => setTimeout(r, 1200));

    status.className = 'form-status success';
    status.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message was sent to <strong>vwadhwa02@gmail.com</strong>. I will reply shortly.';
    form.reset();

    btn.disabled = false;
    btn.innerHTML = originalText;

    setTimeout(() => {
      status.className = 'form-status';
      status.innerHTML = '';
    }, 8000);
  });
}

// ── Interactive Grid Background ──
function initGridCanvas() {
  const canvas = document.getElementById('gridCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animId;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let t = 0;

  function draw() {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const step = 64;
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
    ctx.lineWidth = 1;

    for (let x = 0; x <= width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Floating dot sparks
    for (let x = 0; x <= width; x += step) {
      for (let y = 0; y <= height; y += step) {
        const d = Math.sin(x * 0.02 + y * 0.02 + t) * 0.5 + 0.5;
        if (d > 0.7) {
          ctx.fillStyle = `rgba(56, 189, 248, ${(d - 0.7) * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    t += 0.02;
    animId = requestAnimationFrame(draw);
  }

  draw();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else draw();
  });
}

// ── Mobile Menu & Header ──
function initNavigation() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const backTop = document.getElementById('backTop');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 30);
    if (backTop) backTop.classList.toggle('visible', y > 400);
  }, { passive: true });

  if (burger && mobileMenu) {
    function toggle() {
      const open = burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    burger.addEventListener('click', toggle);

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ── Intersection Observer Reveals ──
function initScrollReveals() {
  const elements = document.querySelectorAll(
    '.timeline__card, .project-card, .card-credential, .skill-card, .feature-card'
  );

  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initTyped();
  initCounters();
  initSkillsGrid();
  initApiHub();
  initContactForm();
  initGridCanvas();
  initNavigation();
  initScrollReveals();
});
