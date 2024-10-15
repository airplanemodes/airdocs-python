# ftplib

**FTP protocol client.**

> Source code: [`Lib/ftplib.py`](https://github.com/python/cpython/tree/3.13/Lib/ftplib.py)

This module defines the class [`FTP`](/modules/ftplib/FTP/) and a few related items. The [`FTP`](/modules/ftplib/FTP/) class implements the client side of the FTP protocol. You can use this to write Python programs that perform a variety of automated FTP jobs, such as mirroring other FTP servers. It is also used by the module [`urllib.request`](/modules/urllib/request.md) to handle URLs that use FTP. For more information on FTP (File Transfer Protocol), see internet [**RFC 959**](https://datatracker.ietf.org/doc/html/rfc959.html).

The default encoding is UTF-8, following [**RFC 2640**](https://datatracker.ietf.org/doc/html/rfc2640.html).

> **Availability:** not Emscripten, not WASI.

This module does not work or is not available on WebAssembly platforms `wasm32-emscripten` and `wasm32-wasi`.

Here’s a sample session using the `ftplib` module:

```python
>>> from ftplib import FTP
>>> ftp = FTP('ftp.us.debian.org')        # connect to host, default port
>>> ftp.login()                           # user anonymous, passwd anonymous@
# '230 Login successful.'
>>> ftp.cwd('debian')                     # change into "debian" directory
# '250 Directory successfully changed.'
>>> ftp.retrlines('LIST')                 # list directory contents
# -rw-rw-r--    1 1176     1176         1063 Jun 15 10:18 README
# ...
# drwxr-sr-x    5 1176     1176         4096 Dec 19  2000 pool
# drwxr-sr-x    4 1176     1176         4096 Nov 17  2008 project
# drwxr-xr-x    3 1176     1176         4096 Oct 10  2012 tools
# '226 Directory send OK.'
>>> with open('README', 'wb') as fp:
...     ftp.retrbinary('RETR README', fp.write)
# '226 Transfer complete.'
>>> ftp.quit()
# '221 Goodbye.'
```