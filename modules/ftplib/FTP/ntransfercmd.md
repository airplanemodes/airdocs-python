# ftplib.FTP.ntransfercmd()

Like [`transfercmd()`](/modules/ftplib/FTP/transfercmd.md), but returns a tuple of the data connection and the expected size of the data.

If the expected size could not be computed, `None` will be returned as the expected size. **cmd** and **rest** means the same thing as in [`transfercmd()`](/modules/ftplib/FTP/transfercmd.md).

### Syntax

```python
ftplib.FTP.ntransfercmd(cmd, rest=None)
```