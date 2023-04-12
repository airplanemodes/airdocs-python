# os.readv()

> **Availability:** Unix.

Read from a file descriptor **fd** into a number of mutable bytes-like objects **buffers**. Transfer data into each buffer until it is full and then move on to the next buffer in the sequence to hold the rest of the data.

Return the total number of bytes actually read which can be less than the total capacity of all the objects.

The operating system may set a limit ([`sysconf()`](/modules/os/sysconf.md) value `'SC_IOV_MAX'`) on the number of buffers that can be used.

### Syntax

```python
os.readv(fd, buffers, /)
```