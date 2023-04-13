# os.removedirs()

Remove directories recursively.

Works like [`rmdir()`](/modules/os/rmdir.md) except that, if the leaf directory is successfully removed, `removedirs()` tries to successively remove every parent directory mentioned in path until an error is raised (which is ignored, because it generally means that a parent directory is not empty).

For example, `os.removedirs('foo/bar/baz')` will first remove the directory `'foo/bar/baz'`, and then remove `'foo/bar'` and `'foo'` if they are empty. Raises [`OSError`](/exceptions/OSError.md) if the leaf directory could not be successfully removed.

Raises an auditing event `os.remove` with arguments `path`, `dir_fd`.

### Syntax

```python
os.removedirs(name)
```