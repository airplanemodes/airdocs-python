# os.path.relpath()

> **Availability:** Unix, Windows.

Return a relative filepath to **path** either from the current directory or from an optional **start** directory.

This is a path computation: the filesystem is not accessed to confirm the existence or nature of **path** or **start**.

On Windows, [`ValueError`](/exceptions/ValueError.md) is raised when **path** and **start** are on different drives.

**start** defaults to [`os.curdir`](/modules/os/curdir.md).


### Syntax

```python
os.path.relpath(path, start=os.curdir)
```