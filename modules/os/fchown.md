# os.fchown()

> **Availability:** Unix.

Change the owner and group id of the file given by **fd** to the numeric **uid** and **gid**.

To leave one of the ids unchanged, set it to -1. See [`chown()`](/modules/os/chown.md). As of Python 3.3, this is equivalent to `os.chown(fd, uid, gid)`.

Raises an auditing event `os.chown` with arguments `path`, `uid`, `gid`, `dir_fd`.

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

### Syntax

```python
os.fchown(fd, uid, gid)
```