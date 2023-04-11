# os.close()

Close file descriptor **fd**.

?> This function is intended for low-level I/O and must be applied to a file descriptor as returned by [`os.open()`](/modules/os/open.md) or [`pipe()`](/modules/os/pipe.md). To close a “file object” returned by the built-in function [`open()`](/built-in-functions/open.md) or by [`popen()`](/modules/os/popen.md) or [`fdopen()`](/modules/os/fdopen.md), use its `close()` method.

### Syntax

```python
os.close(fd)
```