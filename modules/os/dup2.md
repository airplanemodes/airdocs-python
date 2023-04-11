# os.dup2()

> **Availability:** not WASI.

Duplicate file descriptor **fd** to **fd2**, closing the latter first if necessary.

Return **fd2**. The new file descriptor is inheritable by default or non-inheritable if **inheritable** is `False`.

### Syntax

```python
os.dup2(fd, fd2, inheritable=True)
```