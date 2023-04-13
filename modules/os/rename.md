# os.rename()

Rename the file or directory **src** to **dst**. If **dst** exists, the operation will fail with an [`OSError`](/exceptions/OSError.md) subclass in a number of cases:

On Windows, if **dst** exists a [`FileExistsError`](/exceptions/FileExistsError.md) is always raised. The operation may fail if **src** and **dst** are on different filesystems. Use [`shutil.move()`](/modules/shutil/move.md) to support moves to a different filesystem.

On Unix, if **src** is a file and **dst** is a directory or vice-versa, an [`IsADirectoryError`](/exceptions/IsADirectoryError.md) or a [`NotADirectoryError`](/exceptions/NotADirectoryError.md) will be raised respectively. If both are directories and **dst** is empty, **dst** will be silently replaced. If **dst** is a non-empty directory, an [`OSError`](/exceptions/OSError.md) is raised. If both are files, **dst** will be replaced silently if the user has permission. The operation may fail on some Unix flavors if **src** and **dst** are on different filesystems. If successful, the renaming will be an atomic operation (this is a POSIX requirement).

This function can support specifying **src_dir_fd** and/or **dst_dir_fd** to supply paths relative to directory descriptors.

If you want cross-platform overwriting of the destination, use [`replace()`](/modules/os/replace.md).

Raises an auditing event `os.rename` with arguments `src`, `dst`, `src_dir_fd`, `dst_dir_fd`.

### Syntax

```python
os.rename(src, dst, *, src_dir_fd=None, dst_dir_fd=None)
```