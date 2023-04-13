# os.link()

> **Availability:** Unix, Windows.

Create a hard link pointing to **src** named **dst**.

This function can support specifying **src_dir_fd** and/or **dst_dir_fd** to supply paths relative to directory descriptors, and not following symlinks.

Raises an auditing event `os.link` with arguments `src`, `dst`, `src_dir_fd`, `dst_dir_fd`.

### Syntax

```python
os.link(src, dst, *, src_dir_fd=None, dst_dir_fd=None, follow_symlinks=True)
```