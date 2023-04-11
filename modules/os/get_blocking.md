# os.get_blocking()

> **Availability:** Unix.

Get the blocking mode of the file descriptor: `False` if the `O_NONBLOCK` flag is set, `True` if the flag is cleared.

See also [`set_blocking()`](/modules/os/set_blocking.md) and [`socket.socket.setblocking()`](/modules/socket/socket.setblocking.md).

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

### Syntax

```python
os.get_blocking(fd, /)
```