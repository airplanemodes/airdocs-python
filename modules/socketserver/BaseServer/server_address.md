# socketserver.BaseServer.server_address

The address on which the server is listening.

?> The format of addresses varies depending on the protocol family. See the documentation for the [`socket`](/modules/socket/) module for details. For internet protocols, this is a tuple containing a string giving the address, and an integer port number: `('127.0.0.1', 80)`, for example.

### Syntax

```python
socketserver.BaseServer.server_address
```