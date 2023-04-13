# os.DirEntry.is_file()

Return `True` if this entry is a file or a symbolic link pointing to a file. Return `False` if the entry is or points to a directory or other non-file entry, or if it doesn’t exist anymore.

If **follow_symlinks** is `False`, return `True` only if this entry is a file (without following symlinks). Return `False` if the entry is a directory or other non-file entry, or if it doesn’t exist anymore.

The result is cached on the `os.DirEntry` object. Caching, system calls made, and exceptions raised are as per [`is_dir()`](/modules/os/DirEntry/is_dir.md).

### Syntax

```python
os.DirEntry.is_file(*, follow_symlinks=True)
```