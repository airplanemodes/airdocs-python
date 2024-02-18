# shelve

**Python object persistence.**

> Source code: [`Lib/shelve.py`](https://github.com/python/cpython/tree/3.12/Lib/shelve.py)

A “shelf” is a persistent, dictionary-like object. The difference with “dbm” databases is that the values (not the keys!) in a shelf can be essentially arbitrary Python objects — anything that the [`pickle`](/modules/pickle/) module can handle. This includes most class instances, recursive data types, and objects containing lots of shared sub-objects. The keys are ordinary strings.
