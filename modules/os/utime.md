# os.utime()

Set the access and modified times of the file specified by **path**.

`utime()` takes two optional parameters, **times** and **ns**. These specify the times set on **path** and are used as follows:

- If **ns** is specified, it must be a 2-tuple of the form `(atime_ns, mtime_ns)` where each member is an int expressing nanoseconds.
- If times is not `None`, it must be a 2-tuple of the form `(atime, mtime)` where each member is an int or float expressing seconds.
- If times is `None` and **ns** is unspecified, this is equivalent to specifying `ns=(atime_ns, mtime_ns)` where both times are the current time.

It is an error to specify tuples for both **times** and **ns**.

Note that the exact times you set here may not be returned by a subsequent [`stat()`](/modules/os/stat.md) call, depending on the resolution with which your operating system records access and modification times. See [`stat()`](/modules/os/stat.md). The best way to preserve exact times is to use the [`st_atime_ns`](/modules/os/stat_result/st_atime_ns.md) and [`st_mtime_ns`](/modules/os/stat_result/st_mtime_ns.md) fields from the [`os.stat()`](/modules/os/stat.md) result object with the **ns** parameter to `utime()`.

This function can support specifying a file descriptor, paths relative to directory descriptors and not following symlinks.

Raises an auditing event `os.utime` with arguments `path`, `times`, `ns`, `dir_fd`.

### Syntax

```python
os.utime(path, times=None, *, dir_fd=None, follow_symlinks=True)
os.utime(path, times=None, *, ns, dir_fd=None, follow_symlinks=True)
```