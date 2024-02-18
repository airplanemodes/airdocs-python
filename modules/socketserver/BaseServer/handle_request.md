# socketserver.BaseServer.handle_request()

Process a single request.

This function calls the following methods in order:

* [`get_request()`](/modules/socketserver/BaseServer/get_request.md)
* [`verify_request()`](/modules/socketserver/BaseServer/verify_request.md)
* [`process_request()`](/modules/socketserver/BaseServer/process_request.md)

If the user-provided [`handle()`](/modules/socketserver/BaseRequestHandler/handle.md) method of the handler class raises an exception, the server’s [`handle_error()`](/modules/socketserver/BaseServer/handle_error.md) method will be called.

If no request is received within [`timeout`](/modules/socketserver/BaseServer/timeout.md) seconds, [`handle_timeout()`](/modules/socketserver/BaseServer/handle_timeout.md) will be called and `handle_request()` will return.

### Syntax

```python
socketserver.BaseServer.handle_request()
```
