# socketserver

**A framework for network servers.**

> Source code: [`Lib/socketserver.py`](https://github.com/python/cpython/tree/3.11/Lib/socketserver.py)

The `socketserver` module simplifies the task of writing network servers.

There are four basic concrete server classes:

## socketserver.TCPServer()
This uses the internet TCP protocol, which provides for continuous streams of data between the client and server. If **bind_and_activate** is true, the constructor automatically attempts to invoke `server_bind()` and `server_activate()`. The other parameters are passed to the `BaseServer` base class.

### Syntax
```python
socketserver.TCPServer(server_address, RequestHandlerClass, bind_and_activate=True)
```

## socketserver.UDPServer()
This uses datagrams, which are discrete packets of information that may arrive out of order or be lost while in transit. The parameters are the same as for `TCPServer`.

### Syntax
```python
socketserver.UDPServer(server_address, RequestHandlerClass, bind_and_activate=True)
```

## socketserver.UnixStreamServer()

### Syntax
```python
socketserver.UnixStreamServer(server_address, RequestHandlerClass, bind_and_activate=True)
```

## socketserver.UnixDatagramServer()

### Syntax
```python
socketserver.UnixDatagramServer(server_address, RequestHandlerClass, bind_and_activate=True)
```