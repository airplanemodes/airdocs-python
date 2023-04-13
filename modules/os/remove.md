# os.remove()

Remove (delete) the file **path**.

If **path** is a directory, an [`OSError`](/exceptions/OSError.md) is raised. Use [`rmdir()`](/modules/os/rmdir.md) to remove directories. If the file does not exist, a [`FileNotFoundError`](/exceptions/FileNotFoundError.md) is raised.

This function can support paths relative to directory descriptors.

On Windows, attempting to remove a file that is in use causes an exception to be raised. On Unix, the directory entry is removed but the storage allocated to the file is not made available until the original file is no longer in use.

This function is semantically identical to [`unlink()`](/modules/os/unlink.md).

Raises an auditing event `os.remove` with arguments `path`, `dir_fd`.

### Syntax

```python
os.remove(path, *, dir_fd=None)
```