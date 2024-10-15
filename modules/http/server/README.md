# http.server

**HTTP servers.**

> **Availability:** not Emscripten, not WASI.  
> Source code: [`Lib/http/server.py`](https://github.com/python/cpython/tree/3.13/Lib/http/server.py)

This module defines classes for implementing HTTP servers.

!> `http.server` is not recommended for production. It only implements basic security checks.

One class, [`HTTPServer`](/modules/http/server/HTTPServer.md), is a [`socketserver.TCPServer`](/modules/socketserver/TCPServer.md) subclass. It creates and listens at the HTTP socket, dispatching the requests to a handler. Code to create and run the server looks like this:

```python
def run(server_class=HTTPServer, handler_class=BaseHTTPRequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()
```

`http.server` can be invoked directly using the [`-m`](/cli/Interface/-m.md) switch of the interpreter. This serves files relative to the current directory:

```shell
python -m http.server
```

The server listens to port 8000 by default. The default can be overridden by passing the desired port number as an argument:

```shell
python -m http.server 9000
```

By default, the server binds itself to all interfaces. The option `-b/--bind` specifies a specific address to which it should bind. Both IPv4 and IPv6 addresses are supported. For example, the following command causes the server to bind to localhost only:

```shell
python -m http.server --bind 127.0.0.1
```

By default, the server uses the current directory. The option `-d/--directory` specifies a directory to which it should serve the files. For example, the following command uses a specific directory:

```shell
python -m http.server --directory /tmp/
```

By default, the server is conformant to HTTP/1.0. The option `-p/--protocol` specifies the HTTP version to which the server is conformant. For example, the following command runs an HTTP/1.1 conformant server:

```shell
python -m http.server --protocol HTTP/1.1
```

[`CGIHTTPRequestHandler`](/modules/http/server/CGIHTTPRequestHandler/) can be enabled in the command line by passing the `--cgi` option:

```shell
python -m http.server --cgi
```

!> [`SimpleHTTPRequestHandler`](/modules/http/server/SimpleHTTPRequestHandler/) will follow symbolic links when handling requests, this makes it possible for files outside of the specified directory to be served.

!> Earlier versions of Python did not scrub control characters from the log messages emitted to `stderr` from `python -m http.server` or the default [`BaseHTTPRequestHandler`](/modules/http/server/BaseHTTPRequestHandler/) `.log_message` implementation. This could allow remote clients connecting to your server to send nefarious control codes to your terminal.