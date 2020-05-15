# Greddit
A reddit app just for me.

## Development Environment setup:
This application is developed in Ubuntu 20.04 LTS running in WSL 1. Instructions going forward assume this environment.

You can find more detailed instructions [here](https://reactnative.dev/docs/environment-setup).

* Install OpenJDK 8 (as of the time writing this, React Native requires Java 8): `sudo apt install openjdk-8-jdk`
* Install Node.js: `sudo apt install nodejs`
* Install n from NPM: `npm install -g n` 
* Use n to install the latest stable version of Node.js: `n lts`
* Download and install [Android Studio](https://developer.android.com/studio/index.html).
  * Make sure the `Android SDK`, `Android SDK Platform`, and `Android Virtual Device` checkboxes are all checked on initial instalation (if they are grayed out, they can be installed later).
  * Make sure the following are installed from Android SDK Manager:
    * `Android 9 (Pie)` (As of the time writing this, React Native only works with Android SDK 9)
    * `Android SDK Platform 28`
    * `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`
* Run `./setup_bash_profile.sh` to configure the `ANDROID_HOME` environment variable (change the directory location in this script if needed).
* Install [brew](https://brew.sh/): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
* Install [Watchman](https://facebook.github.io/watchman/docs/install/#buildinstall) : `brew update && brew install watchman`.
