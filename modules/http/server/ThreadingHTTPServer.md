# http.server.ThreadingHTTPServer()

This class is identical to `HTTPServer` but uses threads to handle requests by using the `ThreadingMixIn`. This is useful to handle web browsers pre-opening sockets, on which `HTTPServer` would wait indefinitely.

### Syntax

```python
http.server.ThreadingHTTPServer(server_address, RequestHandlerClass)
```