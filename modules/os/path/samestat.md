# os.path.samestat()

> **Availability:** Unix, Windows.

Return `True` if the stat tuples **stat1** and **stat2** refer to the same file.

These structures may have been returned by [`os.fstat()`](/modules/os/fstat.md), [`os.lstat()`](/modules/os/lstat.md), or [`os.stat()`](/modules/os/stat.md).

This function implements the underlying comparison used by [`samefile()`](/modules/os/path/samefile.md) and [`sameopenfile()`](/modules/os/path/sameopenfile.md).

### Syntax

```python
os.path.samestat(stat1, stat2)
```