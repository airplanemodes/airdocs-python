# socketserver.BaseServer.serve_forever()

Handle requests until an explicit [`shutdown()`](/modules/socketserver/BaseServer/serve_forever.md) request. Poll for shutdown every **poll_interval** seconds. Ignores the [`timeout`](/modules/socketserver/BaseServer/timeout.md) attribute. It also calls [`service_actions()`](/modules/socketserver/BaseServer/service_actions.md), which may be used by a subclass or mixin to provide actions specific to a given service. For example, the `ForkingMixIn` class uses [`service_actions()`](/modules/socketserver/BaseServer/service_actions.md) to clean up zombie child processes.

### Syntax

```python
socketserver.BaseServer.serve_forever(poll_interval=0.5)
```
