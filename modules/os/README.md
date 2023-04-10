# os

**Miscellaneous operating system interfaces.**

> Source code: [`Lib/os.py`](https://github.com/python/cpython/tree/3.11/Lib/os.py)

This module provides a portable way of using operating system dependent functionality.

If you just want to read or write a file see [`open()`](/built-in-functions/open.md), if you want to manipulate paths, see the [`os.path`](/modules/os/path/) module, and if you want to read all the lines in all the files on the command line see the [`fileinput`](/modules/fileinput.md) module. For creating temporary files and directories see the [`tempfile`](/modules/tempfile.md) module, and for high-level file and directory handling see the [`shutil`](/modules/shutil.md) module.

Notes on the availability of these functions:

- The design of all built-in operating system dependent modules of Python is such that as long as the same functionality is available, it uses the same interface. For example, the function [`os.stat(path)`](/modules/os/stat.md) returns stat information about path in the same format (which happens to have originated with the POSIX interface).
- Extensions peculiar to a particular operating system are also available through the `os` module, but using them is of course a threat to portability.
- All functions accepting path or file names accept both bytes and string objects, and result in an object of the same type, if a path or file name is returned.
- On VxWorks, os.popen, os.fork, os.execv and os.spawn*p* are not supported.
- On WebAssembly platforms `wasm32-emscripten` and `wasm32-wasi`, large parts of the `os` module are not available or behave differently. API related to processes (e.g. [`fork()`](/modules/os/fork.md), [`execve()`](/modules/os/execve.md)), signals (e.g. [`kill()`](/modules/os/kill.md), [`wait()`](/modules/os/wait.md)), and resources (e.g. [`nice()`](/modules/os/nice.md)) are not available. Others like [`getuid()`](/modules/os/getuid.md) and [`getpid()`](/modules/os/getpid.md) are emulated or stubs.