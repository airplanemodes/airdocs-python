# linecache

**Random access to text lines.**

> Source code: [`Lib/linecache.py`](https://github.com/python/cpython/tree/3.12/Lib/linecache.py)

The `linecache` module allows one to get any line from a Python source file, while attempting to optimize internally, using a cache, the common case where many lines are read from a single file. This is used by the [`traceback`](/modules/traceback/) module to retrieve source lines for inclusion in the formatted traceback.