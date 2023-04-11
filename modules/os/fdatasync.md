# os.fdatasync()

> **Availability:** Unix.

Force write of file with filedescriptor **fd** to disk. Does not force update of metadata.

?> This function is not available on MacOS.

### Syntax

```python
os.fdatasync(fd)
```