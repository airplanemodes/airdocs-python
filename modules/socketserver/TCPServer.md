# socketserver.TCPServer()

This uses the internet TCP protocol, which provides for continuous streams of data between the client and server. If **bind_and_activate** is true, the constructor automatically attempts to invoke `server_bind()` and `server_activate()`. The other parameters are passed to the `BaseServer` base class.

### Syntax

```python
socketserver.TCPServer(server_address, RequestHandlerClass, bind_and_activate=True)
```