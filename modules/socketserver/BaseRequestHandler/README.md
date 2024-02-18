# socketserver.BaseRequestHandler

This is the superclass of all request handler objects. It defines the interface, given below. A concrete request handler subclass must define a new [`handle()`](/modules/socketserver/BaseRequestHandler/handle.md) method, and can override any of the other methods. A new instance of the subclass is created for each request.

### Syntax

```python
socketserver.BaseRequestHandler
```
