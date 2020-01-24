#!/bin/env bash

print_help() {
   echo "Need node and jq tools. Please install it."
   exit 1
}

if ! which node; then
   print_help
fi

if ! which jq; then
   print_help
fi

node invoicing-example-documented.js | jq -M '.' | tee invoicing-example.json
git add invoicing-example.json
