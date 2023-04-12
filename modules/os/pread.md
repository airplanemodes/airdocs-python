# os.pread()

> **Availability:** Unix.

Read at most **n** bytes from file descriptor **fd** at a position of **offset**, leaving the file offset unchanged.

Return a bytestring containing the bytes read. If the end of the file referred to by **fd** has been reached, an empty bytes object is returned.


### Syntax

```python
os.pread(fd, n, offset, /)
```