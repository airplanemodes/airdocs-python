# sys.getfilesystemencodeerrors()

Get the filesystem error handler: the error handler used with the filesystem encoding to convert between Unicode filenames and bytes filenames. The filesystem encoding is returned from [`getfilesystemencoding()`](/modules/sys/getfilesystemencoding.md).

[`os.fsencode()`](/modules/os/fsencode.md) and [`os.fsdecode()`](/modules/os/fsdecode.md) should be used to ensure that the correct encoding and errors mode are used.

The filesystem encoding and error handler are configured at Python startup by the `PyConfig_Read()` function: see `filesystem_encoding` and `filesystem_errors` members of `PyConfig`.

### Syntax

```python
sys.getfilesystemencodeerrors()
```