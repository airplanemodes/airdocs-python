# secrets.token_urlsafe()

Return a random URL-safe text string, containing **nbytes** random bytes.

The text is Base64 encoded, so on average each byte results in approximately 1.3 characters.

If **nbytes** is `None` or not supplied, a reasonable default is used.

### Syntax

```python
secrets.token_urlsafe()
secrets.token_urlsafe(nbytes=None)
```

### Examples

```python
>>> secrets.token_urlsafe(10) # '86LwVGVQExOZAw'
>>> secrets.token_urlsafe(16) # '3aG-d-Gwc-SQwZZCVNZRbQ'
```