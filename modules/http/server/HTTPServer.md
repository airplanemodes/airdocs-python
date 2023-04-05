# HTTPServer()

This class builds on the [`TCPServer`](/modules/socketserver?id=socketservertcpserver) class by storing the server address as instance variables named `server_name` and `server_port`. The server is accessible by the handler, typically through the handler’s server instance variable.

### Syntax

```python
http.server.HTTPServer(server_address, RequestHandlerClass)
```