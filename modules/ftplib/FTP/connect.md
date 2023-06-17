# ftplib.FTP.connect()

Connect to the given host and port.

The default port number is `21`, as specified by the FTP protocol specification. It is rarely needed to specify a different port number. This function should be called only once for each instance. It should not be called at all if a host was given when the instance was created. All other methods can only be used after a connection has been made. The optional **timeout** parameter specifies a timeout in seconds for the connection attempt. If no **timeout** is passed, the global default timeout setting will be used. **source_address** is a 2-tuple `(host, port)` for the socket to bind to as its source address before connecting.

Raises an auditing event `ftplib.connect` with arguments `self`, `host`, `port`.

### Syntax

```python
ftplib.FTP.connect(host='', port=0, timeout=None, source_address=None)
```