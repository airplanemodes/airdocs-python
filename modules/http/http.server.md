# http.server

**HTTP servers.**

> Source code: [`Lib/http/server.py`](https://github.com/python/cpython/tree/3.11/Lib/http/server.py)

This module defines classes for implementing HTTP servers.

## HTTPServer()
This class builds on the [`TCPServer`](/modules/socketserver?id=socketservertcpserver) class by storing the server address as instance variables named `server_name` and `server_port`. The server is accessible by the handler, typically through the handler’s server instance variable.

### Syntax
```python
http.server.HTTPServer(server_address, RequestHandlerClass)
```

## ThreadingHTTPServer()
This class is identical to `HTTPServer` but uses threads to handle requests by using the `ThreadingMixIn`. This is useful to handle web browsers pre-opening sockets, on which `HTTPServer` would wait indefinitely.

### Syntax
```python
http.server.ThreadingHTTPServer(server_address, RequestHandlerClass)
```

---

The `HTTPServer` and `ThreadingHTTPServer` must be given a `RequestHandlerClass` on instantiation, of which this module provides three different variants:

## BaseHTTPRequestHandler()
This class is used to handle the HTTP requests that arrive at the server. By itself, it cannot respond to any actual HTTP requests. It must be subclassed to handle each request method (e.g. GET or POST). `BaseHTTPRequestHandler` provides a number of class and instance variables, and methods for use by subclasses.

The handler will parse the request and the headers, then call a method specific to the request type. The method name is constructed from the request. For example, for the request method `SPAM`, the `do_SPAM()` method will be called with no arguments. All of the relevant information is stored in instance variables of the handler. Subclasses should not need to override or extend the `__init__()` method.

### Syntax
```python
http.server.BaseHTTPRequestHandler(request, client_address, server)
```