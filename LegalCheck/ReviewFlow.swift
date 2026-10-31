import SwiftUI
import PhotosUI
import UniformTypeIdentifiers

struct ReviewHomeView: View {
    @State private var showingSetup = false

    var body: some View {
        NavigationStack {
            ZStack {
                AppTheme.canvas.ignoresSafeArea()

                ScrollView {
                    VStack(alignment: .leading, spacing: 24) {
                        brand

                        VStack(alignment: .leading, spacing: 12) {
                            Text("Know what you’re\nagreeing to.")
                                .font(.system(size: 42, weight: .bold, design: .rounded))
                                .tracking(-1.5)
                                .foregroundStyle(AppTheme.ink)

                            Text("A plain-language second look at the terms that matter to you.")
                                .font(.title3)
                                .foregroundStyle(AppTheme.mutedInk)
                                .fixedSize(horizontal: false, vertical: true)
                        }

                        Button {
                            showingSetup = true
                        } label: {
                            Label("Check a document", systemImage: "doc.text.magnifyingglass")
                        }
                        .buttonStyle(PrimaryButtonStyle())

                        PaperCard {
                            VStack(alignment: .leading, spacing: 16) {
                                SectionEyebrow(text: "How it works")
                                journeyRow(number: "1", title: "Add your document", detail: "Choose a PDF or clear photos.")
                                journeyRow(number: "2", title: "Tell us your position", detail: "Your role and what you want from the deal.")
                                journeyRow(number: "3", title: "See what needs attention", detail: "Plain explanations, clause evidence, and questions to ask.")
                            }
                        }

                        HStack(alignment: .top, spacing: 12) {
                            Image(systemName: "lock.shield.fill")
                                .foregroundStyle(AppTheme.teal)
                            VStack(alignment: .leading, spacing: 3) {
                                Text("Private by design")
                                    .font(.subheadline.weight(.semibold))
                                Text("Documents are not used to train shared models. You control when a review is deleted.")
                                    .font(.footnote)
                                    .foregroundStyle(AppTheme.mutedInk)
                            }
                        }
                        .padding(.horizontal, 6)

                        Text("ClearClause highlights possible risks and missing context. It cannot determine another party’s intent and is not a substitute for a qualified lawyer.")
                            .font(.caption)
                            .foregroundStyle(AppTheme.mutedInk)
                            .padding(.horizontal, 6)
                            .padding(.bottom, 24)
                    }
                    .padding(.horizontal, 20)
                    .padding(.top, 16)
                }
            }
            .navigationDestination(isPresented: $showingSetup) {
                ReviewSetupView()
            }
            .toolbar(.hidden, for: .navigationBar)
        }
    }

    private var brand: some View {
        HStack(spacing: 10) {
            ZStack {
                RoundedRectangle(cornerRadius: 11, style: .continuous)
                    .fill(AppTheme.ink)
                    .frame(width: 40, height: 40)
                Image(systemName: "text.document.fill")
                    .foregroundStyle(.white)
            }
            Text("ClearClause")
                .font(.title3.weight(.bold))
                .foregroundStyle(AppTheme.ink)
            Spacer()
            Text("BETA")
                .font(.caption2.weight(.bold))
                .tracking(1)
                .padding(.horizontal, 9)
                .padding(.vertical, 5)
                .background(AppTheme.tealSoft, in: Capsule())
                .foregroundStyle(AppTheme.teal)
        }
    }

    private func journeyRow(number: String, title: String, detail: String) -> some View {
        HStack(alignment: .top, spacing: 13) {
            Text(number)
                .font(.subheadline.weight(.bold))
                .foregroundStyle(.white)
                .frame(width: 28, height: 28)
                .background(AppTheme.teal, in: Circle())
            VStack(alignment: .leading, spacing: 2) {
                Text(title).font(.subheadline.weight(.semibold))
                Text(detail).font(.footnote).foregroundStyle(AppTheme.mutedInk)
            }
        }
    }
}

struct ReviewSetupView: View {
    @Environment(\.dismiss) private var dismiss
    @State private var documents: [ImportedDocument] = []
    @State private var selectedRole: PartyRole = .customer
    @State private var documentType: HKDocumentType = .services
    @State private var documentLanguage: DocumentLanguage = .english
    @State private var goal = "I want to be able to cancel easily and avoid surprise costs."
    @State private var showingFiles = false
    @State private var photoItem: PhotosPickerItem?
    @State private var showingReview = false

    var body: some View {
        ZStack {
            AppTheme.canvas.ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    VStack(alignment: .leading, spacing: 7) {
                        SectionEyebrow(text: "New review")
                        Text("Give the review context")
                            .font(.system(size: 31, weight: .bold, design: .rounded))
                            .foregroundStyle(AppTheme.ink)
                        Text("The same clause can help one party and hurt another.")
                            .font(.subheadline)
                            .foregroundStyle(AppTheme.mutedInk)
                    }

                    documentSection
                    contextSection
                    roleSection
                    goalSection

                    HStack(alignment: .top, spacing: 10) {
                        Image(systemName: "sparkles")
                            .foregroundStyle(AppTheme.teal)
                        Text("The review will compare each clause with your role and goal—not just search for generic legal words.")
                            .font(.footnote)
                            .foregroundStyle(AppTheme.mutedInk)
                    }
                    .padding(.horizontal, 4)

                    Button {
                        if documents.isEmpty {
                            documents = [ImportedDocument(name: "Sample service agreement.pdf", detail: "9 pages · Sample", symbol: "doc.fill")]
                        }
                        showingReview = true
                    } label: {
                        HStack {
                            Text(documents.isEmpty ? "Preview with sample" : "Review document")
                            Spacer()
                            Image(systemName: "arrow.right")
                        }
                    }
                    .buttonStyle(PrimaryButtonStyle())

                    Text(documents.isEmpty ? "No document yet? The sample shows how a finished review works." : "By continuing, you confirm you have permission to upload this document.")
                        .font(.caption)
                        .foregroundStyle(AppTheme.mutedInk)
                        .multilineTextAlignment(.center)
                        .frame(maxWidth: .infinity)
                        .padding(.bottom, 24)
                }
                .padding(20)
            }
        }
        .navigationBarBackButtonHidden()
        .toolbar {
            ToolbarItem(placement: .topBarLeading) {
                Button(action: dismiss.callAsFunction) {
                    Image(systemName: "chevron.left")
                        .font(.headline)
                        .frame(width: 38, height: 38)
                        .background(.white.opacity(0.8), in: Circle())
                }
                .accessibilityLabel("Back")
            }
        }
        .fileImporter(isPresented: $showingFiles, allowedContentTypes: [.pdf, .image], allowsMultipleSelection: true) { result in
            guard let urls = try? result.get() else { return }
            documents.append(contentsOf: urls.map {
                ImportedDocument(name: $0.lastPathComponent, detail: $0.pathExtension.uppercased(), symbol: $0.pathExtension.lowercased() == "pdf" ? "doc.fill" : "photo.fill")
            })
        }
        .onChange(of: photoItem) { _, newItem in
            guard newItem != nil else { return }
            documents.append(ImportedDocument(name: "Document photo \(documents.count + 1)", detail: "Photo", symbol: "photo.fill"))
            photoItem = nil
        }
        .navigationDestination(isPresented: $showingReview) {
            AnalysisProgressView(
                role: selectedRole,
                goal: goal,
                documents: documents,
                documentType: documentType,
                documentLanguage: documentLanguage
            )
        }
    }

    private var documentSection: some View {
        PaperCard {
            VStack(alignment: .leading, spacing: 14) {
                SectionEyebrow(text: "1 · Document")

                if documents.isEmpty {
                    VStack(spacing: 10) {
                        Image(systemName: "arrow.up.doc.fill")
                            .font(.system(size: 28))
                            .foregroundStyle(AppTheme.teal)
                        Text("Add PDF or clear page photos")
                            .font(.headline)
                        Text("Include schedules, appendices, and referenced terms if you have them.")
                            .font(.footnote)
                            .foregroundStyle(AppTheme.mutedInk)
                            .multilineTextAlignment(.center)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 10)
                } else {
                    ForEach(documents) { document in
                        HStack(spacing: 12) {
                            Image(systemName: document.symbol)
                                .foregroundStyle(AppTheme.teal)
                                .frame(width: 36, height: 36)
                                .background(AppTheme.tealSoft, in: RoundedRectangle(cornerRadius: 10))
                            VStack(alignment: .leading, spacing: 2) {
                                Text(document.name).font(.subheadline.weight(.semibold)).lineLimit(1)
                                Text(document.detail).font(.caption).foregroundStyle(AppTheme.mutedInk)
                            }
                            Spacer()
                            Button {
                                documents.removeAll { $0.id == document.id }
                            } label: {
                                Image(systemName: "xmark.circle.fill").foregroundStyle(.secondary)
                            }
                            .accessibilityLabel("Remove \(document.name)")
                        }
                    }
                }

                HStack(spacing: 10) {
                    Button {
                        showingFiles = true
                    } label: {
                        Label("Files", systemImage: "folder")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(.bordered)

                    PhotosPicker(selection: $photoItem, matching: .images) {
                        Label("Photos", systemImage: "photo.on.rectangle")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(.bordered)
                }
            }
        }
    }

    private var roleSection: some View {
        PaperCard {
            VStack(alignment: .leading, spacing: 13) {
                SectionEyebrow(text: "3 · Your side")
                Text("Which party are you?")
                    .font(.headline)
                Picker("Your party", selection: $selectedRole) {
                    ForEach(PartyRole.allCases) { role in
                        Text(role.rawValue).tag(role)
                    }
                }
                .pickerStyle(.menu)
                .padding(.horizontal, 12)
                .frame(maxWidth: .infinity, minHeight: 48, alignment: .leading)
                .background(AppTheme.canvas, in: RoundedRectangle(cornerRadius: 13))
            }
        }
    }

    private var contextSection: some View {
        PaperCard {
            VStack(alignment: .leading, spacing: 14) {
                SectionEyebrow(text: "2 · Hong Kong context")

                HStack(spacing: 12) {
                    Image(systemName: "building.columns.fill")
                        .foregroundStyle(AppTheme.teal)
                        .frame(width: 38, height: 38)
                        .background(AppTheme.tealSoft, in: RoundedRectangle(cornerRadius: 11))
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Hong Kong SAR")
                            .font(.subheadline.weight(.semibold))
                        Text("Hong Kong law is the review baseline")
                            .font(.caption)
                            .foregroundStyle(AppTheme.mutedInk)
                    }
                }

                Divider()

                Text("What kind of document is it?")
                    .font(.subheadline.weight(.semibold))
                Picker("Document type", selection: $documentType) {
                    ForEach(HKDocumentType.allCases) { type in
                        Text(type.rawValue).tag(type)
                    }
                }
                .pickerStyle(.menu)
                .padding(.horizontal, 12)
                .frame(maxWidth: .infinity, minHeight: 48, alignment: .leading)
                .background(AppTheme.canvas, in: RoundedRectangle(cornerRadius: 13))

                Text("Document language")
                    .font(.subheadline.weight(.semibold))
                Picker("Document language", selection: $documentLanguage) {
                    ForEach(DocumentLanguage.allCases) { language in
                        Text(language.rawValue).tag(language)
                    }
                }
                .pickerStyle(.menu)
                .padding(.horizontal, 12)
                .frame(maxWidth: .infinity, minHeight: 48, alignment: .leading)
                .background(AppTheme.canvas, in: RoundedRectangle(cornerRadius: 13))
            }
        }
    }

    private var goalSection: some View {
        PaperCard {
            VStack(alignment: .leading, spacing: 13) {
                SectionEyebrow(text: "4 · Your goal")
                Text("What matters most to you?")
                    .font(.headline)
                TextEditor(text: $goal)
                    .font(.body)
                    .frame(minHeight: 96)
                    .scrollContentBackground(.hidden)
                    .padding(10)
                    .background(AppTheme.canvas, in: RoundedRectangle(cornerRadius: 13))
                Text("Example: “I need to leave with 30 days’ notice and keep ownership of my work.”")
                    .font(.caption)
                    .foregroundStyle(AppTheme.mutedInk)
            }
        }
    }
}

struct AnalysisProgressView: View {
    let role: PartyRole
    let goal: String
    let documents: [ImportedDocument]
    let documentType: HKDocumentType
    let documentLanguage: DocumentLanguage
    @State private var progress = 0.08
    @State private var status = "Reading every page…"
    @State private var finished = false

    var body: some View {
        ZStack {
            AppTheme.ink.ignoresSafeArea()

            VStack(spacing: 28) {
                ZStack {
                    Circle().stroke(.white.opacity(0.12), lineWidth: 10)
                    Circle()
                        .trim(from: 0, to: progress)
                        .stroke(AppTheme.teal, style: StrokeStyle(lineWidth: 10, lineCap: .round))
                        .rotationEffect(.degrees(-90))
                    Image(systemName: "text.magnifyingglass")
                        .font(.system(size: 38, weight: .medium))
                        .foregroundStyle(.white)
                }
                .frame(width: 130, height: 130)

                VStack(spacing: 9) {
                    Text(status)
                        .font(.title2.bold())
                        .foregroundStyle(.white)
                    Text("Looking at the agreement from the perspective of a \(role.rawValue.lowercased()).")
                        .font(.subheadline)
                        .foregroundStyle(.white.opacity(0.65))
                        .multilineTextAlignment(.center)
                }

                VStack(alignment: .leading, spacing: 14) {
                    progressRow("Extract document text", complete: progress > 0.25)
                    progressRow("Compare terms with your goal", complete: progress > 0.58)
                    progressRow("Prepare plain-language findings", complete: progress > 0.9)
                }
                .frame(maxWidth: 300)
            }
            .padding(30)
        }
        .navigationBarBackButtonHidden()
        .task {
            guard !finished else { return }
            withAnimation(.easeInOut(duration: 0.7)) { progress = 0.38 }
            try? await Task.sleep(for: .milliseconds(750))
            status = "Comparing the terms with your goal…"
            withAnimation(.easeInOut(duration: 0.8)) { progress = 0.72 }
            try? await Task.sleep(for: .milliseconds(850))
            status = "Making the findings easy to use…"
            withAnimation(.easeInOut(duration: 0.65)) { progress = 1 }
            try? await Task.sleep(for: .milliseconds(700))
            finished = true
        }
        .navigationDestination(isPresented: $finished) {
            ReviewResultsView(
                role: role,
                goal: goal,
                documentName: documents.first?.name ?? "Agreement",
                documentType: documentType,
                documentLanguage: documentLanguage
            )
        }
    }

    private func progressRow(_ title: String, complete: Bool) -> some View {
        HStack(spacing: 11) {
            Image(systemName: complete ? "checkmark.circle.fill" : "circle")
                .foregroundStyle(complete ? AppTheme.teal : .white.opacity(0.25))
            Text(title)
                .font(.subheadline)
                .foregroundStyle(.white.opacity(complete ? 0.9 : 0.45))
        }
    }
}

struct ReviewResultsView: View {
    let role: PartyRole
    let goal: String
    let documentName: String
    let documentType: HKDocumentType
    let documentLanguage: DocumentLanguage
    @State private var expandedFinding: UUID?
    @State private var showingAllFindings = false
    @State private var copied = false

    private var displayedFindings: [ReviewFinding] {
        showingAllFindings ? SampleReview.concerns : Array(SampleReview.concerns.prefix(2))
    }

    var body: some View {
        ZStack {
            AppTheme.canvas.ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: 22) {
                    resultHeader
                    verdictCard
                    goalCard
                    hongKongContextCard

                    VStack(alignment: .leading, spacing: 12) {
                        HStack {
                            Text("What needs attention")
                                .font(.title3.bold())
                            Spacer()
                            Text("3 findings")
                                .font(.caption.weight(.semibold))
                                .foregroundStyle(AppTheme.mutedInk)
                        }

                        ForEach(displayedFindings) { finding in
                            FindingCard(finding: finding, isExpanded: expandedFinding == finding.id) {
                                withAnimation(.snappy) {
                                    expandedFinding = expandedFinding == finding.id ? nil : finding.id
                                }
                            }
                        }

                        if !showingAllFindings {
                            Button("Show 1 more finding") {
                                withAnimation(.snappy) { showingAllFindings = true }
                            }
                            .font(.subheadline.weight(.semibold))
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 13)
                            .background(.white, in: RoundedRectangle(cornerRadius: 14))
                        }
                    }

                    VStack(alignment: .leading, spacing: 12) {
                        Text("What works for you")
                            .font(.title3.bold())
                        ForEach(SampleReview.positives) { finding in
                            FindingCard(finding: finding, isExpanded: expandedFinding == finding.id) {
                                withAnimation(.snappy) {
                                    expandedFinding = expandedFinding == finding.id ? nil : finding.id
                                }
                            }
                        }
                    }

                    questionsCard
                    missingContextCard

                    Text("This review is an AI-assisted issue spotter, not legal advice. It may miss context or make mistakes. For high-value, unusual, or urgent agreements, ask a qualified lawyer to review the original document.")
                        .font(.caption)
                        .foregroundStyle(AppTheme.mutedInk)
                        .padding(.horizontal, 5)
                        .padding(.bottom, 30)
                }
                .padding(20)
            }
        }
        .navigationBarBackButtonHidden()
    }

    private var resultHeader: some View {
        HStack(spacing: 12) {
            VStack(alignment: .leading, spacing: 3) {
                Text("REVIEW COMPLETE")
                    .font(.caption2.bold())
                    .tracking(1.2)
                    .foregroundStyle(AppTheme.teal)
                Text(documentName)
                    .font(.subheadline.weight(.semibold))
                    .lineLimit(1)
            }
            Spacer()
            ShareLink(item: "ClearClause review: 3 terms need attention in \(documentName).") {
                Image(systemName: "square.and.arrow.up")
                    .font(.headline)
                    .frame(width: 40, height: 40)
                    .background(.white, in: Circle())
            }
        }
    }

    private var verdictCard: some View {
        VStack(alignment: .leading, spacing: 18) {
            HStack(alignment: .top) {
                VStack(alignment: .leading, spacing: 8) {
                    Text("NEEDS ATTENTION")
                        .font(.caption.bold())
                        .tracking(1.2)
                        .foregroundStyle(AppTheme.coral)
                    Text("Some terms work against your goal.")
                        .font(.system(size: 28, weight: .bold, design: .rounded))
                        .foregroundStyle(AppTheme.ink)
                }
                Spacer(minLength: 14)
                ZStack {
                    Circle().fill(AppTheme.coralSoft).frame(width: 62, height: 62)
                    Image(systemName: "exclamationmark")
                        .font(.title.bold())
                        .foregroundStyle(AppTheme.coral)
                }
            }

            Divider()
            Text("The agreement is not necessarily unsafe, but cancellation, renewal, and data-use terms deserve changes or clarification before you sign.")
                .font(.subheadline)
                .foregroundStyle(AppTheme.mutedInk)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(20)
        .background(.white, in: RoundedRectangle(cornerRadius: 22, style: .continuous))
        .overlay(alignment: .leading) {
            RoundedRectangle(cornerRadius: 3).fill(AppTheme.coral).frame(width: 5).padding(.vertical, 20)
        }
    }

    private var goalCard: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: "scope")
                .foregroundStyle(AppTheme.teal)
                .frame(width: 34, height: 34)
                .background(AppTheme.tealSoft, in: Circle())
            VStack(alignment: .leading, spacing: 3) {
                Text("Checked for you as the \(role.rawValue.lowercased())")
                    .font(.subheadline.weight(.semibold))
                Text(goal)
                    .font(.footnote)
                    .foregroundStyle(AppTheme.mutedInk)
                    .lineLimit(3)
            }
        }
        .padding(15)
        .background(.white.opacity(0.65), in: RoundedRectangle(cornerRadius: 16))
    }

    private var hongKongContextCard: some View {
        PaperCard {
            VStack(alignment: .leading, spacing: 14) {
                HStack {
                    SectionEyebrow(text: "Hong Kong law context")
                    Spacer()
                    Text("HK")
                        .font(.caption2.bold())
                        .foregroundStyle(AppTheme.teal)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(AppTheme.tealSoft, in: Capsule())
                }

                Text(documentType.rawValue)
                    .font(.headline)
                Text("Reviewed as a \(documentLanguage.rawValue.lowercased()) document. The app checks whether the agreement points to Hong Kong law and courts or arbitration, then applies issue-spotting rules relevant to the document type.")
                    .font(.footnote)
                    .foregroundStyle(AppTheme.mutedInk)

                Divider()

                hkCheck("Governing law, Hong Kong courts, and arbitration seat")
                hkCheck("Exclusion, liability, and indemnity wording")
                hkCheck("Consumer fairness rules where they may apply")
                hkCheck("Personal-data purpose, sharing, retention, and security")

                Text("A flag means “get advice or clarification,” not that a clause is automatically invalid.")
                    .font(.caption)
                    .foregroundStyle(AppTheme.mutedInk)
                    .padding(.top, 2)
            }
        }
    }

    private func hkCheck(_ text: String) -> some View {
        HStack(alignment: .top, spacing: 9) {
            Image(systemName: "checkmark.circle.fill")
                .font(.caption)
                .foregroundStyle(AppTheme.teal)
                .padding(.top, 2)
            Text(text).font(.footnote)
        }
    }

    private var questionsCard: some View {
        PaperCard {
            VStack(alignment: .leading, spacing: 14) {
                SectionEyebrow(text: "Take action")
                Text("Questions to send the other party")
                    .font(.title3.bold())
                question("Can both parties terminate on 30 days’ written notice?")
                question("Can renewal be month-to-month instead of another full year?")
                question("Can data use be limited to providing the service and anonymised improvement?")

                Button {
                    UIPasteboard.general.string = "1. Can both parties terminate on 30 days’ written notice?\n2. Can renewal be month-to-month instead of another full year?\n3. Can data use be limited to providing the service and anonymised improvement?"
                    copied = true
                } label: {
                    Label(copied ? "Copied" : "Copy questions", systemImage: copied ? "checkmark" : "doc.on.doc")
                        .font(.subheadline.weight(.semibold))
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 12)
                        .background(AppTheme.ink, in: RoundedRectangle(cornerRadius: 13))
                        .foregroundStyle(.white)
                }
            }
        }
    }

    private func question(_ text: String) -> some View {
        HStack(alignment: .top, spacing: 10) {
            Image(systemName: "arrow.turn.down.right")
                .font(.caption)
                .foregroundStyle(AppTheme.teal)
                .padding(.top, 3)
            Text(text).font(.subheadline)
        }
    }

    private var missingContextCard: some View {
        PaperCard {
            HStack(alignment: .top, spacing: 12) {
                Image(systemName: "paperclip")
                    .foregroundStyle(AppTheme.amber)
                VStack(alignment: .leading, spacing: 5) {
                    Text("Missing context")
                        .font(.subheadline.weight(.semibold))
                    Text("The agreement refers to a “Data Policy” and “Order Form,” but neither was included. They could change this review.")
                        .font(.footnote)
                        .foregroundStyle(AppTheme.mutedInk)
                }
            }
        }
    }
}

private struct FindingCard: View {
    let finding: ReviewFinding
    let isExpanded: Bool
    let toggle: () -> Void

    var body: some View {
        Button(action: toggle) {
            VStack(alignment: .leading, spacing: 13) {
                HStack(alignment: .top, spacing: 12) {
                    Image(systemName: finding.level.symbol)
                        .font(.subheadline.bold())
                        .foregroundStyle(finding.level.color)
                        .frame(width: 34, height: 34)
                        .background(finding.level.color.opacity(0.13), in: Circle())
                    VStack(alignment: .leading, spacing: 4) {
                        Text(finding.level.rawValue.uppercased())
                            .font(.caption2.bold())
                            .tracking(0.8)
                            .foregroundStyle(finding.level.color)
                        Text(finding.title)
                            .font(.headline)
                            .foregroundStyle(AppTheme.ink)
                            .multilineTextAlignment(.leading)
                    }
                    Spacer(minLength: 5)
                    Image(systemName: "chevron.down")
                        .font(.caption.bold())
                        .foregroundStyle(.secondary)
                        .rotationEffect(.degrees(isExpanded ? 180 : 0))
                }

                Text(finding.explanation)
                    .font(.subheadline)
                    .foregroundStyle(AppTheme.mutedInk)
                    .multilineTextAlignment(.leading)

                if isExpanded {
                    Divider()
                    detailBlock(label: "THE CLAUSE", text: "“\(finding.clause)”")
                    Text(finding.source)
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(AppTheme.teal)
                    detailBlock(label: "WHY IT MATTERS TO YOU", text: finding.relevance)
                    detailBlock(label: "WHAT TO ASK FOR", text: finding.suggestion)
                }
            }
            .padding(17)
            .background(.white, in: RoundedRectangle(cornerRadius: 18, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .stroke(finding.level.color.opacity(0.22), lineWidth: 1)
            }
        }
        .buttonStyle(.plain)
        .accessibilityHint(isExpanded ? "Collapse details" : "Show clause and suggested change")
    }

    private func detailBlock(label: String, text: String) -> some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(label)
                .font(.caption2.bold())
                .tracking(0.7)
                .foregroundStyle(AppTheme.mutedInk)
            Text(text)
                .font(label == "THE CLAUSE" ? .footnote.italic() : .footnote)
                .foregroundStyle(AppTheme.ink)
                .multilineTextAlignment(.leading)
        }
    }
}

#Preview("Home") {
    ReviewHomeView()
}
