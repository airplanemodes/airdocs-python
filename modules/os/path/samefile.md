# os.path.samefile()

> **Availability:** Unix, Windows.

Return `True` if both pathname arguments refer to the same file or directory.

This is determined by the device number and i-node number and raises an exception if an [`os.stat()`](/modules/os/stat.md) call on either pathname fails.

### Syntax

```python
os.path.samefile(path1, path2)
```