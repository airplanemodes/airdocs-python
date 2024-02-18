# socketserver.BaseServer.handle_timeout()

This function is called when the [`timeout`](/modules/socketserver/BaseServer/timeout.md) attribute has been set to a value other than `None` and the timeout period has passed with no requests being received.

The default action for forking servers is to collect the status of any child processes that have exited, while in threading servers this method does nothing.

### Syntax

```python
socketserver.BaseServer.handle_timeout()
```
