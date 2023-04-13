# os.lstat()

Perform the equivalent of an `lstat()` system call on the given **path**.

Similar to [`stat()`](/modules/os/stat.md), but does not follow symbolic links. Return a `stat_result` object.

On platforms that do not support symbolic links, this is an alias for [`stat()`](/modules/os/stat.md).

As of Python 3.3, this is equivalent to `os.stat(path, dir_fd=dir_fd, follow_symlinks=False)`.

This function can also support paths relative to directory descriptors.

### Syntax

```python
os.lstat(path, *, dir_fd=None)
```