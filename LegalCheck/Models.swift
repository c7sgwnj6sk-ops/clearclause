import Foundation
import SwiftUI

enum PartyRole: String, CaseIterable, Identifiable {
    case customer = "Customer"
    case contractor = "Contractor"
    case employee = "Employee"
    case tenant = "Tenant"
    case buyer = "Buyer"
    case seller = "Seller"
    case other = "Other"

    var id: String { rawValue }
}

enum HKDocumentType: String, CaseIterable, Identifiable {
    case services = "Services / supplier agreement"
    case employment = "Employment contract"
    case tenancy = "Tenancy agreement"
    case salePurchase = "Sale and purchase"
    case nda = "NDA / confidentiality"
    case loanGuarantee = "Loan / guarantee"
    case other = "Other"

    var id: String { rawValue }
}

enum DocumentLanguage: String, CaseIterable, Identifiable {
    case english = "English"
    case traditionalChinese = "繁體中文"
    case bilingual = "Bilingual / 雙語"

    var id: String { rawValue }
}

struct ImportedDocument: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let detail: String
    let symbol: String
}

enum RiskLevel: String {
    case high = "High attention"
    case medium = "Worth checking"
    case positive = "Works in your favour"

    var color: Color {
        switch self {
        case .high: AppTheme.coral
        case .medium: AppTheme.amber
        case .positive: AppTheme.teal
        }
    }

    var symbol: String {
        switch self {
        case .high: "exclamationmark"
        case .medium: "questionmark"
        case .positive: "checkmark"
        }
    }
}

struct ReviewFinding: Identifiable {
    let id = UUID()
    let level: RiskLevel
    let title: String
    let clause: String
    let source: String
    let explanation: String
    let relevance: String
    let suggestion: String
}

enum SampleReview {
    static let concerns = [
        ReviewFinding(
            level: .high,
            title: "Cancellation is one-sided",
            clause: "The Company may terminate this Agreement at any time. Customer may terminate only after the Initial Term.",
            source: "Page 6 · Section 8.2",
            explanation: "They can end the deal whenever they choose, while you may be locked in for the full first year.",
            relevance: "You said you want flexibility to leave if the service is not working.",
            suggestion: "Ask for the same termination right for both parties, with 30 days’ notice."
        ),
        ReviewFinding(
            level: .medium,
            title: "Renews automatically for 12 months",
            clause: "The Agreement automatically renews for successive twelve-month periods unless notice is received 60 days before renewal.",
            source: "Page 3 · Section 3.1",
            explanation: "Missing a narrow cancellation window could commit you to, and charge you for, another year.",
            relevance: "A long renewal works against your goal of keeping costs predictable.",
            suggestion: "Request month-to-month renewal, or a reminder and a 30-day cancellation window."
        ),
        ReviewFinding(
            level: .medium,
            title: "Your data may be used broadly",
            clause: "Customer grants the Company a perpetual, worldwide licence to use Submitted Data to improve its products and services.",
            source: "Page 8 · Section 11.4",
            explanation: "The licence does not clearly end when the contract ends and does not limit use to anonymised information.",
            relevance: "This may be wider than needed to deliver the service you are buying.",
            suggestion: "Limit use to providing the service, with only aggregated and anonymised data allowed for improvement."
        )
    ]

    static let positives = [
        ReviewFinding(
            level: .positive,
            title: "You get time to fix a breach",
            clause: "A material breach may be cured within fourteen (14) days after written notice.",
            source: "Page 6 · Section 8.1",
            explanation: "You normally get a warning and two weeks to correct a problem before termination.",
            relevance: "This reduces the chance of the agreement ending over a fixable mistake.",
            suggestion: "Keep this protection and confirm it applies to both parties."
        )
    ]
}
