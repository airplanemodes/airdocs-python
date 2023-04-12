# os.writev()

> **Availability:** Unix.

Write the contents of **buffers** to file descriptor **fd**.

**buffers** must be a sequence of bytes-like objects. Buffers are processed in array order. Entire contents of the first buffer is written before proceeding to the second, and so on.

Returns the total number of bytes actually written.

The operating system may set a limit ([`sysconf()`](/modules/os/sysconf.md) value `'SC_IOV_MAX'`) on the number of buffers that can be used.

### Syntax

```python
os.writev(fd, buffers, /)
```