# os.posix_fadvise()

> **Availability:** Unix.

Announces an intention to access data in a specific pattern thus allowing the kernel to make optimizations. The advice applies to the region of the file specified by **fd** starting at **offset** and continuing for **len** bytes. **advice** is one of `POSIX_FADV_NORMAL`, `POSIX_FADV_SEQUENTIAL`, `POSIX_FADV_RANDOM`, `POSIX_FADV_NOREUSE`, `POSIX_FADV_WILLNEED` or `POSIX_FADV_DONTNEED`.

### Syntax

```python
os.posix_fadvise(fd, offset, len, advice, /)
```