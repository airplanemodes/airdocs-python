# bytes.removeprefix()

If the binary data starts with the **prefix** string, return `bytes[len(prefix):]`. Otherwise, return a copy of the original binary data.

The **prefix** may be any bytes-like object.

### Syntax

```python
bytes.removeprefix(prefix, /)
```

### Example

```python
>>> b'TestHook'.removeprefix(b'Test')      # b'Hook'
>>> b'BaseTestCase'.removeprefix(b'Test')  # b'BaseTestCase'
```
