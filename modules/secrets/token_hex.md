# secrets.token_hex()

Return a random text string, in hexadecimal. The string has **nbytes** random bytes, each byte converted to two hex digits.

If **nbytes** is `None` or not supplied, a reasonable default is used.

### Syntax

```python
secrets.token_hex()
secrets.token_hex(nbytes=None)
```

### Examples

```python
>>> secrets.token_hex(8) # 'a60e010983495a8a'
>>> secrets.token_hex(16) # '565f6e6c8d22d8827ae92ead49d47e6a'
```