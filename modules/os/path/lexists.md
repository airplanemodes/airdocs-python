# os.path.lexists()

Return `True` if **path** refers to an existing path. Returns `True` for broken symbolic links. Equivalent to [`exists()`](/modules/os/path/exists.md) on platforms lacking [`os.lstat()`](/modules/os/lstat.md).

### Syntax

```python
os.path.lexists(path)
```