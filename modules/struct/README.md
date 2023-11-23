# struct

**Interpret bytes as packed binary data.**

> Source code: [`Lib/struct.py`](https://github.com/python/cpython/tree/3.12/Lib/struct.py)

This module converts between Python values and C structs represented as Python [`bytes`](/built-in-types/bytes/) objects. Compact format strings describe the intended conversions to/from Python values. The module’s functions and objects can be used for two largely distinct applications, data exchange with external sources (files or network connections), or data transfer between the Python application and the C layer.

?> When no prefix character is given, native mode is the default. It packs or unpacks data based on the platform and compiler on which the Python interpreter was built. The result of packing a given C struct includes pad bytes which maintain proper alignment for the C types involved. Similarly, alignment is taken into account when unpacking. In contrast, when communicating data between external sources, the programmer is responsible for defining byte ordering and padding between elements.

Several `struct` functions (and methods of [`Struct`](/modules/struct/Struct.md) take a **buffer** argument. This refers to objects that implement the *Buffer Protocol* and provide either a readable or read-writable buffer. The most common types used for that purpose are [`bytes`](/built-in-types/bytes/) and [`bytearray`](/built-in-types/bytearray/), but many other types that can be viewed as an array of bytes implement the buffer protocol, so that they can be read/filled without additional copying from a [`bytes`](/built-in-types/bytes/) object.
