# linecache.getline()

Get line **lineno** from file named **filename**.

This function will never raise an exception — it will return `''` on errors (the terminating newline character will be included for lines that are found).

If a file named **filename** is not found, the function first checks for a [**PEP 302**](https://peps.python.org/pep-0302/) `__loader__` in **module_globals**. If there is such a loader and it defines a `get_source` method, then that determines the source lines (if `get_source()` returns [`None`](/abstraction/interpreter/None.md), then `''` is returned). Finally, if **filename** is a relative filename, it is looked up relative to the entries in the module search path, `sys.path`.

### Syntax

```python
linecache.getline(filename, lineno, module_globals=None)
```
