const markets = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    summary:
      "Use machine intelligence as a collaborator, not a replacement, by redesigning workflows around human judgment.",
    signals: [
      "Copilots are becoming standard in most knowledge roles.",
      "Quality advantage comes from domain context and oversight.",
      "Fast iteration beats one-time automation projects.",
    ],
    affinities: {
      work: 0.95,
      learning: 0.9,
      finance: 0.75,
      health: 0.45,
      relationships: 0.4,
      civic: 0.65,
    },
    momentum: { now: 93, build: 96, reinvent: 95 },
    playbooks: {
      now: "Automate one repetitive weekly task and document the quality guardrails.",
      build: "Create an AI-augmented operating manual for your top 3 responsibilities.",
      reinvent: "Launch a service or role that combines AI output with human trust.",
    },
  },
  {
    id: "capital",
    name: "Capital",
    summary:
      "Shift from wage-only security to layered capital: savings, ownership, and AI-era optionality.",
    signals: [
      "Volatility rewards disciplined personal risk systems.",
      "Ownership structures matter more as automation scales.",
      "Cash runway buys learning time during disruption.",
    ],
    affinities: {
      work: 0.65,
      learning: 0.55,
      finance: 0.98,
      health: 0.4,
      relationships: 0.45,
      civic: 0.55,
    },
    momentum: { now: 85, build: 90, reinvent: 94 },
    playbooks: {
      now: "Create a 12-month resilience budget and remove one fragile dependency.",
      build: "Build a small portfolio tied to long-term AI infrastructure themes.",
      reinvent: "Design a personal capital stack that funds multi-year reinvention.",
    },
  },
  {
    id: "energy",
    name: "Energy",
    summary:
      "Track how energy transitions affect household cost, mobility, and local economic resilience.",
    signals: [
      "Energy price shifts directly hit personal living stability.",
      "Distributed systems improve local reliability.",
      "Efficiency upgrades compound over years.",
    ],
    affinities: {
      work: 0.45,
      learning: 0.5,
      finance: 0.8,
      health: 0.55,
      relationships: 0.5,
      civic: 0.78,
    },
    momentum: { now: 76, build: 83, reinvent: 89 },
    playbooks: {
      now: "Audit your home energy exposure and prioritize one efficiency upgrade.",
      build: "Join or start a local group learning about resilient energy options.",
      reinvent: "Develop a community or business model around clean energy access.",
    },
  },
  {
    id: "health-longevity",
    name: "Health and Longevity",
    summary:
      "Treat personal health as strategic infrastructure for sustained adaptation and creativity.",
    signals: [
      "Preventive practices outperform reactive care in long transitions.",
      "Data-informed routines can improve consistency.",
      "Stress management is now a core professional advantage.",
    ],
    affinities: {
      work: 0.6,
      learning: 0.62,
      finance: 0.58,
      health: 0.99,
      relationships: 0.74,
      civic: 0.52,
    },
    momentum: { now: 88, build: 91, reinvent: 93 },
    playbooks: {
      now: "Lock a weekly schedule for sleep, movement, and cognitive recovery.",
      build: "Use simple biometric tracking to tune energy peaks to deep work.",
      reinvent: "Align your career strategy with a 20-year health horizon.",
    },
  },
  {
    id: "human-development",
    name: "Human Development",
    summary:
      "Upgrade skills, values, and meaning systems so adaptation is sustainable, not just reactive.",
    signals: [
      "Meta-learning is replacing static credentials.",
      "Communication and synthesis stay high-value human capabilities.",
      "Purpose clarity reduces transition panic and decision fatigue.",
    ],
    affinities: {
      work: 0.86,
      learning: 1.0,
      finance: 0.52,
      health: 0.68,
      relationships: 0.84,
      civic: 0.72,
    },
    momentum: { now: 90, build: 93, reinvent: 92 },
    playbooks: {
      now: "Define one skill ladder with milestones for the next 90 days.",
      build: "Create a learning loop: learn, apply, teach, and capture evidence.",
      reinvent: "Build a new identity narrative that fits an AI-amplified economy.",
    },
  },
  {
    id: "networks-sensors",
    name: "Networks and Sensors",
    summary:
      "Understand the systems that sense, connect, and coordinate the physical and digital world.",
    signals: [
      "Edge devices are expanding real-time decision systems.",
      "Data quality drives trust and automation safety.",
      "Sensor-rich environments reshape logistics and services.",
    ],
    affinities: {
      work: 0.72,
      learning: 0.82,
      finance: 0.63,
      health: 0.58,
      relationships: 0.42,
      civic: 0.8,
    },
    momentum: { now: 74, build: 82, reinvent: 90 },
    playbooks: {
      now: "Map one local system where better sensing could reduce friction.",
      build: "Prototype a small data dashboard to track a real-world process.",
      reinvent: "Position yourself in roles where connected systems shape decisions.",
    },
  },
  {
    id: "robotics",
    name: "Robotics",
    summary:
      "Prepare for physical automation by identifying where humans remain essential in safety and empathy.",
    signals: [
      "Robotics is moving from factory niches into services.",
      "Human-robot workflow design is a growing skill category.",
      "Operational reliability is now a competitive edge.",
    ],
    affinities: {
      work: 0.88,
      learning: 0.75,
      finance: 0.74,
      health: 0.44,
      relationships: 0.35,
      civic: 0.62,
    },
    momentum: { now: 77, build: 86, reinvent: 93 },
    playbooks: {
      now: "Identify manual tasks in your industry likely to be automated first.",
      build: "Learn one robotics-adjacent tool used in your domain.",
      reinvent: "Design human-in-the-loop roles around automated physical systems.",
    },
  },
  {
    id: "transportation",
    name: "Transportation",
    summary:
      "Track mobility shifts that influence where people live, work, and access opportunity.",
    signals: [
      "Autonomy and electrification are changing transport cost curves.",
      "Commute assumptions are becoming less stable.",
      "Regional mobility access affects job resilience.",
    ],
    affinities: {
      work: 0.58,
      learning: 0.46,
      finance: 0.71,
      health: 0.62,
      relationships: 0.5,
      civic: 0.82,
    },
    momentum: { now: 70, build: 78, reinvent: 86 },
    playbooks: {
      now: "Reduce one mobility bottleneck that drains weekly time or money.",
      build: "Test one low-friction transport routine aligned to your goals.",
      reinvent: "Evaluate relocation or commuting strategies for future opportunity hubs.",
    },
  },
  {
    id: "vr-ar",
    name: "Virtual and Augmented Reality",
    summary:
      "Use immersive tools for learning, collaboration, and services where physical presence is costly.",
    signals: [
      "Spatial interfaces are becoming practical in training and design.",
      "Hybrid digital-physical experiences are expanding.",
      "Early experimentation can create disproportionate upside.",
    ],
    affinities: {
      work: 0.74,
      learning: 0.82,
      finance: 0.56,
      health: 0.5,
      relationships: 0.66,
      civic: 0.61,
    },
    momentum: { now: 69, build: 80, reinvent: 88 },
    playbooks: {
      now: "Run one immersive learning experiment tied to a current skill gap.",
      build: "Pilot an AR/VR collaboration format in a real project.",
      reinvent: "Create or join services built around spatial digital experiences.",
    },
  },
];

const state = {
  selected: ["ai", "human-development", "health-longevity"],
  active: "ai",
  horizon: "now",
  weeklyHours: 8,
  risk: 3,
  domains: {
    work: 62,
    learning: 68,
    finance: 54,
    health: 61,
    relationships: 58,
    civic: 45,
  },
};

const domainNames = {
  work: "Work",
  learning: "Learning",
  finance: "Finance",
  health: "Health",
  relationships: "Relationships",
  civic: "Civic",
};

const horizonMeta = {
  now: {
    label: "Now",
    summary: "Stabilize your current position and remove obvious fragility.",
  },
  build: {
    label: "Build",
    summary: "Compound skills, systems, and capital across 1-3 years.",
  },
  reinvent: {
    label: "Reinvent",
    summary: "Position for structural shifts in 3-10 year scenarios.",
  },
};

const sprintFallback = [
  "Pick one humane.com market and write a one-page opportunity map for your current role.",
  "Schedule two 45-minute transition blocks next week for deliberate learning.",
  "Ask one mentor or peer which capability they think will matter most by 2028.",
];

function average(values) {
  return values.reduce((total, value) => total + value, 0) / values.length;
}

function byId(id) {
  return markets.find((market) => market.id === id);
}

function sortedDomains() {
  return Object.entries(state.domains).sort((a, b) => a[1] - b[1]);
}

function scoreLabel(score) {
  if (score >= 82) return "Compounding";
  if (score >= 64) return "Advancing";
  if (score >= 45) return "Stabilizing";
  return "At Risk";
}

function calcThriveScore() {
  const domainAvg = average(Object.values(state.domains));
  const selectedSet = state.selected.length > 0 ? state.selected : ["human-development"];
  const momentum =
    average(selectedSet.map((id) => byId(id).momentum[state.horizon])) || 0;
  const effort = Math.min(100, state.weeklyHours * 5);
  const riskFit = 100 - Math.abs(state.risk - 3) * 16;

  const score = Math.round(
    domainAvg * 0.45 + momentum * 0.27 + effort * 0.17 + riskFit * 0.11,
  );
  return Math.max(0, Math.min(100, score));
}

function formatReviewDate() {
  const review = new Date();
  review.setDate(review.getDate() + 14);
  return review.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function renderOrbit() {
  const orbit = document.querySelector("#orbit");
  orbit.innerHTML = "";

  const size = orbit.clientWidth;
  const center = size / 2;
  const radius = size * 0.41;
  const step = (Math.PI * 2) / markets.length;

  markets.forEach((market, index) => {
    const angle = -Math.PI / 2 + index * step;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;

    const button = document.createElement("button");
    button.className = "orbit-btn";
    button.textContent = market.name;
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.type = "button";
    button.setAttribute("aria-label", market.name);

    if (state.active === market.id) button.classList.add("active");
    if (state.selected.includes(market.id)) button.classList.add("selected");

    button.addEventListener("click", () => {
      state.active = market.id;
      if (state.selected.includes(market.id)) {
        state.selected = state.selected.filter((id) => id !== market.id);
      } else {
        if (state.selected.length >= 3) state.selected.shift();
        state.selected.push(market.id);
      }
      renderAll();
    });

    orbit.append(button);
  });

  document.querySelector("#focusCount").textContent = state.selected.length;
}

function renderMarketDetail() {
  const detail = document.querySelector("#marketDetail");
  const market = byId(state.active);
  const inFocus = state.selected.includes(market.id);

  detail.innerHTML = `
    <h3>${market.name}</h3>
    <p>${market.summary}</p>
    <ul class="signal-list">
      ${market.signals.map((signal) => `<li>${signal}</li>`).join("")}
    </ul>
    <div class="tag-row">
      <span class="tag">${inFocus ? "focused" : "not focused"}</span>
      <span class="tag">momentum ${market.momentum[state.horizon]}</span>
      <span class="tag">${horizonMeta[state.horizon].label.toLowerCase()} horizon</span>
    </div>
  `;
}

function renderMetrics() {
  const thrive = calcThriveScore();
  const weakDomain = sortedDomains()[0]?.[0] || "work";
  const weakLabel = domainNames[weakDomain];

  document.querySelector("#thriveScore").textContent = `${thrive} (${scoreLabel(thrive)})`;
  document.querySelector("#focusedMarkets").textContent = `${state.selected.length}`;
  document.querySelector("#weakSystem").textContent = weakLabel;
}

function buildSprints() {
  const sprints = [];
  const selectedMarkets = state.selected.map((id) => byId(id));

  selectedMarkets.forEach((market) => {
    sprints.push({
      title: market.playbooks[state.horizon],
      meta: `${market.name} / week ${sprints.length + 1}`,
    });
  });

  const domainBoosters = {
    work: "Reshape one weekly workflow so AI handles setup while you own decisions.",
    learning: "Create a 5-hour learning sprint with one artifact as proof of progress.",
    finance: "Set an automatic transfer that extends your runway by one extra month.",
    health: "Block two no-screen recovery sessions to protect cognitive performance.",
    relationships:
      "Schedule one strategic conversation to expand support and collaboration options.",
    civic: "Join one local or online community initiative tied to AI transition outcomes.",
  };

  sortedDomains()
    .slice(0, 3)
    .forEach(([domain], index) => {
      sprints.push({
        title: domainBoosters[domain],
        meta: `${domainNames[domain]} / week ${selectedMarkets.length + index + 1}`,
      });
    });

  if (sprints.length === 0) {
    sprintFallback.forEach((title, index) => {
      sprints.push({ title, meta: `Starter / week ${index + 1}` });
    });
  }

  return sprints.slice(0, 6);
}

function renderSprints() {
  const sprintList = document.querySelector("#sprintList");
  const items = buildSprints();

  sprintList.innerHTML = items
    .map(
      (item) => `
      <li>
        <span class="sprint-title">${item.title}</span>
        <span class="sprint-meta">${item.meta}</span>
      </li>
    `,
    )
    .join("");
}

function renderHeatmap() {
  const wrap = document.querySelector("#lifeHeatmap");
  wrap.innerHTML = Object.entries(state.domains)
    .map(
      ([domain, value]) => `
      <article class="heat-cell">
        <header>
          <strong>${domainNames[domain]}</strong>
          <span>${value}</span>
        </header>
        <div class="heat-bar"><span style="width:${value}%;"></span></div>
      </article>
    `,
    )
    .join("");
}

function renderScenarios() {
  const cards = document.querySelector("#scenarioCards");
  const domainAvg = average(Object.values(state.domains));
  const selected = state.selected.length ? state.selected : ["human-development"];

  const html = Object.entries(horizonMeta).map(([horizonKey, meta]) => {
    const momentum = average(selected.map((id) => byId(id).momentum[horizonKey]));
    const effortScore = Math.min(100, state.weeklyHours * 4.5);
    const scenarioScore = Math.round(momentum * 0.48 + domainAvg * 0.37 + effortScore * 0.15);

    const topMarket = selected
      .map((id) => byId(id))
      .sort((a, b) => b.momentum[horizonKey] - a.momentum[horizonKey])[0];

    return `
      <article class="scenario-card">
        <h3>${meta.label}</h3>
        <p>${meta.summary}</p>
        <p>Lead market: <strong>${topMarket.name}</strong></p>
        <div class="scenario-score">
          <span>${scenarioScore}/100</span>
          <meter min="0" max="100" low="45" high="75" optimum="88" value="${scenarioScore}"></meter>
        </div>
      </article>
    `;
  });

  cards.innerHTML = html.join("");
}

function autoRebalance() {
  const weakDomains = sortedDomains().slice(0, 2).map(([domain]) => domain);

  const scored = markets
    .map((market) => {
      const domainLift = weakDomains.reduce(
        (sum, domain) => sum + market.affinities[domain],
        0,
      );
      const horizonMomentum = market.momentum[state.horizon];
      const riskBias = state.risk >= 4 ? market.momentum.reinvent : market.momentum.now;
      const score = domainLift * 34 + horizonMomentum * 0.58 + riskBias * 0.16;
      return { market, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.market.id);

  state.selected = scored;
  state.active = scored[0];
  renderAll();
}

function bindControls() {
  const horizonSelect = document.querySelector("#horizonSelect");
  const hoursInput = document.querySelector("#hoursInput");
  const riskInput = document.querySelector("#riskInput");
  const rebalanceBtn = document.querySelector("#rebalanceBtn");

  horizonSelect.value = state.horizon;
  horizonSelect.addEventListener("change", (event) => {
    state.horizon = event.target.value;
    renderAll();
  });

  hoursInput.value = String(state.weeklyHours);
  document.querySelector("#hoursValue").textContent = String(state.weeklyHours);
  hoursInput.addEventListener("input", (event) => {
    state.weeklyHours = Number(event.target.value);
    document.querySelector("#hoursValue").textContent = String(state.weeklyHours);
    renderAll();
  });

  riskInput.value = String(state.risk);
  document.querySelector("#riskValue").textContent = String(state.risk);
  riskInput.addEventListener("input", (event) => {
    state.risk = Number(event.target.value);
    document.querySelector("#riskValue").textContent = String(state.risk);
    renderAll();
  });

  document.querySelectorAll(".domain-input").forEach((input) => {
    const domain = input.dataset.domain;
    input.value = String(state.domains[domain]);
    input.addEventListener("input", (event) => {
      const value = Number(event.target.value);
      state.domains[domain] = value;
      const output = document.querySelector(`#${domain}Out`);
      if (output) output.textContent = String(value);
      renderAll();
    });
  });

  rebalanceBtn.addEventListener("click", autoRebalance);
}

function renderAll() {
  renderOrbit();
  renderMarketDetail();
  renderMetrics();
  renderSprints();
  renderHeatmap();
  renderScenarios();
  document.querySelector("#reviewDate").textContent = formatReviewDate();
}

function init() {
  bindControls();
  renderAll();
  window.addEventListener("resize", renderOrbit);
}

init();
