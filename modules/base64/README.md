# base64

**Base16, Base32, Base64, Base85 Data Encodings.**

> Source code: [`Lib/base64.py`](https://github.com/python/cpython/tree/3.12/Lib/base64.py)

This module provides functions for encoding binary data to printable ASCII characters and decoding such encodings back to binary data. It provides encoding and decoding functions for the encodings specified in [**RFC 4648**](https://datatracker.ietf.org/doc/html/rfc4648.html), which defines the Base16, Base32, and Base64 algorithms, and for the de-facto standard Ascii85 and Base85 encodings.

The [**RFC 4648**](https://datatracker.ietf.org/doc/html/rfc4648.html) encodings are suitable for encoding binary data so that it can be safely sent by email, used as parts of URLs, or included as part of an HTTP POST request. The encoding algorithm is not the same as the uuencode program.

There are two interfaces provided by this module. The modern interface supports encoding bytes-like objects to ASCII [`bytes`](/built-in-types/bytes/), and decoding bytes-like objects or strings containing ASCII to [`bytes`](/built-in-types/bytes/). Both base-64 alphabets defined in [**RFC 4648**](https://datatracker.ietf.org/doc/html/rfc4648.html) (normal, and URL- and filesystem-safe) are supported.

The legacy interface does not support decoding from strings, but it does provide functions for encoding and decoding to and from file objects. It only supports the Base64 standard alphabet, and it adds newlines every 76 characters as per [**RFC 2045**](https://datatracker.ietf.org/doc/html/rfc2045.html). Note that if you are looking for [**RFC 2045**](https://datatracker.ietf.org/doc/html/rfc2045.html) support you probably want to be looking at the [`email`](/modules/email/) package instead.
