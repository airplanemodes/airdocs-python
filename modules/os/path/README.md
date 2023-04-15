# os.path

**Common pathname manipulations.**

> Source code: [`Lib/posixpath.py`](https://github.com/python/cpython/tree/3.11/Lib/posixpath.py) (for POSIX) and [`Lib/ntpath.py`](https://github.com/python/cpython/tree/3.11/Lib/ntpath.py) (for Windows).

This module implements some useful functions on pathnames.

To read or write files see [`open()`](/built-in-functions/open.md), and for accessing the filesystem see the [`os`](/modules/os/) module. The path parameters can be passed as strings, or bytes, or any object implementing the [`os.PathLike`](/modules/os/PathLike.md) protocol.

Unlike a Unix shell, Python does not do any *automatic* path expansions. Functions such as [`expanduser()`](/modules/os/path/expanduser.md) and [`expandvars()`](/modules/os/path/expandvars.md) can be invoked explicitly when an application desires shell-like path expansion.

?> **See also:** The [`pathlib`](/modules/pathlib/) module offers high-level path objects.

All of these functions accept either only [`bytes`](/built-in-types/bytes/) or only [`str`](/built-in-types/str/) objects as their parameters. The result is an object of the same type, if a path or file name is returned.

Since different operating systems have different path name conventions, there are several versions of this module in the standard library. The `os.path` module is always the path module suitable for the operating system Python is running on, and therefore usable for local paths. However, you can also import and use the individual modules if you want to manipulate a path that is *always* in one of the different formats. They all have the same interface:

- `posixpath` for UNIX-style paths.
- `ntpath` for Windows paths.