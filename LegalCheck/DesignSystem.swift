import SwiftUI

enum AppTheme {
    static let canvas = Color(red: 0.965, green: 0.952, blue: 0.918)
    static let paper = Color.white
    static let ink = Color(red: 0.055, green: 0.11, blue: 0.18)
    static let mutedInk = Color(red: 0.34, green: 0.38, blue: 0.42)
    static let line = Color.black.opacity(0.09)
    static let teal = Color(red: 0.05, green: 0.55, blue: 0.49)
    static let tealSoft = Color(red: 0.88, green: 0.96, blue: 0.94)
    static let amber = Color(red: 0.91, green: 0.55, blue: 0.14)
    static let amberSoft = Color(red: 1.0, green: 0.95, blue: 0.84)
    static let coral = Color(red: 0.82, green: 0.25, blue: 0.22)
    static let coralSoft = Color(red: 1.0, green: 0.91, blue: 0.89)
}

struct PaperCard<Content: View>: View {
    @ViewBuilder let content: Content

    var body: some View {
        content
            .padding(18)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(AppTheme.paper, in: RoundedRectangle(cornerRadius: 20, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 20, style: .continuous)
                    .stroke(AppTheme.line, lineWidth: 1)
            }
    }
}

struct PrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.headline)
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity)
            .frame(height: 56)
            .background(AppTheme.ink.opacity(configuration.isPressed ? 0.82 : 1), in: RoundedRectangle(cornerRadius: 17, style: .continuous))
            .scaleEffect(configuration.isPressed ? 0.985 : 1)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
    }
}

struct SectionEyebrow: View {
    let text: String

    var body: some View {
        Text(text.uppercased())
            .font(.caption2.weight(.bold))
            .tracking(1.3)
            .foregroundStyle(AppTheme.mutedInk)
    }
}

