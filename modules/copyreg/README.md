# copyreg

**Register pickle support functions.**

> Source code: [`Lib/copyreg.py`](https://github.com/python/cpython/tree/3.12/Lib/copyreg.py)

The `copyreg` module offers a way to define functions used while pickling specific objects. The [`pickle`](/modules/pickle/) and [`copy`](/modules/copy/) modules use those functions when pickling/copying those objects. The module provides configuration information about object constructors which are not classes. Such constructors may be factory functions or class instances.
