# struct

**Interpret bytes as packed binary data.**

> Source code: [`Lib/struct.py`](https://github.com/python/cpython/tree/3.12/Lib/struct.py)

This module converts between Python values and C structs represented as Python [`bytes`](/built-in-types/bytes/) objects. Compact format strings describe the intended conversions to/from Python values. The module’s functions and objects can be used for two largely distinct applications, data exchange with external sources (files or network connections), or data transfer between the Python application and the C layer.