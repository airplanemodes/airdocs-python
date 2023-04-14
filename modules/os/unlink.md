# os.unlink()

Remove (delete) the file **path**.

This function is semantically identical to [`remove()`](/modules/os/remove.md). The `unlink` name is its traditional Unix name. Please see the documentation for [`remove()`](/modules/os/remove.md) for further information.

Raises an auditing event `os.remove` with arguments `path`, `dir_fd`.

### Syntax

```python
os.unlink(path, *, dir_fd=None)
```