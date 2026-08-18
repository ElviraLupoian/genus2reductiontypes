#!/usr/bin/env bash
set -euo pipefail

repo_root=$(git rev-parse --show-toplevel)
build_root=$(mktemp -d)
trap 'rm -rf "$build_root"' EXIT

build_directory() {
  source_dir="$1"
  output_dir="$2"

  mkdir -p "$repo_root/$output_dir"

  while IFS= read -r -d '' tex_file; do
    # Ignore shared style files and empty/incomplete sources.
    grep -q '\\documentclass' "$tex_file" || continue

    name=$(basename "$tex_file" .tex)
    job_dir="$build_root/${source_dir##*/}/$name"
    mkdir -p "$job_dir"

    (
      cd "$repo_root/$source_dir"
      pdflatex \
        -interaction=nonstopmode \
        -halt-on-error \
        -output-directory="$job_dir" \
        "$name.tex"
    )

    inkscape "$job_dir/$name.pdf" \
      --pdf-poppler \
      --export-text-to-path \
      --export-filename="$repo_root/$output_dir/$name.svg"
  done < <(
    find "$repo_root/$source_dir" \
      -maxdepth 1 \
      -type f \
      -name '*.tex' \
      -print0 |
      sort -z
  )
}

build_directory \
  "genus2-special-fibres/tikz" \
  "genus2-special-fibres/images/special-fibres"

build_directory \
  "genus2-special-fibres/tikz-mrm" \
  "genus2-special-fibres/images/mrm-special-fibres"

  build_directory \
  "genus2-special-fibres/tikz/special-fibres" \
  "genus2-special-fibres/images/special-fibres"
