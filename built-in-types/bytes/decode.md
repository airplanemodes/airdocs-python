# bytes.decode()

Return the bytes decoded to a [`str`](/built-in-types/str/).

**encoding** defaults to `'utf-8'`.

**errors** controls how decoding errors are handled. If `'strict'` (the default), a [`UnicodeError`](/exceptions/UnicodeError.md) exception is raised. Other possible values are `'ignore'`, `'replace'`, and any other name registered via [`codecs.register_error()`](/modules/codecs/register_error.md). 

?> For performance reasons, the value of **errors** is not checked for validity unless a decoding error actually occurs, "Python Development Mode" is enabled or a debug build is used.

?> Passing the encoding argument to [`str`](/built-in-types/str/) allows decoding any bytes-like object directly, without needing to make a temporary `bytes` or [`bytearray`](/built-in-types/bytearray/) object.

### Syntax

```python
bytes.decode(encoding='utf-8', errors='strict')
```
