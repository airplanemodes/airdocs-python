# os.ttyname()

> **Availability:** Unix.

Return a string which specifies the terminal device associated with file descriptor **fd**.

If **fd** is not associated with a terminal device, an exception is raised.

### Syntax

```python
os.ttyname(fd, /)
```