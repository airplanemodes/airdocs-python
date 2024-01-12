# http.server.SimpleHTTPRequestHandler()

This class serves files from the directory **directory** and below, or the current directory if **directory** is not provided, directly mapping the directory structure to HTTP requests.

`SimpleHTTPRequestHandler` can also be subclassed to enhance behavior, such as using different index file names by overriding the class attribute `index_pages`.

### Syntax

```python
http.server.SimpleHTTPRequestHandler(request, client_address, server, directory=None)
```

### Examples

The [`SimpleHTTPRequestHandler`](/modules/http/server/SimpleHTTPRequestHandler.md) class can be used in the following manner in order to create a very basic webserver serving files relative to the current directory:

```python
import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
```