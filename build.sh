#!/bin/bash
usage="Usage: $0 [file_type] [file_name] [output_file] [meta_file]"

if [[ "$1" == "-h" ]]; then
	echo $usage
	exit 0
fi

ext=$1
fname=$2
res=$3
meta=$4
conf_folder=$5

if [ "$ext" == "md" ]; then
	python ~/scripts/file-merger/file_merger.py -c "$conf_folder/file-merger.yml"
	pandoc $fname -o $res --pdf-engine=xelatex --metadata-file=$meta --tab-stop=2
else
	echo $usage
	echo 'Wrong file type'
fi
