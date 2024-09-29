# HMAC.hexdigest()

Like [`digest()`](/modules/hmac/HMAC/digest.md) except the digest is returned as a string twice the length containing only hexadecimal digits. This may be used to exchange the value safely in email or other non-binary environments.

!> **Warning:** When comparing the output of `hexdigest()` to an externally supplied digest during a verification routine, it is recommended to use the [`compare_digest()`](/modules/hmac/compare_digest.md) function instead of the `==` operator to reduce the vulnerability to timing attacks.

### Syntax

```python
HMAC.hexdigest()
```
