#!/bin/bash
echo "Setting environemnt variables..."

echo 'export ANDROID_HOME=/mnt/d/android-sdk-wsl' >> ~/.bash_profile # set up for WSL
echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.bash_profile
echo 'export PATH=$PATH:$ANDROID_HOME/tools' >> ~/.bash_profile
echo 'export PATH=$PATH:$ANDROID_HOME/tools/bin' >> ~/.bash_profile
echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.bash_profile

echo "Environment variables set. The terminal must be restarted for changes to take effect."