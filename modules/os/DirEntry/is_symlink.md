# os.DirEntry.is_symlink()

Return `True` if this entry is a symbolic link (even if broken). Return `False` if the entry points to a directory or any kind of file, or if it doesn’t exist anymore.

The result is cached on the `os.DirEntry` object. Call [`os.path.islink()`](/modules/os/path/islink.md) to fetch up-to-date information.

On the first, uncached call, no system call is required in most cases. Specifically, neither Windows or Unix require a system call, except on certain Unix file systems, such as network file systems, that return `dirent.d_type == DT_UNKNOWN`.

This method can raise [`OSError`](/exceptions/OSError.md), such as [`PermissionError`](/exceptions/PermissionError.md), but [`FileNotFoundError`](/exceptions/FileNotFoundError.md) is caught and not raised.

### Syntax

```python
os.DirEntry.is_symlink()
```