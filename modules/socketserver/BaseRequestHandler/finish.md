# socketserver.BaseRequestHandler.finish()

Called after the [`handle()`](/modules/socketserver/BaseRequestHandler/handle.md) method to perform any clean-up actions required. The default implementation does nothing. If [`setup()`](/modules/socketserver/BaseRequestHandler/setup.md) raises an exception, this function will not be called.

### Syntax

```python
socketserver.BaseRequestHandler.finish()
```
