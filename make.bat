@echo off

setlocal

node .well-known\build.cjs
mkdir public\.well-known
copy .well-known\apple-app-site-association public\.well-known\
copy .well-known\assetlinks.json public\.well-known\

endlocal
