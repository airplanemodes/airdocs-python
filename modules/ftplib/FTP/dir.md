# ftplib.FTP.dir()

Produce a directory listing as returned by the `LIST` command, printing it to standard output. The optional **argument** is a directory to list (default is the current server directory). Multiple arguments can be used to pass non-standard options to the `LIST` command. If the last argument is a function, it is used as a **callback** function as for [`retrlines()`](/modules/ftplib/FTP/retrlines.md). The default prints to `sys.stdout`. This method returns `None`.

?> If your server supports the command, [`mlsd()`](/modules/ftplib/FTP/mlsd.md) offers a better API.

### Syntax

```python
ftplib.FTP.dir(argument)
```