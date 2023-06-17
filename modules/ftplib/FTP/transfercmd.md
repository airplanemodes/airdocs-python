# ftplib.FTP.transfercmd()

Initiate a transfer over the data connection.

If the transfer is active, send an `EPRT` or `PORT` command and the transfer command specified by **cmd**, and accept the connection. If the server is passive, send an `EPSV` or `PASV` command, connect to it, and start the transfer command. Either way, return the socket for the connection.

If optional **rest** is given, a `REST` command is sent to the server, passing **rest** as an argument. **rest** is usually a byte offset into the requested file, telling the server to restart sending the file’s bytes at the requested offset, skipping over the initial bytes. Note however that the [`transfercmd()`](/modules/ftplib/FTP/transfercmd.md) method converts rest to a string with the encoding parameter specified at initialization, but no check is performed on the string’s contents. If the server does not recognize the REST command, an [`error_reply`](/modules/ftplib/error_reply.md) exception will be raised. If this happens, simply call [`transfercmd()`](/modules/ftplib/FTP/transfercmd.md) without a **rest** argument.

### Syntax

```python
ftplib.FTP.transfercmd(cmd, rest=None)
```