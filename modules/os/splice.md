# os.splice()

> **Availability:** Linux >= 2.6.17 with glibc >= 2.5

Transfer **count** bytes from file descriptor **src**, starting from offset **offset_src**, to file descriptor **dst**, starting from offset **offset_dst**. At least one of the file descriptors must refer to a pipe. If **offset_src** is `None`, then **src** is read from the current position; respectively for **offset_dst**. The offset associated to the file descriptor that refers to a pipe must be `None`. The files pointed by **src** and **dst** must reside in the same filesystem, otherwise an [`OSError`](/exceptions/OSError.md) is raised with `errno` set to `errno.EXDEV`.

This copy is done without the additional cost of transferring data from the kernel to user space and then back into the kernel. Additionally, some filesystems could implement extra optimizations. The copy is done as if both files are opened as binary.

Upon successful completion, returns the number of bytes spliced to or from the pipe. A return value of 0 means end of input. If **src** refers to a pipe, then this means that there was no data to transfer, and it would not make sense to block because there are no writers connected to the write end of the pipe.

### Syntax

```python
os.splice(src, dst, count, offset_src=None, offset_dst=None)
```