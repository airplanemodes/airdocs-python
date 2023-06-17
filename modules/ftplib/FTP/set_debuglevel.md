# ftplib.FTP.set_debuglevel()

Set the instance’s debugging level.

This controls the amount of debugging output printed. The default, `0`, produces no debugging output. A value of `1` produces a moderate amount of debugging output, generally a single line per request. A value of `2` or higher produces the maximum amount of debugging output, logging each line sent and received on the control connection.

### Syntax

```python
ftplib.FTP.set_debuglevel(level)
```