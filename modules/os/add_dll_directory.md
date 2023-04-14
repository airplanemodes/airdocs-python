# os.add_dll_directory()

> **Availability:** Windows.

Add a path to the DLL search path.

This search path is used when resolving dependencies for imported extension modules (the module itself is resolved through [`sys.path`](/modules/sys/path.md)), and also by [`ctypes`](/modules/ctypes/).

Remove the directory by calling `close()` on the returned object or using it in a [`with`](/statements/with.md) statement.

Raises an auditing event `os.add_dll_directory` with argument `path`.

### Syntax

```python
os.add_dll_directory(path)
```