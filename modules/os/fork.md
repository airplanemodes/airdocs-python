# os.fork()

> **Availability:** Unix, not Emscripten, not WASI.

Fork a child process. Return `0` in the child and the child’s process id in the parent. If an error occurs [`OSError`](/exceptions/OSError.md) is raised.

Note that some platforms including FreeBSD <= 6.3 and Cygwin have known issues when using `fork()` from a thread.

Raises an auditing event `os.fork` with no arguments.

!> See [`ssl`](/modules/ssl/) for applications that use the SSL module with `fork()`.

### Syntax

```python
os.fork()
```