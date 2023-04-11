# os.closerange()

Close all file descriptors from **fd_low** (inclusive) to **fd_high** (exclusive), ignoring errors.

Equivalent to (but much faster than):

```python
for fd in range(fd_low, fd_high):
    try:
        os.close(fd)
    except OSError:
        pass
```

### Syntax

```python
os.closerange(fd_low, fd_high, /)
```