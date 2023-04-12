# os.posix_fallocate()

> **Availability:** Unix, not Emscripten.

Ensures that enough disk space is allocated for the file specified by **fd** starting from **offset** and continuing for **len** bytes.

### Syntax

```python
os.posix_fallocate(fd, offset, len, /)
```