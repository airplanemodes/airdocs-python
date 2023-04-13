# os.rmdir()

Remove (delete) the directory **path**.

If the directory does not exist or is not empty, a [`FileNotFoundError`](/exceptions/FileNotFoundError.md) or an [`OSError`](/exceptions/OSError.md) is raised respectively. 

In order to remove whole directory trees, [`shutil.rmtree()`](/modules/shutil/rmtree.md) can be used.

This function can support paths relative to directory descriptors.

Raises an auditing event `os.rmdir` with arguments `path`, `dir_fd`.

### Syntax

```python
os.rmdir(path, *, dir_fd=None)
```