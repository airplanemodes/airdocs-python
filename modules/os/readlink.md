# os.readlink()

> **Availability:** Unix, Windows.

Return a string representing the path to which the symbolic link points. The result may be either an absolute or relative pathname. If it is relative, it may be converted to an absolute pathname using `os.path.join(os.path.dirname(path), result)`.

If the **path** is a string object (directly or indirectly through a [`PathLike`](/modules/os/PathLike.md) interface), the result will also be a string object, and the call may raise a [`UnicodeDecodeError`](/exceptions/UnicodeDecodeError.md). If the **path** is a [`bytes`](/built-in-types/bytes/) object (direct or indirectly), the result will be a [`bytes`](/built-in-types/bytes/) object.

This function can also support paths relative to directory descriptors.

When trying to resolve a path that may contain links, use [`realpath()`](/modules/os/path/realpath.md) to properly handle recursion and platform differences.

### Syntax

```python
os.readlink(path, *, dir_fd=None)
```