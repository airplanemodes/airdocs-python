# socketserver.BaseServer.verify_request()

Must return a Boolean value. If the value is `True`, the request will be processed, and if it’s `False`, the request will be denied. This function can be overridden to implement access controls for a server. The default implementation always returns `True`.

### Syntax

```python
socketserver.BaseServer.verify_request(request, client_address)
```
