# os.ftruncate()

> **Availability:** Unix, Windows.

Truncate the file corresponding to file descriptor **fd**, so that it is at most **length** bytes in size.

As of Python 3.3, this is equivalent to `os.truncate(fd, length)`.

Raises an auditing event `os.truncate` with arguments `fd`, `length`.

### Syntax

```python
os.ftruncate(fd, length, /)
```