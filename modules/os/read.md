# os.read()

Read at most **n** bytes from file descriptor **fd**.

Return a bytestring containing the bytes read. If the end of the file referred to by **fd** has been reached, an empty bytes object is returned.

?> This function is intended for low-level I/O and must be applied to a file descriptor as returned by [`os.open()`](/modules/os/open.md) or [`pipe()`](/modules/os/pipe.md). To read a “file object” returned by the built-in function [`open()`](/built-in-functions/open.md) or by [`popen()`](/modules/os/popen.md) or [`fdopen()`](/modules/os/fdopen.md), or `sys.stdin`, use its `read()` or `readline()` methods.

### Syntax

```python
os.read(fd, n, /)
```