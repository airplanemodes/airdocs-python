# os.preadv()

> **Availability:** Linux >= 2.6.30, FreeBSD >= 6.0, OpenBSD >= 2.7, AIX >= 7.1.

Read from a file descriptor **fd** at a position of **offset** into mutable bytes-like objects **buffers**, leaving the file offset unchanged. Transfer data into each buffer until it is full and then move on to the next buffer in the sequence to hold the rest of the data.

The flags argument contains a bitwise OR of zero or more of the following flags:

- `RWF_HIPRI`
- `RWF_NOWAIT`

Return the total number of bytes actually read which can be less than the total capacity of all the objects.

The operating system may set a limit ([`sysconf()`](/modules/os/sysconf.md) value `'SC_IOV_MAX'`) on the number of buffers that can be used.

Combine the functionality of [`os.readv()`](/modules/os/readv.md) and [`os.pread()`](/modules/os/pread.md).

Using flags requires Linux >= 4.6.

### Syntax

```python
os.preadv(fd, buffers, offset, flags=0, /)
```