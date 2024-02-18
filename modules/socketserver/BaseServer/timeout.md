# socketserver.BaseServer.timeout

Timeout duration, measured in seconds, or `None` if no timeout is desired.

If [`handle_request()`](/modules/socketserver/BaseServer/handle_request.md) receives no incoming requests within the timeout period, the [`handle_timeout()`](/modules/socketserver/BaseServer/handle_timeout.md) method is called.

### Syntax

```python
socketserver.BaseServer.timeout
```
