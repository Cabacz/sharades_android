# Sharades Android APK

The Android wrapper is generated from the existing PWA. The original HTML, CSS, JavaScript, illustrations, dictionaries and offline service worker remain the source of truth.

## Build locally

Requirements: Node.js 22, Java 21, Android SDK and an Android SDK platform/build tools installation.

```bash
npm install
npm run android:prepare
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

The debug APK is created at:

`android/app/build/outputs/apk/debug/app-debug.apk`

## Build with GitHub Actions

The workflow **Build Sharades Android APK** runs on pushes and pull requests to `main`, and can also be started manually from the Actions tab. Download the `sharades-android-debug` artifact from a completed run.

This first build is a debug APK for testing and sideloading. A Play Store release requires a separately managed signing key and a release build. Do not commit signing keys or passwords to the repository.

The app's local word dictionaries and gameplay are bundled for offline use. Remote AI generation requires an active Supabase project and public project URL/key configured in the in-app Settings screen.
