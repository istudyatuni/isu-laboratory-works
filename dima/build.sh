#!/bin/bash
if [[ "$1" == "-h" ]]; then
	echo $usage
	exit 0
fi

ext=md
fname='1/report.md 1/attachment.md'
res=result.pdf
meta=meta.yml
file_folder=1

if [ "$ext" == "md" ]; then
	if [[ -f "$file_folder/file-merger.yml" ]]; then
		python ~/scripts/file-merger/file_merger.py -c "$file_folder/file-merger.yml"
	fi
	pandoc $fname -o $res --pdf-engine=xelatex --metadata-file=$meta --tab-stop=2 --resource-path=$file_folder/imgs
else
	echo $usage
	echo 'Wrong file type'
fi
