#!/bin/bash
set -e

echo "dashboard build"
echo ""

npx nx build apps-dashboard --prod --base-href /chirimen-lite-dashboard/


echo "dashboard docs clean"
echo ""

rm -rf docs

echo "dashboard deploy"
echo ""

mv -f dist/dashboard/browser docs
