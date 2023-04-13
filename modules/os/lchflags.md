# os.lchflags()

> **Availability:** Unix, not Emscripten, not WASI.

Set the flags of **path** to the numeric **flags**, like [`chflags()`](/modules/os/chflags.md), but do not follow symbolic links.

As of Python 3.3, this is equivalent to `os.chflags(path, flags, follow_symlinks=False)`.

Raises an auditing event `os.chflags` with arguments `path`, `flags`.

### Syntax

```python
os.lchflags(path, flags)
```