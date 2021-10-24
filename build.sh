#!/bin/bash
usage="Usage: $0 [file_type] '[files_names]' [output_file] [meta_file] [path_to_file]"

if [[ "$1" == "-h" ]]; then
	echo $usage
	exit 0
fi

ext=$1
fname=$2
res=$3
meta=$4
file_folder=$5

if [ "$ext" == "md" ]; then
	if [[ -f "$file_folder/file-merger.yml" ]]; then
		python ~/scripts/file-merger/file_merger.py -c "$file_folder/file-merger.yml"
	fi
	pandoc $fname -o $res --pdf-engine=xelatex --metadata-file=$meta --tab-stop=2 --resource-path=$file_folder/imgs
else
	echo $usage
	echo 'Wrong file type'
fi
