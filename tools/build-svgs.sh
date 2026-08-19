#!/usr/bin/env bash
set -euo pipefail

repo_root=$(git rev-parse --show-toplevel)
build_root=$(mktemp -d)
trap 'rm -rf "$build_root"' EXIT

normalise_path() {
  local path="$1"
  path=${path#"$repo_root"/}
  path=${path#./}
  printf '%s\n' "$path"
}

output_directory_for() {
  local relative_path="$1"

  case "$relative_path" in
    genus2-special-fibres/tikz-mrm/*.tex)
      printf '%s\n' "genus2-special-fibres/images/mrm-special-fibres"
      ;;
    genus2-special-fibres/tikz/special-fibres/*.tex)
      printf '%s\n' "genus2-special-fibres/images/special-fibres"
      ;;
    genus2-special-fibres/tikz/*.tex)
      printf '%s\n' "genus2-special-fibres/images/special-fibres"
      ;;
    *)
      return 1
      ;;
  esac
}

build_file() {
  local relative_path
  local output_dir
  local source_dir
  local filename
  local name
  local output_file
  local job_dir

  relative_path=$(normalise_path "$1")

  if ! output_dir=$(output_directory_for "$relative_path"); then
    return
  fi

  source_dir=${relative_path%/*}
  filename=${relative_path##*/}
  name=${filename%.tex}
  output_file="$repo_root/$output_dir/$name.svg"

  mkdir -p "$repo_root/$output_dir"

  # A deleted or renamed TeX source should remove its old generated SVG.
  if [ ! -f "$repo_root/$relative_path" ]; then
    rm -f "$output_file"
    echo "Removed $output_dir/$name.svg"
    return
  fi

  # Ignore shared style files and incomplete sources.
  if ! grep -q '\\documentclass' "$repo_root/$relative_path"; then
    echo "Skipped $relative_path (no \\documentclass)"
    return
  fi

  job_dir="$build_root/${source_dir//\//_}/$name"
  mkdir -p "$job_dir"

  echo "Building $relative_path"

  (
    cd "$repo_root/$source_dir"
    pdflatex \
      -interaction=nonstopmode \
      -halt-on-error \
      -output-directory="$job_dir" \
      "$filename"
  )

  inkscape "$job_dir/$name.pdf" \
    --pdf-poppler \
    --export-text-to-path \
    --export-filename="$output_file"
}

build_directory() {
  local source_dir="$1"

  while IFS= read -r -d '' tex_file; do
    build_file "$tex_file"
  done < <(
    find "$repo_root/$source_dir" \
      -maxdepth 1 \
      -type f \
      -name '*.tex' \
      -print0 |
      sort -z
  )
}

build_everything() {
  build_directory "genus2-special-fibres/tikz"
  build_directory "genus2-special-fibres/tikz-mrm"
  build_directory "genus2-special-fibres/tikz/special-fibres"
}

if [ "$#" -eq 0 ]; then
  build_everything
  exit
fi

rebuild_all_mrm=false

for changed_path in "$@"; do
  relative_path=$(normalise_path "$changed_path")
  if [ "$relative_path" = \
    "genus2-special-fibres/tikz-mrm/nu-fibre-style.tex" ]; then
    rebuild_all_mrm=true
  fi
done

for changed_path in "$@"; do
  relative_path=$(normalise_path "$changed_path")

  if [ "$rebuild_all_mrm" = true ]; then
    case "$relative_path" in
      genus2-special-fibres/tikz-mrm/*.tex)
        continue
        ;;
    esac
  fi

  build_file "$relative_path"
done

if [ "$rebuild_all_mrm" = true ]; then
  echo "The shared MRM style changed; rebuilding all MRM diagrams"
  build_directory "genus2-special-fibres/tikz-mrm"
fi
