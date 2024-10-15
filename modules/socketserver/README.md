# socketserver

**A framework for network servers.**

> **Availability:** not Emscripten, not WASI.  
> Source code: [`Lib/socketserver.py`](https://github.com/python/cpython/tree/3.13/Lib/socketserver.py)

The `socketserver` module simplifies the task of writing network servers.

There are four basic concrete server classes:

* [`TCPServer()`](/modules/socketserver/TCPServer.md)
* [`UDPServer()`](/modules/socketserver/UDPServer.md)
* [`UnixDatagramServer()`](/modules/socketserver/UnixDatagramServer.md)
* [`UnixStreamServer()`](/modules/socketserver/UnixStreamServer.md)

These four classes process requests *synchronously*. Each request must be completed before the next request can be started. This isn’t suitable if each request takes a long time to complete, because it requires a lot of computation, or because it returns a lot of data which the client is slow to process. The solution is to create a separate process or thread to handle each request. The [`ForkingMixIn`](/modules/socketserver/ForkingMixIn.md) and [`ThreadingMixIn`](/modules/socketserver/ThreadingMixIn.md) mix-in classes can be used to support asynchronous behaviour.

Creating a server requires several steps:

1. Create a request handler class by subclassing the [`BaseRequestHandler`](/modules/socketserver/BaseRequestHandler/) class and overriding its [`handle()`](/modules/socketserver/BaseRequestHandler/handle.md) method. This method will process incoming requests.
2. Instantiate one of the server classes, passing it the server’s address and the request handler class. It is recommended to use the server in a [`with`](/statements/with.md) statement.
3. Call the [`handle_request()`](/modules/socketserver/BaseServer/handle_request.md) or [`serve_forever()`](/modules/socketserver/BaseServer/serve_forever.md) method of the server object to process one or many requests.
4. Call [`server_close()`](/modules/socketserver/BaseServer/server_close.md) to close the socket (unless you used a [`with`](/statements/with.md) statement).

When inheriting from [`ThreadingMixIn`](/modules/socketserver/ThreadingMixIn.md) for threaded connection behavior, you should explicitly declare how you want your threads to behave on an abrupt shutdown. The [`ThreadingMixIn`](/modules/socketserver/ThreadingMixIn.md) class defines an attribute **daemon_threads**, which indicates whether or not the server should wait for thread termination. You should set the flag explicitly if you would like threads to behave autonomously. The default is `False`, meaning that Python will not exit until all threads created by [`ThreadingMixIn`](/modules/socketserver/ThreadingMixIn.md) have exited.

Server classes have the same external methods and attributes, no matter what network protocol they use.

There are five classes in an inheritance diagram, four of which represent synchronous servers of four types:

```
+------------+
| BaseServer |
+------------+
      |
      v
+-----------+        +------------------+
| TCPServer |------->| UnixStreamServer |
+-----------+        +------------------+
      |
      v
+-----------+        +--------------------+
| UDPServer |------->| UnixDatagramServer |
+-----------+        +--------------------+
```

Note that [`UnixDatagramServer`](/modules/socketserver/UnixDatagramServer.md) derives from [`UDPServer`](/modules/socketserver/UDPServer.md), not from [`UnixStreamServer`](/modules/socketserver/UnixStreamServer.md) — the only difference between an IP and a Unix server is the address family.
