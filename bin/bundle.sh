#!/bin/bash

OUT_DIR="out"
OUT_FILE="kwin.d.ts"

[ -d "$OUT_DIR" ] || mkdir -v "$OUT_DIR"
[ ! -f "$OUT_DIR/$OUT_FILE" ] || rm -v "$OUT_DIR/$OUT_FILE"

add_file () {
    [ "$1" != "src/*.d.ts" ] && [ "$1" != "src/**/*.d.ts" ] || return 0
    echo "Adding $1"
    echo -e "//#region $1\n$(cat "$1")\n//#endregion\n\n" >> "$OUT_DIR/$OUT_FILE"
}

for file in src/*.d.ts; do add_file "$file"; done
for file in src/**/*.d.ts; do add_file "$file"; done
