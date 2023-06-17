# ftplib.FTP.voidcmd()

Send a simple command string to the server and handle the response.

Return nothing if a response code corresponding to success (codes in the range 200–299) is received. Raise [`error_reply`](/modules/ftplib/error_reply.md) otherwise.

Raises an auditing event `ftplib.sendcmd` with arguments `self`, `cmd`.

### Syntax

```python
ftplib.FTP.voidcmd(cmd)
```