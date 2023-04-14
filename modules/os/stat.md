# os.stat()

Get the status of a file or a file descriptor. Perform the equivalent of a `stat()` system call on the given **path**. **path** may be specified as either a string or bytes – directly or indirectly through the [`PathLike`](/modules/os/PathLike.md) interface – or as an open file descriptor. Return a [`stat_result`](/modules/os/stat_result/) object.

This function normally follows symlinks. To stat a symlink add the argument `follow_symlinks=False`, or use [`lstat()`](/modules/os/lstat.md).

This function can support specifying a file descriptor and not following symlinks.

On Windows, passing `follow_symlinks=False` will disable following all name-surrogate reparse points, which includes symlinks and directory junctions. Other types of reparse points that do not resemble links or that the operating system is unable to follow will be opened directly. When following a chain of multiple links, this may result in the original link being returned instead of the non-link that prevented full traversal. To obtain stat results for the final path in this case, use the [`os.path.realpath()`](/modules/os/path/realpath.md) function to resolve the path name as far as possible and call [`lstat()`](/modules/os/lstat.md) on the result. This does not apply to dangling symlinks or junction points, which will raise the usual exceptions.

### Syntax

```python
os.stat(path, *, dir_fd=None, follow_symlinks=True)
```

### Examples

```python
>>> import os
>>> statinfo = os.stat('somefile.txt')
>>> statinfo
# os.stat_result(st_mode=33188, st_ino=7876932, st_dev=234881026,
# st_nlink=1, st_uid=501, st_gid=501, st_size=264, st_atime=1297230295,
# st_mtime=1297230027, st_ctime=1297230027)
>>> statinfo.st_size # 264
```

?> **See also:** [`fstat()`](/modules/os/fstat.md) and [`lstat()`](/modules/os/lstat.md) functions.