# ftplib.FTP.retrbinary()

Retrieve a file in binary transfer mode.

**cmd** should be an appropriate RETR command: `'RETR filename'`. The **callback** function is called for each block of data received, with a single bytes argument giving the data block. The optional **blocksize** argument specifies the maximum chunk size to read on the low-level socket object created to do the actual transfer (which will also be the largest size of the data blocks passed to **callback**). A reasonable default is chosen. **rest** means the same thing as in the [`transfercmd()`](/modules/ftplib/FTP/transfercmd.md) method.

### Syntax

```python
ftplib.FTP.retrbinary(cmd, callback, blocksize=8192, rest=None)
```