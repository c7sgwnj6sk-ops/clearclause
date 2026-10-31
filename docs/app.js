const findings = {
  concerns: [
    {
      level: "high", badge: "High attention", icon: "!", title: "Cancellation is one-sided",
      clause: "The Company may terminate this Agreement at any time. Customer may terminate only after the Initial Term.",
      source: "Sample · Page 6 · Section 8.2",
      explanation: "They can end the deal whenever they choose, while you may be locked in for the full first year.",
      relevance: "You said you want flexibility to leave if the service is not working.",
      suggestion: "Ask for the same termination right for both parties, with 30 days’ notice."
    },
    {
      level: "medium", badge: "Worth checking", icon: "?", title: "Renews automatically for 12 months",
      clause: "The Agreement automatically renews for successive twelve-month periods unless notice is received 60 days before renewal.",
      source: "Sample · Page 3 · Section 3.1",
      explanation: "Missing a narrow cancellation window could commit you to, and charge you for, another year.",
      relevance: "A long renewal works against your goal of keeping costs predictable.",
      suggestion: "Request month-to-month renewal, or a reminder and a 30-day cancellation window."
    },
    {
      level: "medium", badge: "Worth checking", icon: "?", title: "Your data may be used broadly",
      clause: "Customer grants the Company a perpetual, worldwide licence to use Submitted Data to improve its products and services.",
      source: "Sample · Page 8 · Section 11.4",
      explanation: "The licence does not clearly end when the contract ends and does not limit use to anonymised information.",
      relevance: "This may be wider than needed to deliver the service you are buying.",
      suggestion: "Limit use to providing the service, with only aggregated and anonymised data allowed for improvement."
    }
  ],
  positives: [
    {
      level: "positive", badge: "Works in your favour", icon: "✓", title: "You get time to fix a breach",
      clause: "A material breach may be cured within fourteen (14) days after written notice.",
      source: "Sample · Page 6 · Section 8.1",
      explanation: "You normally get a warning and two weeks to correct a problem before termination.",
      relevance: "This reduces the chance of the agreement ending over a fixable mistake.",
      suggestion: "Keep this protection and confirm it applies to both parties."
    }
  ]
};

const questions = [
  "Can both parties terminate on 30 days’ written notice?",
  "Can renewal be month-to-month instead of another full year?",
  "Can data use be limited to providing the service and anonymised improvement?"
];

const state = { files: [], progressTimer: null };
const screens = [...document.querySelectorAll(".screen")];
const fileInput = document.querySelector("#file-input");
const fileList = document.querySelector("#file-list");

function showScreen(id, push = true) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
  if (push) history.pushState({ screen: id }, "", `#${id}`);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function formatSize(bytes) {
  if (!bytes) return "Sample";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function renderFiles() {
  fileList.replaceChildren();
  state.files.forEach((file, index) => {
    const item = document.createElement("li");
    const isPDF = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    item.innerHTML = `<span class="file-icon">${isPDF ? "PDF" : "IMG"}</span><span><strong></strong><small></small></span><button type="button" aria-label="Remove file">×</button>`;
    item.querySelector("strong").textContent = file.name;
    item.querySelector("small").textContent = formatSize(file.size);
    item.querySelector("button").addEventListener("click", () => {
      state.files.splice(index, 1);
      renderFiles();
    });
    fileList.append(item);
  });
  document.querySelector("#drop-zone").classList.toggle("has-files", state.files.length > 0);
  document.querySelector("#review-button").textContent = state.files.length ? "Preview sample review →" : "Preview with sample →";
}

function addFiles(files) {
  const allowed = [...files].filter((file) => file.type === "application/pdf" || file.type.startsWith("image/"));
  state.files.push(...allowed.map((file) => ({ name: file.name, size: file.size, type: file.type })));
  renderFiles();
}

function buildFinding(finding) {
  const node = document.querySelector("#finding-template").content.cloneNode(true);
  const card = node.querySelector(".finding-card");
  card.dataset.level = finding.level;
  card.querySelector(".finding-icon").textContent = finding.icon;
  card.querySelector("small").textContent = finding.badge;
  card.querySelector(".finding-summary strong").textContent = finding.title;
  card.querySelector(".finding-explanation").textContent = finding.explanation;
  card.querySelector("blockquote").textContent = `“${finding.clause}”`;
  card.querySelector(".source").textContent = finding.source;
  card.querySelector(".relevance").textContent = finding.relevance;
  card.querySelector(".suggestion").textContent = finding.suggestion;
  const toggle = card.querySelector(".finding-summary");
  toggle.addEventListener("click", () => {
    const expanded = card.classList.toggle("expanded");
    toggle.setAttribute("aria-expanded", String(expanded));
  });
  return node;
}

function renderResults() {
  document.querySelector("#result-file-name").textContent = state.files[0]?.name || "Sample service agreement.pdf";
  const role = document.querySelector("#party-role").value.toLowerCase();
  const goal = document.querySelector("#goal").value.trim();
  const type = document.querySelector("#document-type").value;
  const language = document.querySelector("#document-language").value;
  document.querySelector("#role-summary").textContent = `Checked for you as the ${role}`;
  document.querySelector("#goal-summary").textContent = goal;
  document.querySelector("#type-summary").textContent = type;
  document.querySelector("#language-summary").textContent = `Sample issue spotting for a ${language.toLowerCase()} document. The production version must check the governing-law and dispute-resolution clauses before applying Hong Kong rules.`;
  const concerns = document.querySelector("#concern-list");
  const positives = document.querySelector("#positive-list");
  concerns.replaceChildren(...findings.concerns.map(buildFinding));
  positives.replaceChildren(...findings.positives.map(buildFinding));
  const list = document.querySelector("#question-list");
  list.replaceChildren(...questions.map((question) => {
    const item = document.createElement("li");
    item.textContent = question;
    return item;
  }));
}

function beginAnalysis() {
  const role = document.querySelector("#party-role").value.toLowerCase();
  document.querySelector("#analysis-context").textContent = `Preparing the sample from the perspective of a ${role}.`;
  const circle = document.querySelector("#progress-circle");
  const status = document.querySelector("#analysis-status");
  const steps = [...document.querySelectorAll(".analysis-steps p")];
  let progress = 5;
  circle.style.setProperty("--progress", progress);
  steps.forEach((step) => step.classList.remove("done"));
  showScreen("analysis");
  clearInterval(state.progressTimer);
  state.progressTimer = setInterval(() => {
    progress += 5;
    circle.style.setProperty("--progress", progress);
    steps.forEach((step) => {
      if (progress >= Number(step.dataset.progress)) {
        step.classList.add("done");
        step.querySelector("span").textContent = "✓";
      }
    });
    if (progress >= 35) status.textContent = "Comparing the sample terms with your goal…";
    if (progress >= 70) status.textContent = "Making the sample findings easy to use…";
    if (progress >= 100) {
      clearInterval(state.progressTimer);
      renderResults();
      setTimeout(() => showScreen("results"), 250);
    }
  }, 70);
}

document.querySelector("#start-button").addEventListener("click", () => showScreen("setup"));
document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => showScreen(button.dataset.go)));
fileInput.addEventListener("change", () => addFiles(fileInput.files));
document.querySelector("#sample-file-button").addEventListener("click", () => {
  state.files = [{ name: "Sample service agreement.pdf", size: 0, type: "application/pdf" }];
  renderFiles();
});
document.querySelector("#review-form").addEventListener("submit", (event) => {
  event.preventDefault();
  beginAnalysis();
});

const dropZone = document.querySelector("#drop-zone");
for (const eventName of ["dragenter", "dragover"]) dropZone.addEventListener(eventName, (event) => { event.preventDefault(); dropZone.classList.add("dragging"); });
for (const eventName of ["dragleave", "drop"]) dropZone.addEventListener(eventName, (event) => { event.preventDefault(); dropZone.classList.remove("dragging"); });
dropZone.addEventListener("drop", (event) => addFiles(event.dataTransfer.files));

document.querySelector("#copy-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(questions.map((q, i) => `${i + 1}. ${q}`).join("\n"));
    button.textContent = "Copied";
  } catch {
    button.textContent = "Copy unavailable";
  }
  setTimeout(() => { button.textContent = "Copy questions"; }, 1400);
});

document.querySelector("#share-button").addEventListener("click", async () => {
  const text = "ClearClause sample review: three terms need attention. This prototype did not analyse the selected document.";
  try {
    if (navigator.share) await navigator.share({ title: "ClearClause sample review", text });
    else await navigator.clipboard.writeText(text);
  } catch (error) {
    if (error.name !== "AbortError") console.warn("Share unavailable", error);
  }
});

const installDialog = document.querySelector("#install-dialog");
document.querySelector("#install-button").addEventListener("click", () => installDialog.showModal());
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
installDialog.addEventListener("click", (event) => { if (event.target === installDialog) installDialog.close(); });

window.addEventListener("popstate", (event) => showScreen(event.state?.screen || location.hash.slice(1) || "home", false));
window.addEventListener("online", () => document.body.classList.remove("offline"));
window.addEventListener("offline", () => document.body.classList.add("offline"));
if (!navigator.onLine) document.body.classList.add("offline");

const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
document.documentElement.dataset.standalone = standalone ? "true" : "false";
document.querySelector("#install-button").hidden = Boolean(standalone);

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));

renderFiles();
showScreen(location.hash.slice(1) || "home", false);
