# ftplib.FTP.retrlines()

Retrieve a file or directory listing in the encoding specified by the **encoding** parameter at initialization. **cmd** should be an appropriate `RETR` command (see [`retrbinary()`](/modules/ftplib/FTP/retrbinary.md)) or a command such as `LIST` or `NLST` (usually just the string `'LIST'`). `LIST` retrieves a list of files and information about those files. `NLST` retrieves a list of file names. The **callback** function is called for each line with a string argument containing the line with the trailing CRLF stripped. The default **callback** prints the line to `sys.stdout`.

### Syntax

```python
ftplib.FTP.retrlines(cmd, callback=None)
```