# os.chdir()

Change the current working directory to **path**.

This function can support specifying a file descriptor. The descriptor must refer to an opened directory, not an open file.

This function can raise [`OSError`](/exceptions/OSError.md) and subclasses such as [`FileNotFoundError`](/exceptions/FileNotFoundError.md), [`PermissionError`](/exceptions/PermissionError.md), and [`NotADirectoryError`](/exceptions/NotADirectoryError.md).

Raises an auditing event `os.chdir` with argument `path`.

### Syntax

```python
os.chdir(path)
```