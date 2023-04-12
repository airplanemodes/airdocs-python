# os.set_blocking()

> **Availability:** Unix.

Set the blocking mode of the specified file descriptor. Set the `O_NONBLOCK` flag if blocking is `False`, clear the flag otherwise.

See also [`get_blocking()`](/modules/os/get_blocking.md) and [`socket.socket.setblocking()`](/modules/socket/socket.setblocking.md).

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

### Syntax

```python
os.set_blocking(fd, blocking, /)
```