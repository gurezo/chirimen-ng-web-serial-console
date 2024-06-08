#!/bin/bash
set -e

echo "chirimen-ng-web-serial-console re-install"
echo ""

echo "remove node_modules, package-lock.json, .angular"
rm -rf node_modules package-lock.json .angular

echo ""
echo "npm cache verify"
npm cache verify

echo ""
echo "pnpm i --force"
pnpm i --force
