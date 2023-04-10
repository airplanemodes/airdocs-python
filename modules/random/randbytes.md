# random.randbytes()

Generate **n** random bytes.

?> This method should not be used for generating security tokens. Use [`secrets.token_bytes()`](/modules/secrets/token_bytes.md) instead.

### Syntax

```python
random.randbytes(n)
```

### Examples

```python
>>> random.randbytes(2) # b'\x03\x1a'
>>> random.randbytes(4) # b'\xc7\xd7\x9a<'
>>> random.randbytes(4) # b'*\x07\xa8\xd9'
```