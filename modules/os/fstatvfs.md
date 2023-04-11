# os.fstatvfs()

> **Availability:** Unix.

Return information about the filesystem containing the file associated with file descriptor **fd**, like [`statvfs()`](/modules/os/statvfs.md). As of Python 3.3, this is equivalent to `os.statvfs(fd)`.

### Syntax

```python
os.fstatvfs(fd, /)
```