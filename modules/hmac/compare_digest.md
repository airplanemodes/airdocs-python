# hmac.compare_digest()

Return `a == b`.

This function uses an approach designed to prevent timing analysis by avoiding content-based short circuiting behaviour, making it appropriate for cryptography. **a** and **b** must both be of the same type: either [`str`](/built-in-types/str/) (ASCII only, as e.g. returned by [`HMAC.hexdigest()`](/modules/hmac/HMAC/hexdigest.md)), or a bytes-like object.

?> If **a** and **b** are of different lengths, or if an error occurs, a timing attack could theoretically reveal information about the types and lengths of **a** and **b**, but not their values.

### Syntax

```python
hmac.compare_digest(a, b)
```