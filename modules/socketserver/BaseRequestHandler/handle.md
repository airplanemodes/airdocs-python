# socketserver.BaseRequestHandler.handle()

This function must do all the work required to service a request. The default implementation does nothing. Several instance attributes are available to it. The request is available as [`request`](/modules/socketserver/BaseRequestHandler/request.md). The client address as [`client_address`](/modules/socketserver/BaseRequestHandler/client_address.md) and the server instance as [`server`](/modules/socketserver/BaseRequestHandler/server.md), in case it needs access to per-server information.

The type of [`request`](/modules/socketserver/BaseRequestHandler/request.md) is different for datagram or stream services. For stream services, [`request`](/modules/socketserver/BaseRequestHandler/request.md) is a socket object. For datagram services, [`request`](/modules/socketserver/BaseRequestHandler/request.md) is a pair of string and socket.

### Syntax

```python
socketserver.BaseRequestHandler.
```
