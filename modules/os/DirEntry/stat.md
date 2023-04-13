# os.DirEntry.stat()

Return a [`stat_result`](/modules/os/stat_result/) object for this entry. This method follows symbolic links by default. To stat a symbolic link add the `follow_symlinks=False` argument.

On Unix, this method always requires a system call. On Windows, it only requires a system call if **follow_symlinks** is `True` and the entry is a reparse point (for example, a symbolic link or directory junction).

On Windows, the `st_ino`, `st_dev` and `st_nlink` attributes of the [`stat_result`](/modules/os/stat_result/) are always set to zero. Call [`os.stat()`](/modules/os/stat.md) to get these attributes.

The result is cached on the `os.DirEntry` object, with a separate cache for **follow_symlinks** `True` and `False`. Call [`os.stat()`](/modules/os/stat.md) to fetch up-to-date information.

### Syntax

```python
os.DirEntry.stat(*, follow_symlinks=True)
```