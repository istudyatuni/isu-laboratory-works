#!/bin/bash
if [[ "$1" == "-h" ]]; then
	echo $usage
	exit 0
fi

file_folder=html-1
ext=md
fname="$file_folder/report.md $file_folder/attachment.md"
res=result.pdf
meta=meta.yml

if [ "$ext" == "md" ]; then
	if [[ -f "$file_folder/file-merger.yml" ]]; then
		python ~/scripts/file-merger/file_merger.py -c "$file_folder/file-merger.yml"
	fi
	pandoc $fname -o $res --pdf-engine=xelatex --metadata-file=$meta --tab-stop=2 --resource-path=$file_folder/imgs
else
	echo $usage
	echo 'Wrong file type'
fi
