# BaseHTTPRequestHandler()

This class is used to handle the HTTP requests that arrive at the server. By itself, it cannot respond to any actual HTTP requests. It must be subclassed to handle each request method (e.g. GET or POST). `BaseHTTPRequestHandler` provides a number of class and instance variables, and methods for use by subclasses.

The handler will parse the request and the headers, then call a method specific to the request type. The method name is constructed from the request. For example, for the request method `SPAM`, the `do_SPAM()` method will be called with no arguments. All of the relevant information is stored in instance variables of the handler. Subclasses should not need to override or extend the `__init__()` method.

### Syntax

```python
http.server.BaseHTTPRequestHandler(request, client_address, server)
```