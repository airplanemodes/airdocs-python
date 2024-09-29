# hmac.new()

Return a new [`HMAC`](/modules/hmac/HMAC/) object.

**key** is a [`bytes`](/built-in-types/bytes/) or [`bytearray`](/built-in-types/bytearray/) object giving the secret key.

If **msg** is present, the method call `update(msg)` is made.

**digestmod** is the digest name, digest constructor or module for the [`HMAC`](/modules/hmac/HMAC/) object to use. It may be any name suitable to [`hashlib.new()`](/modules/hashlib/new.md). Despite its argument position, it is required.

### Syntax

```python
hmac.new(key, msg=None, digestmod='')
```

### Example

```python
>>> import hmac
>>> a = bytes(2)
>>> a # b'\x00\x00'
>>> b = hmac.new(a, digestmod='sha256')
>>> b # <hmac.HMAC object at 0x105677ba0>
```
