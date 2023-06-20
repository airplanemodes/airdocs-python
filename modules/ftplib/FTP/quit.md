# ftplib.FTP.quit()

Send a `QUIT` command to the server and close the connection. This is the “polite” way to close a connection, but it may raise an exception if the server responds with an error to the `QUIT` command. This implies a call to the [`close()`](/modules/ftplib/FTP/close.md) method which renders the [`FTP`](/modules/ftplib/FTP/) instance useless for subsequent calls.

### Syntax

```python
ftplib.FTP.quit()
```