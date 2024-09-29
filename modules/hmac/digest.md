# hmac.digest()

Return digest of **msg** for given secret **key** and **digest**.

The function is equivalent to `HMAC(key, msg, digest).digest()`, but uses an optimized C or inline implementation, which is faster for messages that fit into memory. The parameters **key**, **msg**, and **digest** have the same meaning as in [`new()`](/modules/hmac/new.md).

?> **CPython implementation detail:** the optimized C implementation is only used when **digest** is a string and name of a digest algorithm, which is supported by OpenSSL.

### Syntax

```python
hmac.digest(key, msg, digest)
```
