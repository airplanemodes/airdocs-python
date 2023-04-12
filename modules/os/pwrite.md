# os.pwrite()

> **Availability:** Unix.

Write the bytestring in **str** to file descriptor **fd** at position of **offset**, leaving the file offset unchanged.

Return the number of bytes actually written.

### Syntax

```python
os.pwrite(fd, str, offset, /)
```