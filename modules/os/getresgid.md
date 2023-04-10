# os.getresgid()

> **Availability:** Unix, not Emscripten, not WASI.

Return a tuple (rgid, egid, sgid) denoting the current process’s real, effective, and saved group ids.

### Syntax

```python
os.getresgid()
```