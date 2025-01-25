#!/bin/bash

# Sicherstellen, dass das Skript bei Fehlern stoppt
set -e

# Verzeichnis des Skripts bestimmen
ROOT_DIR=$(dirname "$(realpath "$0")")/..

# In den Projektordner navigieren (relativer Pfad)
echo "Navigiere in den Projektordner: $ROOT_DIR"
cd "$ROOT_DIR"

# In den Ordner /packages/api-lib wechseln und build ausführen
API_LIB_DIR="$ROOT_DIR/packages/api-lib"
echo "Navigiere in $API_LIB_DIR und führe 'npm run build' aus"
cd "$API_LIB_DIR"
npm run build

# Zurück in das Projektverzeichnis navigieren
echo "Zurück ins Projektverzeichnis"
cd "$ROOT_DIR"

# In den Ordner /streamelements-nodejs-server wechseln und build ausführen
SERVER_DIR="$ROOT_DIR/streamelements-nodejs-server"
echo "Navigiere in $SERVER_DIR und führe 'npm run build' aus"
cd "$SERVER_DIR"
npm run build

echo "Build-Prozesse abgeschlossen."