#!/bin/bash
exec npx react-native run-android

if [$? -eq 0]; then
    echo "Build succeeded. Starting Metro server..."
    exec npx react-native start
else
    echo "Build failed with exit code ${$?}"
    exit 1
fi