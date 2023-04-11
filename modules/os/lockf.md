# os.lockf()

> **Availability:** Unix.

Apply, test or remove a POSIX lock on an open file descriptor.

**fd** is an open file descriptor. **cmd** specifies the command to use - one of `F_LOCK`, `F_TLOCK`, `F_ULOCK` or `F_TEST`. **len** specifies the section of the file to lock.

Raises an auditing event `os.lockf` with arguments `fd`, `cmd`, `len`.


### Syntax

```python
os.lockf(fd, cmd, len, /)
```