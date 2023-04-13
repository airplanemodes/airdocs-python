# os.mknod()

> **Availability:** Unix, not Emscripten, not WASI.

Create a filesystem node (file, device special file or named pipe) named **path**.

**mode** specifies both the permissions to use and the type of node to be created, being combined (bitwise OR) with one of `stat.S_IFREG`, `stat.S_IFCHR`, `stat.S_IFBLK`, and `stat.S_IFIFO` (those constants are available in [`stat`](/modules/stat/)). For `stat.S_IFCHR` and `stat.S_IFBLK`, device defines the newly created device special file (probably using [`makedev()`](/modules/os/makedev.md)), otherwise it is ignored.

This function can also support paths relative to directory descriptors.

### Syntax

```python
os.mknod(path, mode=0o600, device=0, *, dir_fd=None)
```