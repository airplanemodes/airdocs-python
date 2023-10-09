# glob.iglob()

Return an iterator which yields the same values as `glob()` without actually storing them all simultaneously.

Raises an auditing event `glob.glob` with arguments **pathname**, **recursive**.

Raises an auditing event `glob.glob/2` with arguments **pathname**, **recursive**, **root_dir**, **dir_fd**.

### Syntax

```python
glob.iglob(pathname, *, root_dir=None, dir_fd=None, recursive=False, include_hidden=False)
```