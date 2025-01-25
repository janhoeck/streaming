#!/bin/bash

# Script to find all package.json files in a directory (ignoring node_modules) and run npm install

# Get the current directory
BASE_DIR=$(dirname "$(realpath "$0")")/..

# Find all package.json files while excluding paths containing "node_modules"
find "$BASE_DIR" -type f -name "package.json" -not -path "*/node_modules/*" | while read -r PACKAGE_JSON; do
    # Get the directory containing the package.json file
    PACKAGE_DIR=$(dirname "$PACKAGE_JSON")

    # Navigate to the directory
    echo "Entering directory: $PACKAGE_DIR"
    cd "$PACKAGE_DIR" || continue

    # Run npm install
    echo "Running npm install in $PACKAGE_DIR"
    npm install

    # Navigate back to the base directory
    cd "$BASE_DIR" || exit
done

echo "All npm install tasks completed."