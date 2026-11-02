const translations = {
  en: {
    metaDescription: "A private prototype that explains possible risks in Hong Kong legal documents in plain language.",
    statusOnDevice: "On-device", statusOffline: "Offline", install: "Install", switchLanguage: "切換至繁體中文",
    homeEyebrow: "Hong Kong legal document checker", homeTitle: "Know what you’re agreeing to.",
    homeCopy: "A plain-language second look at contract terms from your side of the deal.", checkDocument: "Check a document",
    howTitle: "How it works", how1Title: "Add your document", how1Copy: "Choose a PDF or clear page photos.",
    how2Title: "Tell us your position", how2Copy: "Your role and what you want from the deal.",
    how3Title: "See what needs attention", how3Copy: "Plain explanations, clause evidence, and questions to ask.",
    privacyTitle: "Private prototype", privacyCopy: "Selected files and your answers stay inside this browser and are not uploaded.",
    homeLegal: "ClearClause highlights possible risks and missing context. It cannot determine another party’s intent and is not a substitute for a Hong Kong-qualified lawyer.",
    backHome: "Back to home", newReview: "New review", setupTitle: "Give the review context",
    setupCopy: "The same clause can help one party and hurt another.", stepDocument: "1 · Document",
    addFilesTitle: "Add PDF or clear page photos", addFilesCopy: "Include schedules, appendices, and referenced terms if you have them.",
    chooseFiles: "Choose files", useSample: "Use sample", prototypeTitle: "Prototype limitation",
    prototypeCopy: "The offline version accepts files for flow testing, but it does not yet read their contents. Results below use clearly labelled sample clauses.",
    stepHongKong: "2 · Hong Kong context", hongKongSAR: "Hong Kong SAR", hkBaseline: "Hong Kong law is the review baseline",
    documentTypeLabel: "Document type", typeServices: "Services / supplier agreement", typeEmployment: "Employment contract",
    typeTenancy: "Tenancy agreement", typeSale: "Sale and purchase", typeNDA: "NDA / confidentiality",
    typeLoan: "Loan / guarantee", other: "Other", documentLanguageLabel: "Document language",
    languageEnglish: "English", languageChinese: "Traditional Chinese", languageBilingual: "Bilingual",
    stepYourSide: "3 · Your side", partyLabel: "Which party are you?", partyCustomer: "Customer",
    partyContractor: "Contractor", partyEmployee: "Employee", partyTenant: "Tenant", partyBuyer: "Buyer", partySeller: "Seller",
    stepGoal: "4 · Your goal", goalLabel: "What matters most to you?",
    goalDefault: "I want to be able to cancel easily and avoid surprise costs.",
    goalHelp: "Example: “I need to leave with 30 days’ notice and keep ownership of my work.”",
    previewSampleReview: "Preview sample review →", previewWithSample: "Preview with sample →", sample: "Sample",
    sampleFileName: "Sample service agreement.pdf", removeFile: "Remove file",
    analysisPreparing: "Preparing the sample review…", analysisLoad: "Load sample clauses",
    analysisPerspective: "Apply your selected perspective", analysisFindings: "Prepare sample findings",
    analysisSample: "Prototype animation — sample findings only",
    analysisContext: "Preparing the sample from the perspective of a {role}.",
    analysisComparing: "Comparing the sample terms with your goal…", analysisSimplifying: "Making the sample findings easy to use…",
    resultsComplete: "Sample review complete", shareReview: "Share review", needsAttention: "Needs attention",
    verdictTitle: "Some terms work against your goal.",
    verdictCopy: "The agreement is not necessarily unsafe, but cancellation, renewal, and data-use terms deserve changes or clarification before you sign.",
    roleSummary: "Checked from the {role}’s perspective", hkContext: "Hong Kong law context",
    languageSummary: "Sample issue spotting for this {language} document. The production version must check the governing-law and dispute-resolution clauses before applying Hong Kong rules.",
    hkBullet1: "Governing law, Hong Kong courts, and arbitration seat", hkBullet2: "Exclusion, liability, and indemnity wording",
    hkBullet3: "Consumer fairness rules where they may apply", hkBullet4: "Personal-data purpose, sharing, retention, and security",
    hkNote: "A flag means “get advice or clarification,” not that a clause is automatically invalid.",
    whatNeedsAttention: "What needs attention", threeFindings: "3 sample findings", whatWorks: "What works for you",
    takeAction: "Take action", questionsTitle: "Questions to send the other party", copyQuestions: "Copy questions",
    copied: "Copied", copyUnavailable: "Copy unavailable", missingContext: "Missing context",
    missingCopy: "The agreement refers to a “Data Policy” and “Order Form,” but neither was included. They could change this review.",
    anotherReview: "Start another review",
    resultsLegal: "This is a sample AI-product prototype, not legal advice. It does not yet read the selected document and may not be used to decide whether to sign.",
    installOnce: "One-time setup", installTitle: "Add ClearClause to iPhone", close: "Close",
    install1Title: "Open this page in Safari", install1Copy: "Home Screen installation must be started from Safari.",
    install2Title: "Tap Share", install2Copy: "Choose “Add to Home Screen,” then tap Add.",
    install3Title: "Open it once while online", install3Copy: "The prototype can then reopen offline without Xcode.", gotIt: "Got it",
    findingClause: "The sample clause", findingRelevance: "Why it matters to you", findingSuggestion: "What to ask for",
    shareTitle: "ClearClause sample review",
    shareText: "ClearClause sample review: three terms need attention. This prototype did not analyse the selected document.",
    findings: {
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
    },
    questions: [
      "Can both parties terminate on 30 days’ written notice?",
      "Can renewal be month-to-month instead of another full year?",
      "Can data use be limited to providing the service and anonymised improvement?"
    ]
  },
  "zh-Hant": {
    metaDescription: "以簡單語言解釋香港法律文件潛在風險的私人原型。",
    statusOnDevice: "裝置端", statusOffline: "離線", install: "安裝", switchLanguage: "Switch to English",
    homeEyebrow: "香港法律文件檢查工具", homeTitle: "簽署之前，先看清楚。",
    homeCopy: "從你的立場出發，用簡單語言重新檢視合約條款。", checkDocument: "檢查文件",
    howTitle: "使用方法", how1Title: "加入文件", how1Copy: "選擇 PDF 或清晰的頁面相片。",
    how2Title: "說明你的立場", how2Copy: "選擇你的身分，並告訴我們你希望達成甚麼。",
    how3Title: "查看需要注意的地方", how3Copy: "簡單解釋、條款依據，以及可向對方提出的問題。",
    privacyTitle: "私人原型", privacyCopy: "你選擇的檔案和填寫的答案只會留在此瀏覽器內，不會上載。",
    homeLegal: "ClearClause 只會提示潛在風險和缺少的背景資料，無法判斷另一方的意圖，亦不能取代香港合資格律師的法律意見。",
    backHome: "返回主頁", newReview: "新增檢查", setupTitle: "提供檢查背景",
    setupCopy: "同一條款可能對一方有利，卻對另一方不利。", stepDocument: "1 · 文件",
    addFilesTitle: "加入 PDF 或清晰的頁面相片", addFilesCopy: "如有附件、附表及引用的條款，請一併加入。",
    chooseFiles: "選擇檔案", useSample: "使用示例", prototypeTitle: "原型限制",
    prototypeCopy: "離線版本可接受檔案以測試操作流程，但現階段不會讀取檔案內容。以下結果只使用清楚標示的示例條款。",
    stepHongKong: "2 · 香港背景", hongKongSAR: "香港特別行政區", hkBaseline: "以香港法律作為檢查基準",
    documentTypeLabel: "文件類型", typeServices: "服務／供應商協議", typeEmployment: "僱傭合約",
    typeTenancy: "租賃協議", typeSale: "買賣協議", typeNDA: "保密協議", typeLoan: "貸款／擔保", other: "其他",
    documentLanguageLabel: "文件語言", languageEnglish: "英文", languageChinese: "繁體中文", languageBilingual: "雙語",
    stepYourSide: "3 · 你的身分", partyLabel: "你是哪一方？", partyCustomer: "客戶", partyContractor: "承辦商",
    partyEmployee: "僱員", partyTenant: "租客", partyBuyer: "買方", partySeller: "賣方",
    stepGoal: "4 · 你的目標", goalLabel: "你最重視甚麼？",
    goalDefault: "我希望可以容易取消合約，並避免意外費用。",
    goalHelp: "例子：「我需要能夠提前 30 日通知離開，並保留自己作品的擁有權。」",
    previewSampleReview: "預覽示例檢查 →", previewWithSample: "使用示例預覽 →", sample: "示例",
    sampleFileName: "示例服務協議.pdf", removeFile: "移除檔案",
    analysisPreparing: "正在準備示例檢查…", analysisLoad: "載入示例條款",
    analysisPerspective: "套用你選擇的立場", analysisFindings: "準備示例結果",
    analysisSample: "原型動畫 — 只顯示示例結果",
    analysisContext: "正在以「{role}」的角度準備示例。",
    analysisComparing: "正在按你的目標比較示例條款…", analysisSimplifying: "正在整理容易理解的示例結果…",
    resultsComplete: "示例檢查完成", shareReview: "分享檢查結果", needsAttention: "需要注意",
    verdictTitle: "部分條款與你的目標不符。",
    verdictCopy: "這份協議不一定不安全，但終止、續期及資料使用條款值得在簽署前要求修改或澄清。",
    roleSummary: "以「{role}」的立場為你檢查", hkContext: "香港法律背景",
    languageSummary: "以下是針對{language}文件的示例風險提示。正式版本必須先檢查管限法律及爭議解決條款，才可套用香港規則。",
    hkBullet1: "管限法律、香港法院及仲裁地", hkBullet2: "免責、責任限制及彌償條款",
    hkBullet3: "適用情況下的消費者公平規則", hkBullet4: "個人資料用途、分享、保留及保安",
    hkNote: "標示代表「需要取得意見或澄清」，不表示條款必然無效。",
    whatNeedsAttention: "需要注意的地方", threeFindings: "3 項示例結果", whatWorks: "對你有利的地方",
    takeAction: "採取行動", questionsTitle: "可向另一方提出的問題", copyQuestions: "複製問題",
    copied: "已複製", copyUnavailable: "無法複製", missingContext: "缺少背景資料",
    missingCopy: "協議提及《資料政策》及「訂單」，但兩份文件均未有提供；內容可能會影響這次檢查。",
    anotherReview: "開始另一次檢查",
    resultsLegal: "這是示例 AI 產品原型，並非法律意見。現階段不會讀取你選擇的文件，亦不應用作決定是否簽署。",
    installOnce: "一次設定", installTitle: "將 ClearClause 加到 iPhone", close: "關閉",
    install1Title: "用 Safari 開啟此頁", install1Copy: "必須由 Safari 開始加入主畫面。",
    install2Title: "點按分享", install2Copy: "選擇「加入主畫面」，再點按「加入」。",
    install3Title: "在線時先開啟一次", install3Copy: "之後原型便可在無需 Xcode 的情況下離線重開。", gotIt: "明白",
    findingClause: "示例條款", findingRelevance: "為何與你有關", findingSuggestion: "可以提出甚麼要求",
    shareTitle: "ClearClause 示例檢查",
    shareText: "ClearClause 示例檢查：有三項條款需要注意。此原型並未分析你選擇的文件。",
    findings: {
      concerns: [
        {
          level: "high", badge: "需要高度注意", icon: "!", title: "終止權並不對等",
          clause: "公司可隨時終止本協議。客戶只可在首次合約期屆滿後終止本協議。",
          source: "示例 · 第 6 頁 · 第 8.2 條",
          explanation: "對方可隨時結束交易，但你可能要受首個完整年度約束。",
          relevance: "你表示，如果服務不合用，希望可以彈性退出。",
          suggestion: "要求雙方享有相同終止權，並可提前 30 日書面通知終止。"
        },
        {
          level: "medium", badge: "值得核實", icon: "?", title: "自動續期 12 個月",
          clause: "除非在續期前 60 日收到通知，否則本協議將自動續期，每次為期十二個月。",
          source: "示例 · 第 3 頁 · 第 3.1 條",
          explanation: "如果錯過狹窄的取消期限，你可能要再受一年約束並支付多一年費用。",
          relevance: "長期續約不利於你控制及預計成本。",
          suggestion: "要求改為逐月續期，或要求續期提示及 30 日取消期限。"
        },
        {
          level: "medium", badge: "值得核實", icon: "?", title: "你的資料可能被廣泛使用",
          clause: "客戶授予公司永久及全球性的許可，以使用所提交的資料改善其產品及服務。",
          source: "示例 · 第 8 頁 · 第 11.4 條",
          explanation: "許可並無清楚說明會在合約終止時結束，亦沒有把用途限制於匿名資料。",
          relevance: "這個使用範圍可能超出提供你所購買服務的實際需要。",
          suggestion: "把用途限制於提供服務；如用作改善服務，只容許使用匯總及匿名資料。"
        }
      ],
      positives: [
        {
          level: "positive", badge: "對你有利", icon: "✓", title: "你有時間補救違約",
          clause: "收到書面通知後，可在十四（14）日內補救重大違約。",
          source: "示例 · 第 6 頁 · 第 8.1 條",
          explanation: "一般而言，你會先收到通知，並有兩星期修正問題，之後才可終止協議。",
          relevance: "這可減低協議因可修正的錯誤而終止的機會。",
          suggestion: "保留這項保障，並確認同樣適用於雙方。"
        }
      ]
    },
    questions: [
      "雙方可否提前 30 日書面通知終止協議？",
      "續期可否改為逐月，而不是再續一整年？",
      "資料用途可否限制於提供服務，以及以匿名資料改善服務？"
    ]
  }
};

const initialLocale = (() => {
  try {
    const saved = localStorage.getItem("clearclause-locale");
    if (saved === "en" || saved === "zh-Hant") return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh-Hant" : "en";
})();

const state = { locale: "en", files: [], progressTimer: null, analysisProgress: 5 };
const screens = [...document.querySelectorAll(".screen")];
const fileInput = document.querySelector("#file-input");
const fileList = document.querySelector("#file-list");
const goalInput = document.querySelector("#goal");

const t = (key) => translations[state.locale][key] ?? translations.en[key] ?? key;
const format = (key, values) => Object.entries(values).reduce((copy, [name, value]) => copy.replaceAll(`{${name}}`, value), t(key));
const selectedLabel = (selector) => document.querySelector(selector).selectedOptions[0]?.textContent || "";

function showScreen(id, push = true) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
  if (push) history.pushState({ screen: id }, "", `#${id}`);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function formatSize(bytes) {
  if (!bytes) return t("sample");
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function renderFiles() {
  fileList.replaceChildren();
  state.files.forEach((file, index) => {
    const item = document.createElement("li");
    const isPDF = file.type === "application/pdf" || file.name?.toLowerCase().endsWith(".pdf");
    item.innerHTML = `<span class="file-icon">${isPDF ? "PDF" : "IMG"}</span><span><strong></strong><small></small></span><button type="button">×</button>`;
    item.querySelector("strong").textContent = file.isSample ? t("sampleFileName") : file.name;
    item.querySelector("small").textContent = formatSize(file.size);
    const removeButton = item.querySelector("button");
    removeButton.setAttribute("aria-label", t("removeFile"));
    removeButton.addEventListener("click", () => {
      state.files.splice(index, 1);
      renderFiles();
    });
    fileList.append(item);
  });
  document.querySelector("#drop-zone").classList.toggle("has-files", state.files.length > 0);
  document.querySelector("#review-button").textContent = t(state.files.length ? "previewSampleReview" : "previewWithSample");
}

function addFiles(files) {
  const allowed = [...files].filter((file) => file.type === "application/pdf" || file.type.startsWith("image/"));
  state.files.push(...allowed.map((file) => ({ name: file.name, size: file.size, type: file.type, isSample: false })));
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
  card.querySelector('[data-finding-label="clause"]').textContent = t("findingClause");
  card.querySelector('[data-finding-label="relevance"]').textContent = t("findingRelevance");
  card.querySelector('[data-finding-label="suggestion"]').textContent = t("findingSuggestion");
  const toggle = card.querySelector(".finding-summary");
  toggle.addEventListener("click", () => {
    const expanded = card.classList.toggle("expanded");
    toggle.setAttribute("aria-expanded", String(expanded));
  });
  return node;
}

function renderResults() {
  const firstFile = state.files[0];
  document.querySelector("#result-file-name").textContent = firstFile ? (firstFile.isSample ? t("sampleFileName") : firstFile.name) : t("sampleFileName");
  const role = selectedLabel("#party-role");
  const goal = goalInput.value.trim();
  const type = selectedLabel("#document-type");
  const language = selectedLabel("#document-language");
  document.querySelector("#role-summary").textContent = format("roleSummary", { role });
  document.querySelector("#goal-summary").textContent = goal;
  document.querySelector("#type-summary").textContent = type;
  document.querySelector("#language-summary").textContent = format("languageSummary", { language });
  document.querySelector("#concern-list").replaceChildren(...translations[state.locale].findings.concerns.map(buildFinding));
  document.querySelector("#positive-list").replaceChildren(...translations[state.locale].findings.positives.map(buildFinding));
  document.querySelector("#question-list").replaceChildren(...translations[state.locale].questions.map((question) => {
    const item = document.createElement("li");
    item.textContent = question;
    return item;
  }));
}

function updateAnalysisCopy() {
  const status = document.querySelector("#analysis-status");
  if (state.analysisProgress >= 70) status.textContent = t("analysisSimplifying");
  else if (state.analysisProgress >= 35) status.textContent = t("analysisComparing");
  else status.textContent = t("analysisPreparing");
  document.querySelector("#analysis-context").textContent = format("analysisContext", { role: selectedLabel("#party-role") });
}

function applyLocale(nextLocale, persist = true) {
  const previousDefault = t("goalDefault");
  const currentGoal = goalInput.value.trim();
  state.locale = nextLocale === "zh-Hant" ? "zh-Hant" : "en";
  document.documentElement.lang = state.locale;
  document.documentElement.dataset.locale = state.locale;
  document.querySelector('meta[name="description"]').content = t("metaDescription");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  const toggle = document.querySelector("#language-toggle");
  toggle.textContent = state.locale === "en" ? "繁中" : "EN";
  toggle.setAttribute("aria-label", t("switchLanguage"));
  toggle.setAttribute("aria-pressed", String(state.locale === "zh-Hant"));
  if (!currentGoal || currentGoal === previousDefault || currentGoal === translations.en.goalDefault || currentGoal === translations["zh-Hant"].goalDefault) {
    goalInput.value = t("goalDefault");
  }
  if (persist) {
    try { localStorage.setItem("clearclause-locale", state.locale); } catch {}
  }
  renderFiles();
  if (document.querySelector("#analysis").classList.contains("active")) updateAnalysisCopy();
  if (document.querySelector("#results").classList.contains("active")) renderResults();
}

function beginAnalysis() {
  const circle = document.querySelector("#progress-circle");
  const steps = [...document.querySelectorAll(".analysis-steps p")];
  state.analysisProgress = 5;
  circle.style.setProperty("--progress", state.analysisProgress);
  steps.forEach((step) => {
    step.classList.remove("done");
    step.querySelector("span").textContent = "○";
  });
  showScreen("analysis");
  updateAnalysisCopy();
  clearInterval(state.progressTimer);
  state.progressTimer = setInterval(() => {
    state.analysisProgress += 5;
    circle.style.setProperty("--progress", state.analysisProgress);
    steps.forEach((step) => {
      if (state.analysisProgress >= Number(step.dataset.progress)) {
        step.classList.add("done");
        step.querySelector("span").textContent = "✓";
      }
    });
    updateAnalysisCopy();
    if (state.analysisProgress >= 100) {
      clearInterval(state.progressTimer);
      renderResults();
      setTimeout(() => showScreen("results"), 250);
    }
  }, 70);
}

document.querySelector("#language-toggle").addEventListener("click", () => applyLocale(state.locale === "en" ? "zh-Hant" : "en"));
document.querySelector("#start-button").addEventListener("click", () => showScreen("setup"));
document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => showScreen(button.dataset.go)));
fileInput.addEventListener("change", () => addFiles(fileInput.files));
document.querySelector("#sample-file-button").addEventListener("click", () => {
  state.files = [{ name: "", size: 0, type: "application/pdf", isSample: true }];
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
    await navigator.clipboard.writeText(translations[state.locale].questions.map((question, index) => `${index + 1}. ${question}`).join("\n"));
    button.textContent = t("copied");
  } catch {
    button.textContent = t("copyUnavailable");
  }
  setTimeout(() => { button.textContent = t("copyQuestions"); }, 1400);
});

document.querySelector("#share-button").addEventListener("click", async () => {
  try {
    if (navigator.share) await navigator.share({ title: t("shareTitle"), text: t("shareText") });
    else await navigator.clipboard.writeText(t("shareText"));
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

showScreen(location.hash.slice(1) || "home", false);
applyLocale(initialLocale, false);
