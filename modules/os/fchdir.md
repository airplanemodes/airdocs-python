# os.fchdir()

> **Availability:** Unix.

Change the current working directory to the directory represented by the file descriptor **fd**.

The descriptor must refer to an opened directory, not an open file. As of Python 3.3, this is equivalent to `os.chdir(fd)`.

Raises an auditing event `os.chdir` with argument `path`.

### Syntax

```python
os.fchdir(fd)
```