#!/bin/sh

search_dir=$1

for entry in ${search_dir}/*
do
  newFileName=${entry// /_}
  newFileName=${newFileName//._/_}
  if [[ $newFileName =~ \.ts$ ]]; then
    echo $newFileName
  else
    newFileName="$newFileName.ts"
  fi
  mv "$entry" $newFileName
done