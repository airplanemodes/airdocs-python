# os.pwritev()

> **Availability:** Linux >= 2.6.30, FreeBSD >= 6.0, OpenBSD >= 2.7, AIX >= 7.1.

Write the **buffers** contents to file descriptor **fd** at a offset **offset**, leaving the file offset unchanged. **buffers** must be a sequence of bytes-like objects. Buffers are processed in array order. Entire contents of the first buffer is written before proceeding to the second, and so on.

The flags argument contains a bitwise OR of zero or more of the following flags:

- `RWF_DSYNC`
- `RWF_SYNC`
- `RWF_APPEND`

Return the total number of bytes actually written.

The operating system may set a limit ([`sysconf()`](/modules/os/sysconf.md) value `'SC_IOV_MAX'`) on the number of buffers that can be used.

Combine the functionality of [`os.writev()`](/modules/os/writev.md) and [`os.pwrite()`](/modules/os/pwrite.md).

Using flags requires Linux >= 4.6.

### Syntax

```python
os.pwritev(fd, buffers, offset, flags=0, /)
```