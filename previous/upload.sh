#!/bin/sh

node count.js
echo "procudure: update changes to remote GitHub Repo"
git add .
git commit -m "weekly update"
git push