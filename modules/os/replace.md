# os.replace()

Rename the file or directory **src** to **dst**.

If **dst** is a non-empty directory, [`OSError`](/exceptions/OSError.md) will be raised. If **dst** exists and is a file, it will be replaced silently if the user has permission. The operation may fail if **src** and **dst** are on different filesystems. If successful, the renaming will be an atomic operation (this is a POSIX requirement).

This function can support specifying **src_dir_fd** and/or **dst_dir_fd** to supply paths relative to directory descriptors.

Raises an auditing event `os.rename` with arguments `src`, `dst`, `src_dir_fd`, `dst_dir_fd`.

### Syntax

```python
os.replace(src, dst, *, src_dir_fd=None, dst_dir_fd=None)
```