# ftplib.FTP.storlines()

Store a file in line mode.

**cmd** should be an appropriate `STOR` command (see [`storbinary()`](/modules/ftplib/FTP/storbinary.md)). Lines are read until EOF from the file object **fp** (opened in binary mode) using its [`readline()`](/modules/io/IOBase/readline.md) method to provide the data to be stored. **callback** is an optional single parameter callable that is called on each line after it is sent.

### Syntax

```python
ftplib.FTP.storlines(cmd, fp, callback=None)
```