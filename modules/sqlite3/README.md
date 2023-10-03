# sqlite3

**DB-API 2.0 interface for SQLite databases.**

> Source code: [`Lib/sqlite3/`](https://github.com/python/cpython/tree/3.11/Lib/sqlite3/)

SQLite is a C library that provides a lightweight disk-based database that doesn’t require a separate server process and allows accessing the database using a nonstandard variant of the SQL query language. Some applications can use SQLite for internal data storage. It’s also possible to prototype an application using SQLite and then port the code to a larger database such as PostgreSQL or Oracle.

The `sqlite3` module was written by Gerhard Häring. It provides an SQL interface compliant with the DB-API 2.0 specification described by [**PEP 249**](https://peps.python.org/pep-0249/), and requires SQLite 3.7.15 or newer.