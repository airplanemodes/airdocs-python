# sys.executable

A string giving the absolute path of the executable binary for the Python interpreter, on systems where this makes sense.

If Python is unable to retrieve the real path to its executable, `sys.executable` will be an empty string or `None`.

### Syntax

```python
sys.executable
```