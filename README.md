# How build

Run build (F7) from file with report, folder with this file must contain file `attachment.md` with source code in one file (it compiled in resulting file after other content from report)

`attachment.md` compiled with file-merger and use config from file-merger.yml

All images to insert in pdf file must contains in `folder_with_report/imgs`

Some images in avif format, but this format does not support by pandoc, so for creating pdf you need to convert them back, for example with

```bash
cd imgs
mogrify -format png *.avif
```

This will create of copy of each avif image in png format. mogrify is in imagemagick package
