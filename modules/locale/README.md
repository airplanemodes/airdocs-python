# locale

**Internationalization services.**

> Source code: [`Lib/locale.py`](https://github.com/python/cpython/tree/3.12/Lib/locale.py)

The `locale` module opens access to the POSIX locale database and functionality. The POSIX locale mechanism allows programmers to deal with certain cultural issues in an application, without requiring the programmer to know all the specifics of each country where the software is executed.

The `locale` module is implemented on top of the `_locale` module, which in turn uses an ANSI C locale implementation if available.
