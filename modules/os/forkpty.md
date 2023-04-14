# os.forkpty()

> **Availability:** Unix, not Emscripten, not WASI.

Fork a child process, using a new pseudo-terminal as the child’s controlling terminal. Return a pair of `(pid, fd)`, where **pid** is `0` in the child, the new child’s process id in the parent, and **fd** is the file descriptor of the master end of the pseudo-terminal.

For a more portable approach, use the [`pty`](/modules/pty/) module. 

If an error occurs [`OSError`](/exceptions/OSError.md) is raised.

Raises an auditing event `os.forkpty` with no arguments.

### Syntax

```python
os.forkpty()
```