# os.dup()

> **Availability:** not WASI.

Return a duplicate of file descriptor **fd**. The new file descriptor is non-inheritable.

On Windows, when duplicating a standard stream (0: stdin, 1: stdout, 2: stderr), the new file descriptor is inheritable.

### Syntax

```python
os.dup(fd, /)
```