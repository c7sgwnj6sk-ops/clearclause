import SwiftUI

@main
struct LegalCheckApp: App {
    var body: some Scene {
        WindowGroup {
            ReviewHomeView()
                .tint(AppTheme.ink)
        }
    }
}

