# os.openpty()

> **Availability:** Unix, not Emscripten, not WASI.

Open a new pseudo-terminal pair. Return a pair of file descriptors `(master, slave)` for the pty and the tty, respectively. The new file descriptors are non-inheritable. For a (slightly) more portable approach, use the [`pty`](/modules/pty/) module.

### Syntax

```python
os.openpty()
```