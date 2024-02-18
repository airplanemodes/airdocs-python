# socketserver.BaseServer.shutdown()

Tell the [`serve_forever()`](/modules/socketserver/BaseServer/serve_forever.md) loop to stop and wait until it does.

`shutdown()` must be called while [`serve_forever()`](/modules/socketserver/BaseServer/serve_forever.md) is running in a different thread otherwise it will deadlock.

### Syntax

```python
socketserver.BaseServer.shutdown()
```
