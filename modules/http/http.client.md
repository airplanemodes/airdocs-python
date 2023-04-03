# http.client

**HTTP protocol client.**

> Source code: [Lib/http/client.py](https://github.com/python/cpython/tree/3.11/Lib/http/client.py)

This module defines classes that implement the client side of the HTTP and HTTPS protocols. It is normally not used directly — the module `urllib.request` uses it to handle URLs that use HTTP and HTTPS.

The module provides the following classes:

## HTTPConnection()

### Syntax
```python
http.client.HTTPConnection(host, port=None, timeout, source_address=None, blocksize=8192)
http.client.HTTPConnection(host, port=None, source_address=None, blocksize=8192)
```