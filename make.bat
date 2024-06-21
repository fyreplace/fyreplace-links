@echo off

setlocal

node .well-known\build.js
mkdir public\.well-known
copy .well-known\apple-app-site-association public\.well-known\
copy .well-known\assetlinks.json public\.well-known\

endlocal
