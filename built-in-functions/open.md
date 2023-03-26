# open()
Open **file** and return a corresponding `file object`.

**file** is a `path-like object` giving the pathname (absolute or relative to the current working directory) of the file to be opened or an integer file descriptor of the file to be wrapped.

?> If a file descriptor is given, it is closed when the returned I/O object is closed unless **closefd** is set to `False`.

**mode** is an optional string that specifies the mode in which the file is opened. It defaults to `'r'` which means open for reading in text mode. In text mode, if **encoding** is not specified the encoding used is platform-dependent: `locale.getencoding()` is called to get the current locale encoding. 

?> For reading and writing raw bytes use binary mode and leave **encoding** unspecified.

The available modes are:
- `'r'` open for reading.
- `'w'` open for writing, truncating the file first.
- `'x'` open for exclusive creation, failing if the file already exists.
- `'a'` open for writing, appending to the end of file if it exists.
- `'b'` binary mode.
- `'t'` text mode.
- `'+'` open for updating (reading and writing).

### Syntax
```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

!> If the file cannot be opened, an `OSError` is raised.