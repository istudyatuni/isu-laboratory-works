---
title: Самостоятельная работа № 9
subtitle: Базы данных
---
\clearpage

# Лабораторная работа 1. Создание и заполнение таблиц базы данных.

**Создание и заполнение отношений БД бухгалтерии.**

```sql
-- отделы
create table departments (
  id serial primary key,
  name text NOT NULL );

-- должности
create table positions (
  name text primary key,
  -- зарплата
  salary money check ( salary::numeric >= 0 ) default 0 );

-- сотрудники
create table employees (
  -- табельный номер
  tabel_num numeric(6) primary key,
  fio varchar(40) not null,
  -- ИНН
  inn char(12) not null unique,
  sex char(1) check ( sex in ( 'м', 'ж' ) ) default 'м',
  birth_date date not null,
  department integer references departments ( id ),
  position text references positions ( name ),
  -- дата поступления на предприятие
  admission_date date,
  -- опыт на предыдущих предприятиях
  experience numeric (7, 2) default 0 );

-- дети сотрудников
create table childs (
  id serial primary key,
  parent_tabel_num numeric(6) references employees ( tabel_num ),
  fio varchar(40) not null,
  sex char(1) check ( sex in ( 'м', 'ж' ) ) default 'м',
  birth_date date not null );
```

Заполним

```sql
insert into departments (name) values ('ИТ'), ('HR'), ('Реклама');

insert into positions (name, salary) values
  ( 'Dev 1', 100 ),
  ( 'Dev 2', 200 ),
  ( 'Dev 3', 300 ),
  ( 'Dev 4', 400 );

insert into positions (name, salary) values
  ( 'HR 1', 100 ),
  ( 'HR 2', 200 ),
  ( 'HR 3', 300 ),
  ( 'HR 4', 400 );

insert into positions (name, salary) values
  ( 'Ad 1', 100 ),
  ( 'Ad 2', 200 ),
  ( 'Ad 3', 300 ),
  ( 'Ad 4', 400 );

insert into employees (tabel_num, fio, inn, sex, birth_date, department, position, experience) values
  ( 323683, 'Сухомлина Валентина Адамовна', '286846243933', 'м', '18.08.1961', 1, 'HR 1', 10 ),
  ( 970423, 'Каприянова Зинаида Павловна', '840155207943', 'ж', '11.03.1976', 2, 'Ad 4', 19 ),
  ( 126343, 'Вершинин Игнатий Феоктистович', '111645154878', 'м', '26.03.1987', 1, 'Dev 3', 14 ),
  ( 419450, 'Ахременко Венедикт Себастьянович', '319759931983', 'м', '13.06.1960', 3, 'Ad 4', 27 );

-- добавим дату прихода на работу
update employees set admission_date = '01.01.2010';

insert into childs (parent_tabel_num, fio, sex, birth_date) values
  ( 323683, 'Лебедев Марк Антонович', 'м', '06.02.2007' ),
  ( 323683, 'Жванецкая Анастасия Евгеньевна', 'ж', '08.10.2005' ),
  ( 323683, 'Бушмелев Лаврентий Валентинович', 'м', '23.12.2008' ),
  ( 323683, 'Лебедев Прохор Феликсович', 'м', '06.02.2007' ),
  ( 126343, 'Розенбаха Валерия Тарасовна', 'ж', '10.09.2009' ),
  ( 126343, 'Юматов Прохор Феликсович', 'м', '05.03.2011' );
```

# Лабораторная работа № 2. Создание запросов к созданным отношениям.

Упорядоченные по отделам списки:

- сотрудников с их детьми

```sql
select e.department, e.tabel_num, e.fio, c.fio
  from employees e, childs c
  where c.parent_tabel_num = e.tabel_num
  order by e.department;
```

*Результат (обрезал имя и отчество чтобы поместилось):*

```
+------------+-----------+----------------+---------------+
| department | tabel_num | fio            | fio           |
|------------+-----------+----------------+---------------|
| 1          | 323683    | Сухомлина В А  | Лебедев М А   |
| 1          | 323683    | Сухомлина В А  | Жванецкая А Е |
| 1          | 323683    | Сухомлина В А  | Бушмелев Л В  |
| 1          | 323683    | Сухомлина В А  | Лебедев П Ф   |
| 2          | 126343    | Вершинин И Ф   | Розенбаха В Т |
| 2          | 126343    | Вершинин И Ф   | Юматов П Ф    |
+------------+-----------+----------------+---------------+
```

- многодетных сотрудников (имеющих не менее 3-х детей)

```sql
select e.department, e.tabel_num, e.fio, count(c) as childs_count
  from employees e, childs c
  where c.parent_tabel_num = e.tabel_num
  group by e.department, e.tabel_num, e.fio
  having count(c) >= 3
  order by e.department;
```

*Результат:*

```
+------------+-----------+---------------+--------------+
| department | tabel_num | fio           | childs_count |
|------------+-----------+---------------+--------------|
| 1          | 323683    | Сухомлина В А | 4            |
+------------+-----------+---------------+--------------+
```

- должностей каждого отдела (без повторов)

*Оказывается в задании неточность, и в таблице `positions` должен быть внешний ключ к таблице `departments`*

```sql
alter table positions add column department_id integer references departments (id);
update positions set department_id = 1;
update positions set department_id = 2 where name like 'HR%';
update positions set department_id = 3 where name like 'Ad%';
```

*Выборка*

```sql
select d.name, array_agg(p.name) as positions
   from departments d, positions p
   where d.id = p.department_id
   group by d.name;
```

*Результат:*

```
+---------+--------------------------------------+
| name    | positions                            |
|---------+--------------------------------------|
| Реклама | ['Ad 1', 'Ad 2', 'Ad 3', 'Ad 4']     |
| HR      | ['HR 1', 'HR 2', 'HR 3', 'HR 4']     |
| ИТ      | ['Dev 1', 'Dev 2', 'Dev 3', 'Dev 4'] |
+---------+--------------------------------------+
```
