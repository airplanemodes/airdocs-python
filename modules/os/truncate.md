# os.truncate()

> **Availability:** Unix, Windows.

Truncate the file corresponding to **path**, so that it is at most **length** bytes in size.

This function can support specifying a file descriptor.

Raises an auditing event `os.truncate` with arguments `path`, `length`.

### Syntax

```python
os.truncate(path, length)
```