# socketserver.BaseServer.server_activate()

Called by the server’s constructor to activate the server.

The default behavior for a TCP server just invokes [`listen()`](/modules/socket/listen.md) on the server’s socket.

May be overridden.

### Syntax

```python
socketserver.BaseServer.server_activate()
```
