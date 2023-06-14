# HMAC.digest()

Return the digest of the bytes passed to the [`update()`](/modules/hmac/HMAC/update.md) method so far.

This bytes object will be the same length as the **digest_size** of the digest given to the constructor. It may contain non-ASCII bytes, including NUL bytes.

!> **Warning:** When comparing the output of `digest()` to an externally supplied digest during a verification routine, it is recommended to use the [`compare_digest()`](/modules/hmac/compare_digest.md) function instead of the `==` operator to reduce the vulnerability to timing attacks.

### Syntax

```python
HMAC.digest()
```