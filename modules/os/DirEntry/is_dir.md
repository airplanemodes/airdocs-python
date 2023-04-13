# os.DirEntry.is_dir()

Return `True` if this entry is a directory or a symbolic link pointing to a directory. Return `False` if the entry is or points to any other kind of file, or if it doesn’t exist anymore.

If **follow_symlinks** is `False`, return `True` only if this entry is a directory (without following symlinks). Return `False` if the entry is any other kind of file or if it doesn’t exist anymore.

The result is cached on the `os.DirEntry` object, with a separate cache for **follow_symlinks** `True` and `False`. Call [`os.stat()`](/modules/os/stat.md) along with `stat.S_ISDIR()` to fetch up-to-date information.

On the first, uncached call, no system call is required in most cases. Specifically, for non-symlinks, neither Windows or Unix require a system call, except on certain Unix file systems, such as network file systems, that return `dirent.d_type == DT_UNKNOWN`. If the entry is a symlink, a system call will be required to follow the symlink unless **follow_symlinks** is `False`.

This method can raise [`OSError`](/exceptions/OSError.md), such as [`PermissionError`](/exceptions/PermissionError.md), but [`FileNotFoundError`](/exceptions/FileNotFoundError.md) is caught and not raised.

### Syntax

```python
os.DirEntry.is_dir(*, follow_symlinks=True)
```