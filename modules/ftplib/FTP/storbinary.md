# ftplib.FTP.storbinary()

Store a file in binary transfer mode.

**cmd** should be an appropriate `STOR` command: `"STOR filename"`. **fp** is a file object (opened in binary mode) which is read until EOF using its read() method in blocks of size **blocksize** to provide the data to be stored. The **blocksize** argument defaults to 8192. **callback** is an optional single parameter callable that is called on each block of data after it is sent. **rest** means the same thing as in the [`transfercmd()`](/modules/ftplib/FTP/transfercmd.md) method.

### Syntax

```python
ftplib.FTP.storbinary(cmd, fp, blocksize=8192, callback=None, rest=None)
```