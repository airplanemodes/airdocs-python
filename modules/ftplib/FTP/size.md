# ftplib.FTP.size()

Request the size of the file named **filename** on the server.

On success, the size of the file is returned as an integer, otherwise `None` is returned. Note that the `SIZE` command is not standardized, but is supported by many common server implementations.

### Syntax

```python
ftplib.FTP.size(filename)
```