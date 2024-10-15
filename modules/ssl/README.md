# ssl

**TLS/SSL wrapper for socket objects.**

> **Availability:** not Emscripten, not WASI.
> Source code: [`Lib/ssl.py`](https://github.com/python/cpython/tree/3.13/Lib/ssl.py)  

This module provides access to Transport Layer Security (often known as “Secure Sockets Layer”) encryption and peer authentication facilities for network sockets, both client-side and server-side. This module uses the OpenSSL library. It is available on all modern Unix systems, Windows, macOS, and probably additional platforms, as long as OpenSSL is installed on that platform.

?> Some behavior may be platform dependent, since calls are made to the operating system socket APIs. The installed version of OpenSSL may also cause variations in behavior. For example, TLSv1.3 with OpenSSL version 1.1.1.