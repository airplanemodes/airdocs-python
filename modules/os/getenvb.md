# os.getenvb()

> **Availability:** Unix.

Return the value of the environment variable **key** as bytes if it exists, or **default** if it doesn’t.

**key** must be bytes. Note that since `getenvb()` uses `os.environb`, the mapping of `getenvb()` is similarly also captured on import, and the function may not reflect future environment changes.

`getenvb()` is only available if `supports_bytes_environ` is `True`.

### Syntax

```python
os.getenvb(key, default=None)
```

### Examples

```python
>>> x = bytes("SHELL", encoding="UTF-8")
>>> os.getenvb(x) # b'/bin/zsh'
```