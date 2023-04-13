# os.chown()

> **Availability:** Unix.

Change the owner and group id of **path** to the numeric **uid** and **gid**. To leave one of the ids unchanged, set it to -1.

This function can support specifying a file descriptor, paths relative to directory descriptors and not following symlinks.

See [`shutil.chown()`](/modules/shutil/chown.md) for a higher-level function that accepts names in addition to numeric ids.

Raises an auditing event `os.chown` with arguments `path`, `uid`, `gid`, `dir_fd`.

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

### Syntax

```python
os.chown(path, uid, gid, *, dir_fd=None, follow_symlinks=True)
```