# os.getpgid()

> **Availability:** Unix, not Emscripten, not WASI.

Return the process group id of the process with process id **pid**.

If **pid** is 0, the process group id of the current process is returned.

### Syntax

```python
os.getpgid(pid)
```

### Examples

```python
os.getpgid(0) # 1837
```