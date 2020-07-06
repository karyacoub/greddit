# Greddit
A reddit app just for me.

## Development Environment setup:
This application is developed in Ubuntu 20.04 LTS running in WSL 1. Instructions going forward assume this environment.

You can find more detailed instructions [here](https://reactnative.dev/docs/environment-setup).

* Install OpenJDK 8 (as of the time writing this, React Native requires Java 8): `sudo apt install openjdk-8-jdk`
* Install Node.js: `sudo apt install nodejs`
* Install NPM: `sudo apt install npm`
* Make sure NPM is at the latest version: `sudo npm install -g npm@latest`
* Install n from NPM: `npm install -g n` 
* Use n to install the latest stable version of Node.js: `n lts`
* Download and install Android SDK:
  * Create two new directories called `android-sdk` and `android-sdk-wsl` on your main drive.
  * Download the [Linux Commandline Tools](https://developer.android.com/studio#downloads) and extract them into `android-sdk-wsl`.
  * Download both the Linux and the Windows [Platfom Tools](https://developer.android.com/studio/releases/platform-tools).
  * Extract the Linux Platform Tools into `android-sdk-wsl`, and the Windows Platform Tools into `android-sdk`.
  * Add the location of your `android-sdk/platform-tools` directory into your Windows PATH environment variable (not the WSL PATH environment variable) so that we can run `adb` in out Windows command line (this needs to be done for `adb` in WSL to recognize your connected device).
* Download and install [Android Studio](https://developer.android.com/studio/index.html).
  * Make sure the `Android SDK`, `Android SDK Platform`, and `Android Virtual Device` checkboxes are all checked on initial instalation (if they are grayed out, they can be installed later).
  * Make sure the following are installed from Android SDK Manager:
    * `Android 9 (Pie)` (As of the time writing this, React Native only works with Android SDK 9)
    * `Android SDK Platform 28`
    * `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`
  * Install an Android 9 image from AVD Manager in android studio.
* Install [brew](https://brew.sh/): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
* Install [Watchman](https://facebook.github.io/watchman/docs/install/#buildinstall) : `brew update && brew install watchman`.
* Install [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) (optional)
* Run `./setup_bash_profile.sh` to configure the `ANDROID_HOME` environment variable (change the directory location in this script if needed).
* Install Android SDK Platform 28: `sdkmanager --sdk_root=${ANDROID_HOME} "platforms;android-28"`
* Install Intel x86 Atom_64 System Image: `sdkmanager --sdk_root=${ANDROID_HOME} "system-images;android-29;default;x86_64"`
* Install Android SDK Build Tools: `sdkmanager --sdk_root=${ANDROID_HOME} "build-tools;28.0.3"`
* Connect your Android phone (make sure that USB Debugging is turned on).
* Open PowerShell and run `adb start-server`.
* Once the adb server starts, ensure that your phone is detected by running `adb devices`. Your device's ID should be displayed.
* Build the application by running `npm react-native run-android` in WSL.
  * Note that this could fail with the error `Error: spawn ./gradlew EACCES`. This is because `gradlew` does not have permission to execute. Run `chmod 755 android/gradlew` from within the project root to give the script permission to execute and try to build again.
* The application should open automatically on your phone (albeit in a failed state). You must start the Metro server to package and run your code on the device by running `npx react-native start`.

## Dependancy Updates:
I update dependencies for this app using [npm-check-updates](https://www.npmjs.com/package/npm-check-updates). Most of the time, updates can be installed automatically using `ncu -u`, which updates `package.json` automatically. However, if updates contain breaking changes, and `package.json` needs to be updated manually, you may use `ncu` to check which dependancies need to be updated.
