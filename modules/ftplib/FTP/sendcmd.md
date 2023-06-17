# ftplib.FTP.sendcmd()

Send a simple command string to the server and return the response string.

Raises an auditing event `ftplib.sendcmd` with arguments `self`, `cmd`.

### Syntax

```python
ftplib.FTP.sendcmd(cmd)
```