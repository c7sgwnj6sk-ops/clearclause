# ClearClause iOS concept

ClearClause is a SwiftUI prototype for reviewing Hong Kong legal documents from one party's point of view. A user adds a PDF or document photos, selects the document type and language, chooses their role, explains what they want from the agreement, and receives a short evidence-backed review.

## Product principles

- **Plain before legalistic:** lead with what a term means in everyday language.
- **Personalised, not generic:** every finding explains why it matters for the user's role and stated goal.
- **Evidence on demand:** every warning expands to show the exact clause and page/section reference.
- **No mind-reading:** the product flags possible disadvantage; it never claims to know another party's hidden intent.
- **Calibrated trust:** distinguish high-attention terms, points worth checking, protections, and missing context.
- **Actionable output:** turn findings into specific questions or proposed changes.
- **Hong Kong baseline:** check governing law and dispute forum first, then use Hong Kong-specific issue categories rather than importing overseas assumptions.
- **English and Traditional Chinese:** capture English, 繁體中文, and bilingual documents and preserve the original clause beside any translation.

## Hong Kong issue map

The production rules engine should route findings by document type and clearly distinguish “possibly relevant” from a legal conclusion. Initial reference areas include:

- Control of Exemption Clauses Ordinance (Cap. 71) for certain exclusion and limitation clauses.
- Unconscionable Contracts Ordinance (Cap. 458) for qualifying consumer contracts for goods or services.
- Personal Data (Privacy) Ordinance (Cap. 486) and the six Data Protection Principles for collection, use, retention, security, transparency, access, and correction.
- Employment Ordinance (Cap. 57) for employment documents, plus specialised rules for tenancy, land, lending, guarantees, and regulated products when those document types are selected.
- Contracts (Rights of Third Parties) Ordinance (Cap. 623), dispute resolution, governing law, remedies, and incorporated or missing documents where relevant.

Official reference starting points: [Hong Kong e-Legislation](https://www.elegislation.gov.hk), the [Privacy Commissioner for Personal Data](https://www.pcpd.org.hk/english/data_privacy_law/ordinance_at_a_Glance/ordinance.html), and the University of Hong Kong's [Community Legal Information Centre](https://www.clic.org.hk/en/topics).

## Prototype flow

1. Home and trust framing.
2. Add PDF/photos, select party, describe goal.
3. Short analysis progress state.
4. Simple result summary, expandable clause evidence, favourable terms, missing documents, and copyable questions.

The analysis in this prototype is sample content. Production work still needs secure upload/storage, bilingual OCR and page mapping, a structured analysis service, source-version tracking, deletion controls, and evaluation with Hong Kong-qualified lawyers.

## Run

Open `LegalCheck.xcodeproj` in Xcode and run the `LegalCheck` scheme on an iPhone simulator running iOS 17 or later.

## Offline Home Screen prototype

The `docs/` directory contains a static progressive web app suitable for GitHub Pages. It mirrors the SwiftUI flow, accepts local PDF/image selections, preserves the Hong Kong context and party/goal inputs, and caches itself for offline relaunch after the first successful visit.

**Live app:** [https://c7sgwnj6sk-ops.github.io/clearclause/](https://c7sgwnj6sk-ops.github.io/clearclause/)

**Traditional Chinese:** [https://c7sgwnj6sk-ops.github.io/clearclause/?lang=zh-Hant](https://c7sgwnj6sk-ops.github.io/clearclause/?lang=zh-Hant)

The current review remains sample content. Selected documents are not uploaded or read. A production legal checker still requires bilingual OCR, page-to-clause mapping, a tested analysis engine, source-version tracking, and review by Hong Kong-qualified lawyers.

To install the deployed version on iPhone: open its GitHub Pages URL in Safari, tap **Share**, choose **Add to Home Screen**, and open it once while online.
