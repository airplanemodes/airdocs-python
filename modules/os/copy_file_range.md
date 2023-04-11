# os.copy_file_range()

> **Availability:** Linux >= 4.5 with glibc >= 2.27.

Copy count bytes from file descriptor **src**, starting from offset **offset_src**, to file descriptor **dst**, starting from offset **offset_dst**.

If **offset_src** is `None`, then **src** is read from the current position. Respectively for **offset_dst**. The files pointed by **src** and **dst** must reside in the same filesystem, otherwise an [`OSError`](/exceptions/OSError.md) is raised with errno set to `errno.EXDEV`.

This copy is done without the additional cost of transferring data from the kernel to user space and then back into the kernel. Additionally, some filesystems could implement extra optimizations. The copy is done as if both files are opened as binary.

The return value is the amount of bytes copied. This could be less than the amount requested.

### Syntax

```python
os.copy_file_range(src, dst, count, offset_src=None, offset_dst=None)
```