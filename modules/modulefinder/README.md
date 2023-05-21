# modulefinder

**Find modules used by a script.**

> Source code: [`Lib/modulefinder.py`](https://github.com/python/cpython/tree/3.11/Lib/modulefinder.py)

This module provides a [`ModuleFinder`](/modules/modulefinder/ModuleFinder/) class that can be used to determine the set of modules imported by a script. `modulefinder.py` can also be run as a script, giving the filename of a Python script as its argument, after which a report of the imported modules will be printed.