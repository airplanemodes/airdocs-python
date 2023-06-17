# ftplib.FTP()

Return a new instance of the `FTP` class. When **host** is given, the method call `connect(host)` is made. When **user** is given, additionally the method call `login(user, passwd, acct)` is made (where **passwd** and **acct** default to the empty string when not given). The optional **timeout** parameter specifies a timeout in seconds for blocking operations like the connection attempt (if is not specified, the global default timeout setting will be used). **source_address** is a 2-tuple `(host, port)` for the socket to bind to as its source address before connecting. The **encoding** parameter specifies the encoding for directories and filenames.

### Syntax

```python
ftplib.FTP(host='', user='', passwd='', acct='', timeout=None, source_address=None, *, encoding='utf-8')
```

### Examples

The `FTP` class supports the [`with`](/statements/with.md) statement, e.g.:

```python
from ftplib import FTP
>>> with FTP("ftp1.at.proftpd.org") as ftp:
...     ftp.login()
...     ftp.dir()
... 
# '230 Anonymous login ok, restrictions apply.'
# dr-xr-xr-x   9 ftp      ftp           154 May  6 10:43 .
# dr-xr-xr-x   9 ftp      ftp           154 May  6 10:43 ..
# dr-xr-xr-x   5 ftp      ftp          4096 May  6 10:43 CentOS
# dr-xr-xr-x   3 ftp      ftp            18 Jul 10  2008 Fedora
```