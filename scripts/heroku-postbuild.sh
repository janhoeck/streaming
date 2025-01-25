#!/bin/bash

# Ensure the script stops on errors
set -e

# Determine the directory of the script
ROOT_DIR=$(dirname "$(realpath "$0")")/..

# Navigate to the project directory (relative path)
echo "Navigating to the project directory: $ROOT_DIR"
cd "$ROOT_DIR"

# Navigate to the /packages/api-lib folder and run build
API_LIB_DIR="$ROOT_DIR/packages/api-lib"
echo "Navigating to $API_LIB_DIR and running 'npm run build'"
cd "$API_LIB_DIR"
npm run build

# Navigate back to the project directory
echo "Returning to the project directory"
cd "$ROOT_DIR"

# Navigate to the /streamelements-nodejs-server folder and run build
SERVER_DIR="$ROOT_DIR/streamelements-nodejs-server"
echo "Navigating to $SERVER_DIR and running 'npm run build'"
cd "$SERVER_DIR"
npm run build

echo "Build processes completed."