# os.path.exists()

Return `True` if **path** refers to an existing path or an open file descriptor. Returns `False` for broken symbolic links. On some platforms, this function may return `False` if permission is not granted to execute [`os.stat()`](/modules/os/stat.md) on the requested file, even if the **path** physically exists.

### Syntax

```python
os.path.exists(path)
```