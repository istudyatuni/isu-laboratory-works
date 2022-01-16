---
title: Самостоятельная работа № 8
subtitle: Базы данных
---
\clearpage

# 5. Язык определения данных.

**Ответы**

1. После добавления нужных столбцов (`who_adds_row` и `row_added`) получаем следующую таблицу:

```sql
alter table students add column who_adds_row text default current_user;
alter table students add column row_added timestamp default current_timestamp;
```
```
+--------------+-----------------------------+----------------------------+
| Column       | Type                        | Modifiers                  |
|--------------+-----------------------------+----------------------------|
| record_book  | numeric(5,0)                |  not null                  |
| name         | text                        |  not null                  |
| doc_ser      | numeric(4,0)                |                            |
| doc_num      | numeric(6,0)                |                            |
| who_adds_row | text                        |  default CURRENT_USER      |
| row_added    | timestamp without time zone |  default CURRENT_TIMESTAMP |
+--------------+-----------------------------+----------------------------+
Indexes:
    "students_pkey" PRIMARY KEY, btree (record_book)
Referenced by:
    TABLE "progress" CONSTRAINT "progress_record_book_fkey" FOREIGN KEY (record_book) REFERENCES students(record_book) ON UPDATE CASCADE ON DELETE CASCADE
```

Добавляем данные и проверяем

```sql
insert into students ( record_book, name, doc_ser, doc_num )
  values ( 12300, 'Иванов Иван Иванович', 0403, 543281 );

select * from students;
```
```
-[ RECORD 1 ]-------------------------
record_book  | 12300
name         | Иванов Иван Иванович
doc_ser      | 403
doc_num      | 543281
who_adds_row | postgres
row_added    | 2022-01-13 22:07:42.976576

```

2. Добавляем общую проверку, удалеям старые конфликтующие ограничения

```sql
alter table progress
  add check (
    ( test_form = 'экзамен' and mark in ( 3, 4, 5) )
      or
    ( test_form = 'зачет' and mark in ( 0, 1) )
);
alter table progress drop constraint progress_mark_check;
alter table progress drop constraint progress_term_check;
alter table progress drop constraint progress_test_form_check;
```

получается следующая таблица

```
+-------------+----------------------+---------------------+
| Column      | Type                 | Modifiers           |
|-------------+----------------------+---------------------|
| record_book | numeric(5,0)         |  not null           |
| subject     | text                 |  not null           |
| acad_year   | text                 |  not null           |
| term        | numeric(1,0)         |  not null           |
| mark        | numeric(1,0)         |  not null default 5 |
| test_form   | character varying(7) |  not null           |
+-------------+----------------------+---------------------+
Check constraints:
    "progress_check" CHECK (test_form::text = 'экзамен'::text AND (mark = ANY (ARRAY[3::numeric, 4::numeric, 5::numeric])) OR test_form::text = 'зачет'::text AND (mark = ANY (ARRAY[0::numeric, 1::numeric])))
Foreign-key constraints:
    "progress_record_book_fkey" FOREIGN KEY (record_book) REFERENCES students(record_book) ON UPDATE CASCADE ON DELETE CASCADE
```

3. Если есть ограничение вида

```sql
check (
  ( test_form = 'экзамен' and mark in ( 3, 4, 5) )
    or
  ( test_form = 'зачет' and mark in ( 0, 1) )
```

то оно не гарантирует `test_form NOT NULL`, например

```sql
insert into progress (record_book, subject, acad_year, term)
  values ( 12300, 'Физика', '2021/2022', 1 );

select * from progress;
```
```
+-------------+---------+-----------+------+------+-----------+
| record_book | subject | acad_year | term | mark | test_form |
|-------------+---------+-----------+------+------+-----------|
| 12300       | Физика  | 2021/2022 | 1    | 5    | <null>    |
+-------------+---------+-----------+------+------+-----------+
```

Поэтому надо явно указывать ограничение на `test_form`

```sql
alter table progress alter column test_form set not null;
```

4. Если значение `DEFAULT` не проходит какое-либо ограничение, например `mark CHECK (mark >= 3 AND mark <= 5) default 6`, то при создании или изменении схемы ошибки не будет, а появится только при вставке элементов.

5. Если наложены ограничения уникальности на атрибут, то все равно возможно совпадение записей, если в данном атрибуте записан `NULL`.

\clearpage

# 6. Запросы.

**Ответы**

1. Создадим такую таблицу для проверки работы символа `%` в операторе `LIKE`

```sql
select * from tickets;
```
```
+-----------+----------------------+
| ticket_id | passenger_name       |
|-----------+----------------------|
| 1         | Иванов Иван Иванович |
| 2         | Иванов Иван          |
| 3         | Иванов               |
+-----------+----------------------+
```

Нас интересует, как обрабатываются пробелы

```sql
select * from tickets where passenger_name like '% %';
```
```
+-----------+----------------------+
| ticket_id | passenger_name       |
|-----------+----------------------|
| 1         | Иванов Иван Иванович |
| 2         | Иванов Иван          |
+-----------+----------------------+
```

```sql
select * from tickets where passenger_name like '% % %';
```
```
+-----------+----------------------+
| ticket_id | passenger_name       |
|-----------+----------------------|
| 1         | Иванов Иван Иванович |
+-----------+----------------------+
```

```sql
select * from tickets where passenger_name like '% %%';
```
```
+-----------+----------------------+
| ticket_id | passenger_name       |
|-----------+----------------------|
| 1         | Иванов Иван Иванович |
| 2         | Иванов Иван          |
+-----------+----------------------+
```

Как видно, с его помощью задаются в том числе и пробелы.

2. Выборка пассажиров с фамилиями из 5 букв (если фамилия - это второе слово)

```sql
SELECT passenger_name
  FROM tickets
  WHERE passenger_name LIKE '% _____ %';
```
