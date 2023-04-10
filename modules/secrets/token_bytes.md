# secrets.token_bytes()

Return a random byte string containing **nbytes** number of bytes.

If **nbytes** is `None` or not supplied, a reasonable default is used.

### Syntax

```python
secrets.token_bytes()
secrets.token_bytes(nbytes=None)
```

### Examples

```python
>>> secrets.token_bytes(3) # b'\xc3\xb6\xd9'
>>> secrets.token_bytes(5) # b'\xfc\xd7\xde\xceF'
```