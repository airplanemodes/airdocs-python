# os.getresuid()

> **Availability:** Unix, not Emscripten, not WASI.

Return a tuple (ruid, euid, suid) denoting the current process’s real, effective, and saved user ids.

### Syntax

```python
os.getresuid()
```