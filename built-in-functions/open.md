# open()

Open **file** and return a corresponding `file object`.

**file** is a `path-like object` giving the pathname (absolute or relative to the current working directory) of the file to be opened or an integer file descriptor of the file to be wrapped.

?> If a file descriptor is given, it is closed when the returned I/O object is closed unless **closefd** is set to `False`.

**mode** is an optional string that specifies the mode in which the file is opened. In text mode, if **encoding** is not specified the encoding used is platform-dependent: `locale.getencoding()` is called to get the current locale encoding. 

?> For reading and writing raw bytes use binary mode and leave **encoding** unspecified.

The available modes are:
- `'r'` open for reading.
- `'w'` open for writing, truncating the file first.
- `'x'` open for exclusive creation, failing if the file already exists.
- `'a'` open for writing, appending to the end of file if it exists.
- `'b'` binary mode.
- `'t'` text mode.
- `'+'` open for updating (reading and writing).

The default mode is `'r'` (which means open for reading in text mode, a synonym of `'rt'`). Modes `'w+'` and `'w+b'` open and truncate the file. Modes `'r+'` and `'r+b'` open the file with no truncation.

?> As mentioned in the [`io`](/modules/io.md), Python distinguishes between binary and text I/O. Files opened in binary mode (including `'b'` in the **mode** argument) return contents as `bytes` objects without any decoding. In text mode (the default, or when `'t'` is included in the **mode** argument), the contents of the file are returned as `str`, the bytes having been first decoded using a platform-dependent encoding or using the specified **encoding** if given.

?> Python doesn’t depend on the underlying operating system’s notion of text files. All the processing is done by Python itself, and is therefore platform-independent.

**buffering** is an optional integer used to set the buffering policy. Pass 0 to switch buffering off (only allowed in binary mode), 1 to select line buffering (only usable in text mode), and an integer > 1 to indicate the size in bytes of a fixed-size chunk buffer. Note that specifying a buffer size this way applies for binary buffered I/O, but `TextIOWrapper` (i.e., files opened with `mode='r+'`) would have another buffering. To disable buffering in `TextIOWrapper`, consider using the `write_through` flag for `io.TextIOWrapper.reconfigure()`. When no **buffering** argument is given, the default buffering policy works as follows:
- Binary files are buffered in fixed-size chunks. The size of the buffer is chosen using a heuristic trying to determine the underlying device’s “block size” and falling back on `io.DEFAULT_BUFFER_SIZE`. On many systems, the buffer will typically be 4096 or 8192 bytes long.
- “Interactive” text files (files for which `isatty()` returns `True`) use line buffering. Other text files use the policy described above for binary files.

**encoding** is the name of the encoding used to decode or encode the file. This should only be used in text mode. The default encoding is platform dependent (whatever `locale.getencoding()` returns), but any text encoding supported by Python can be used.

?> See the [`codecs`](/modules/codecs.md) module for the list of supported encodings.

**errors** is an optional string that specifies how encoding and decoding errors are to be handled—this cannot be used in binary mode. A variety of standard error handlers are available (listed under [Error handlers](/modules/codecs.md)), though any error handling name that has been registered with `codecs.register_error()` is also valid. The standard names include:
- `'strict'` to raise a [`ValueError`](/exceptions/ValueError.md) exception if there is an encoding error. The default value of `None` has the same effect.
- `'ignore'` ignores errors. Note that ignoring encoding errors can lead to data loss.
- `'replace'` causes a replacement marker (such as `'?'`) to be inserted where there is malformed data.
- `'surrogateescape'` will represent any incorrect bytes as low surrogate code units ranging from U+DC80 to U+DCFF. These surrogate code units will then be turned back into the same bytes when the `surrogateescape` error handler is used when writing data. This is useful for processing files in an unknown encoding.
- `'xmlcharrefreplace'` is only supported when writing to a file. Characters not supported by the encoding are replaced with the appropriate XML character reference `&#nnn;`.
- `'backslashreplace'` replaces malformed data by Python’s backslashed escape sequences.
- `'namereplace'` (also only supported when writing) replaces unsupported characters with `\N{...}` escape sequences.

**newline** determines how to parse newline characters from the stream. It can be `None`, `''`, `'\n'`, `'\r'`, and `'\r\n'`. It works as follows:
- When reading input from the stream, if **newline** is `None`, universal newlines mode is enabled. Lines in the input can end in `'\n'`, `'\r'`, or `'\r\n'`, and these are translated into `'\n'` before being returned to the caller. If it is `''`, universal newlines mode is enabled, but line endings are returned to the caller untranslated. If it has any of the other legal values, input lines are only terminated by the given string, and the line ending is returned to the caller untranslated.
- When writing output to the stream, if **newline** is `None`, any `'\n'` characters written are translated to the system default line separator, `os.linesep`. If **newline** is `''` or `'\n'`, no translation takes place. If **newline** is any of the other legal values, any `'\n'` characters written are translated to the given string.

If **closefd** is `False` and a file descriptor rather than a filename was given, the underlying file descriptor will be kept open when the file is closed. If a filename is given **closefd** must be `True` (the default). Otherwise, an error will be raised.

A custom opener can be used by passing a callable as **opener**. The underlying file descriptor for the file object is then obtained by calling **opener** with (**file**, **flags**). **opener** must return an open file descriptor (passing `os.open` as **opener** results in functionality similar to passing `None`).

The newly created file is non-inheritable.

### Syntax

```python
open(file)
open(file, mode, buffering, encoding, errors, newline, closefd, opener)
```

!> If the file cannot be opened, an [`OSError`](/exceptions/OSError.md) is raised.