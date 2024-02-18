# socketserver.BaseServer.handle_error()

This function is called if the [`handle()`](/modules/socketserver/BaseRequestHandler/handle.md) method of a [`RequestHandlerClass`](/modules/socketserver/BaseServer/RequestHandlerClass.md) instance raises an exception.

The default action is to print the traceback to `stderr` and continue handling further requests.

### Syntax

```python
socketserver.BaseServer.handle_error(request, client_address)
```
