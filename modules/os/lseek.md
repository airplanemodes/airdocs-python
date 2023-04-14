# os.lseek()

Set the current position of file descriptor **fd** to position **pos**, modified by **how**: `SEEK_SET` or `0` to set the position relative to the beginning of the file. `SEEK_CUR` or `1` to set it relative to the current position. `SEEK_END` or `2` to set it relative to the end of the file. Return the new cursor position in bytes, starting from the beginning.

### Syntax

```python
os.lseek(fd, pos, how, /)
```