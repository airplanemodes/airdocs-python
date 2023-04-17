# sys.getfilesystemencoding()

Get the filesystem encoding: the encoding used with the filesystem error handler to convert between Unicode filenames and bytes filenames. The filesystem error handler is returned from [`getfilesystemencodeerrors()`](/modules/sys/getfilesystemencodeerrors.md).

For best compatibility, [`str`](/built-in-types/str/) should be used for filenames in all cases, although representing filenames as [`bytes`](/built-in-types/bytes/) is also supported. Functions accepting or returning filenames should support either [`str`](/built-in-types/str/) or [`bytes`](/built-in-types/bytes/) and internally convert to the system’s preferred representation.

[`os.fsencode()`](/modules/os/fsencode.md) and [`os.fsdecode()`](/modules/os/fsdecode.md) should be used to ensure that the correct encoding and errors mode are used.

The filesystem encoding and error handler are configured at Python startup by the `PyConfig_Read()` function: see `filesystem_encoding` and `filesystem_errors members` of `PyConfig`.

### Syntax

```python
sys.getfilesystemencoding()
```