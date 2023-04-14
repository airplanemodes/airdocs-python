# os.listxattr()

> **Availability:** Linux.

Return a list of the extended filesystem attributes on **path**.

The attributes in the list are represented as strings decoded with the filesystem encoding. If **path** is `None`, `listxattr()` will examine the current directory.

This function can support specifying a file descriptor and not following symlinks.

Raises an auditing event `os.listxattr` with argument `path`.

### Syntax

```python
os.listxattr(path=None, *, follow_symlinks=True)
```