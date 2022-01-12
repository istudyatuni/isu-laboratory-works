---
title: Самостоятельная работа № 6
subtitle: Базы данных
---
\clearpage

# Установка и тестирование PosrgreSQL.

# Ответы на вопросы.

## Глава 1.

1. Группы операторов - *определения данных* (Data Definition Language — DDL), *манипулирования данными* (Data Manipulation Language — DML), *управления привилегиями доступа к объектам базы данных* (Data Control Language — DCL).

2. *Отношения* - таблицы, *кортежи* - строки (отдельные записи), *атрибуты* - колонки.

3. Внешние ключи нужны для связи таблиц.

4. *Потенциальный ключ* — это комбинация атрибутов таблицы, позволяющая уникальным образом идентифицировать строки.

## Глава 2.

Я установил PosrgreSQL в докере, и запускаю через `docker-compose`:

```bash
docker-compose up -d db
```

Конфиг:

```yaml
version: '3'
services:
  db:
    image: postgres:alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=demo
    volumes:
      - pgdata:/var/lib/postgresql/data
      # каталог с сокетом
      - /run/postgresql:/var/run/postgresql
volumes:
  pgdata:
    external: true
```

При такой конфигурации я могу подключаться к PosrgreSQL так:

```bash
psql -U postgres
```

Только я буду использовать утилиту [`pgcli`](https://github.com/dbcli/pgcli), она предлагает автодополнение и подсветку команд.

## Глава 3.

1. Не получится вставить запись с ключом, который уже существует в таблице, потому что на первичный ключ накладывается ограничение уникальности.

2. Выборка всех строк из таблицы `aircrafts`, строки упорядочены по убыванию значения атрибута «Максимальная дальность полета, км» (`range`).

```sql
demo> select * from aircrafts order by range desc;
```
```
+---------------+---------------------+-------+
| aircraft_code | model               | range |
|---------------+---------------------+-------|
| 773           | Boeing 777-300      | 11100 |
| 763           | Boeing 767-300      | 7900  |
| 319           | Airbus A319-100     | 6700  |
| 320           | Airbus A320-200     | 5700  |
| 321           | Airbus A321-200     | 5600  |
| 733           | Boeing 737-300      | 4200  |
| SU9           | Sukhoi SuperJet-100 | 3000  |
| CR2           | Bombardier CRJ-200  | 2700  |
| CN1           | Cessna 208 Caravan  | 1200  |
+---------------+---------------------+-------+
SELECT 9
```

3. Увеличим командой `UPDATE` значение атрибута без дополнительной выборки этого атрибута

```sql
update aircrafts
  set range = range * 2
  where aircraft_code = 'SU9';
```

![](1.png)

4. Установка такой выборки в `WHERE`, что при удалении не один элемент не будет удален:

```sql
demo> delete from aircrafts where range > 20000;
```

Результат (удалено 0 элементов)

```
DELETE 0
```
