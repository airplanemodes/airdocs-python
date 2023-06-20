# netrc.netrc()

A `netrc` instance or subclass instance encapsulates data from a netrc file. The initialization argument, if present, specifies the file to parse. If no argument is given, the file `.netrc` in the user’s home directory – as determined by [`os.path.expanduser()`](/modules/os/path/expanduser.md) – will be read. Otherwise, a [`FileNotFoundError`](/exceptions/FileNotFoundError.md) exception will be raised. Parse errors will raise [`NetrcParseError`](/modules/netrc/NetrcParseError.md) with diagnostic information including the file name, line number, and terminating token. If no argument is specified on a POSIX system, the presence of passwords in the `.netrc` file will raise a [`NetrcParseError`](/modules/netrc/NetrcParseError.md) if the file ownership or permissions are insecure (owned by a user other than the user running the process, or accessible for read or write by any other user). This implements security behavior equivalent to that of ftp and other programs that use `.netrc`.

### Syntax

```python
netrc.netrc()
netrc.netrc(file)
```