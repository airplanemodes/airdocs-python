# os.path.normpath()

Normalize a pathname by collapsing redundant separators and up-level references so that `A//B`, `A/B/`, `A/./B` and `A/foo/../B` all become `A/B`.

This string manipulation may change the meaning of a path that contains symbolic links. On Windows, it converts forward slashes to backward slashes. To normalize case, use [`normcase()`](/modules/os/path/normcase.md).

### Syntax

```python
os.path.normpath(path)
```