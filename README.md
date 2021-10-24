# Как собирать PDF

Запустить сборку (F7 в Siblime Text) находясь в файле с отчетом, папка с этим файлом должна содержать файл `attachment.md` с исходным кодом в одном файле, идет как `Приложение` в отчете.

Также можно собрать вручную:

```bash
./build.sh 'md' 'report.md path/to/attachment.md' result.pdf meta.yml 'folder_with_report'
```

`attachment.md` собирается с помощью [file-merger](https://github.com/istudyatuni/file-merger) и использует конфиг `file-merger.yml`.

Все изображения для вставки должны находится в `folder_with_report/imgs`.

## Avif

Некоторые изображения в формате avif, но этот формат не поддерживается pandoc, поэтому для создания PDF надо конвертировать их обратно, например

```bash
cd imgs
mogrify -format png *.avif
```

Это создаст копию каждого avif изображения в png формате. mogrify из пакета imagemagick.
