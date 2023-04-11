# os.fchmod()

> **Availability:** Unix.

Change the mode of the file given by **fd** to the numeric **mode**.

?> See the docs for [`chmod()`](/modules/os/chmod.md) for possible values of **mode**. As of Python 3.3, this is equivalent to `os.chmod(fd, mode)`.

Raises an auditing event `os.chmod` with arguments `path`, `mode`, `dir_fd`.

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

### Syntax

```python
os.fchmod(fd, mode)
```