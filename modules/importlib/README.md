# importlib

**The implementation of import.**

> Source code: [`Lib/importlib/__init__.py`](https://github.com/python/cpython/tree/3.13/Lib/importlib/__init__.py)

The purpose of the importlib package is three-fold.

One is to provide the implementation of the [`import`](/statements/import.md) statement (and thus, by extension, the `__import__()` function) in Python source code. This provides an implementation of import which is portable to any Python interpreter. This also provides an implementation which is easier to comprehend than one implemented in a programming language other than Python.

Two, the components to implement [`import`](/statements/import.md) are exposed in this package, making it easier for users to create their own custom objects (known generically as an **importer**) to participate in the import process.

Three, the package contains modules exposing additional functionality for managing aspects of Python packages:

- `importlib.metadata` presents access to metadata from third-party distributions.
- `importlib.resources` provides routines for accessing non-code “resources” from Python packages.
