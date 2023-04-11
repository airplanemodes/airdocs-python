# os.fsync()

> **Availability:** Unix, Windows.

Force write of file with filedescriptor **fd** to disk.

On Unix, this calls the native `fsync()` function. On Windows, the MS `_commit()` function.

If you’re starting with a buffered Python file object *f*, first do `f.flush()`, and then do `os.fsync(f.fileno())`, to ensure that all internal buffers associated with *f* are written to disk.

### Syntax

```python
os.fsync(fd)
```