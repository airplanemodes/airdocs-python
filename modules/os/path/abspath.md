# abspath()

`>>> os.path.abspath.__doc__`: Return an absolute path.

Return a normalized absolutized version of the pathname path. On most platforms, this is equivalent to calling the function [`normpath()`](/modules/os/path/normpath.md) as follows: `normpath(join(os.getcwd(), path))`.

### Syntax

```python
os.path.abspath(path)
```