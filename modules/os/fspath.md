# os.fspath()

Return the file system representation of the path.

If [`str`](/built-in-types/str/) or [`bytes`](/built-in-types/bytes/) is passed in, it is returned unchanged. Otherwise `__fspath__()` is called and its value is returned as long as it is a [`str`](/built-in-types/str/) or [`bytes`](/built-in-types/bytes/) object. In all other cases, [`TypeError`](/exceptions/TypeError.md) is raised.

### Syntax

```python
os.fspath(path)
```