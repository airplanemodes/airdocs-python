# socketserver.UDPServer()

This uses datagrams, which are discrete packets of information that may arrive out of order or be lost while in transit. The parameters are the same as for `TCPServer`.

### Syntax

```python
socketserver.UDPServer(server_address, RequestHandlerClass, bind_and_activate=True)
```