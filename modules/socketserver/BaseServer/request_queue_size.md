# socketserver.BaseServer.request_queue_size

The size of the request queue.

If it takes a long time to process a single request, any requests that arrive while the server is busy are placed into a queue, up to `request_queue_size` requests. Once the queue is full, further requests from clients will get a “Connection denied” error.

The default value is usually 5, but this can be overridden by subclasses.

### Syntax

```python
socketserver.BaseServer.request_queue_size
```
