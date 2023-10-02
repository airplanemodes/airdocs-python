# socket

**Low-level networking interface.**

> **Availability:** not Emscripten, not WASI.  
> Source code: [`Lib/socket.py`](https://github.com/python/cpython/tree/3.11/Lib/socket.py).

This module provides access to the BSD socket interface. It is available on all modern Unix systems, Windows, MacOS, and probably additional platforms.

Some behavior may be platform dependent, since calls are made to the operating system socket APIs.