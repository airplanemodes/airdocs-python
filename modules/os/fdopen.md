# os.fdopen()

Return an open file object connected to the file descriptor **fd**.

This is an alias of the [`open()`](/built-in-functions/open.md) built-in function and accepts the same arguments. The only difference is that the first argument of `fdopen()` must always be an integer.

### Syntax

```python
os.fdopen(fd, *args, **kwargs)
```