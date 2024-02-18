# socketserver.BaseServer.finish_request()

Actually processes the request by instantiating [`RequestHandlerClass`](/modules/socketserver/BaseServer/RequestHandlerClass.md) and calling its [`handle()`](/modules/socketserver/BaseRequestHandler/handle.md) method.

### Syntax

```python
socketserver.BaseServer.finish_request(request, client_address)
```
