# socketserver.BaseServer.service_actions()

This is called in the [`serve_forever()`](/modules/socketserver/BaseServer/serve_forever.md) loop. This method can be overridden by subclasses or mixin classes to perform actions specific to a given service, such as cleanup actions.

### Syntax

```python
socketserver.BaseServer.service_actions()
```
