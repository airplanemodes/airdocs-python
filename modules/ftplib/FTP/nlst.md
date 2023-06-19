# ftplib.FTP.nlst()

Return a list of file names as returned by the `NLST` command.

The optional **argument** is a directory to list (default is the current server directory). Multiple arguments can be used to pass non-standard options to the `NLST` command.

?> If your server supports the command, [`mlsd()`](/modules/ftplib/FTP/mlsd.md) offers a better API.

### Syntax

```python
ftplib.FTP.nlst(argument)
```