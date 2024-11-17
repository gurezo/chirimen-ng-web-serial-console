#!/bin/bash
set -e

echo "change branch"
echo ""
git checkout gh-pages


echo "dashboard build"
echo ""

npx nx build apps-dashboard --prod --output-path docs --base-href /chirimen-lite-dashboard/

echo "dashboard deploy"
echo ""

mv docs/browser/* docs/
