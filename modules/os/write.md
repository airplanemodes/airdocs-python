# os.write()

Write the bytestring in **str** to file descriptor **fd**.

Return the number of bytes actually written.

?> This function is intended for low-level I/O and must be applied to a file descriptor as returned by [`os.open()`](/modules/os/open.md) or [`pipe()`](/modules/os/pipe.md). To write a “file object” returned by the built-in function [`open()`](/built-in-functions/open.md) or by [`popen()`](/modules/os/popen.md) or [`fdopen()`](/modules/os/fdopen.md), or `sys.stdout` or `sys.stderr`, use its `write()` method.

### Syntax

```python
os.write(fd, str, /)
```