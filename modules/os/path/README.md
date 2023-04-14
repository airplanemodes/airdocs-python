# os.path

**Common pathname manipulations.**

> Source code: [`Lib/posixpath.py`](https://github.com/python/cpython/tree/3.11/Lib/posixpath.py) (for POSIX) and [`Lib/ntpath.py`](https://github.com/python/cpython/tree/3.11/Lib/ntpath.py) (for Windows).

This module implements some useful functions on pathnames.

To read or write files see [`open()`](/built-in-functions/open.md), and for accessing the filesystem see the [`os`](/modules/os/) module. The path parameters can be passed as strings, or bytes, or any object implementing the [`os.PathLike`](/modules/os/PathLike.md) protocol.