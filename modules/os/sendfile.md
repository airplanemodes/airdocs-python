# os.sendfile()

> **Availability:** Unix, not Emscripten, not WASI.

Copy **count** bytes from file descriptor **in_fd** to file descriptor **out_fd** starting at **offset**. Return the number of bytes sent. When EOF is reached return 0.

The first function notation is supported by all platforms that define `sendfile()`.

On Linux, if **offset** is given as `None`, the bytes are read from the current position of **in_fd** and the position of **in_fd** is updated.

The second case may be used on macOS and FreeBSD where headers and trailers are arbitrary sequences of buffers that are written before and after the data from **in_fd** is written. It returns the same as the first case.

On macOS and FreeBSD, a value of 0 for **count** specifies to send until the end of **in_fd** is reached.

All platforms support sockets as **out_fd** file descriptor, and some platforms allow other types (e.g. regular file, pipe) as well.

Cross-platform applications should not use **headers**, **trailers** and **flags** arguments.

?> For a higher-level wrapper of `sendfile()`, see [`socket.socket.sendfile()`](/modules/socket/socket.sendfile.md).

### Syntax

```python
os.sendfile(out_fd, in_fd, offset, count)
os.sendfile(out_fd, in_fd, offset, count, headers=(), trailers=(), flags=0)
```