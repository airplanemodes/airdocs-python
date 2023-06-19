# ftplib.FTP.close()

Close the connection unilaterally.

This should not be applied to an already closed connection such as after a successful call to [`quit()`](/modules/ftplib/FTP/quit.md). After this call the [`FTP`](/modules/ftplib/FTP/) instance should not be used any more (after a call to `close()` or [`quit()`](/modules/ftplib/FTP/quit.md) you cannot reopen the connection by issuing another [`login()`](/modules/ftplib/FTP/login.md) method).

### Syntax

```python
ftplib.FTP.close()
```