# socketserver.BaseServer.process_request()

Calls [`finish_request()`](/modules/socketserver/BaseServer/finish_request.md) to create an instance of the [`RequestHandlerClass`](/modules/socketserver/BaseServer/RequestHandlerClass.md).

If desired, this function can create a new process or thread to handle the request. The [`ForkingMixIn`](/modules/socketserver/ForkingMixIn.md) and [`ThreadingMixIn`](/modules/socketserver/ThreadingMixIn.md) classes do this.

### Syntax

```python
socketserver.BaseServer.process_request(request, client_address)
```
