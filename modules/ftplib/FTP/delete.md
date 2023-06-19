# ftplib.FTP.delete()

Remove the file named **filename** from the server.

If successful, returns the text of the response, otherwise raises [`error_perm`](/modules/ftplib/error_perm.md) on permission errors or [`error_reply`](/modules/ftplib/error_reply.md) on other errors.

### Syntax

```python
ftplib.FTP.delete(filename)
```