# ftplib.FTP.mlsd()

List a directory in a standardized format by using `MLSD` command ([**RFC 3659**](https://datatracker.ietf.org/doc/html/rfc3659.html)).

If **path** is omitted the current directory is assumed. **facts** is a list of strings representing the type of information desired (e.g. `["type", "size", "perm"]`). Return a generator object yielding a tuple of two elements for every file found in path. First element is the file name, the second one is a dictionary containing facts about the file name. Content of this dictionary might be limited by the **facts** argument but server is not guaranteed to return all requested facts.

### Syntax

```python
ftplib.FTP.mlsd(path='', facts=[])
```