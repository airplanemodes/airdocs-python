# os.register_at_fork()

> **Availability:** Unix, not Emscripten, not WASI.

Register callables to be executed when a new child process is forked using [`os.fork()`](/modules/os/fork.md) or similar process cloning APIs. The parameters are optional and keyword-only. Each specifies a different call point.

- **before** is a function called before forking a child process.
- **after_in_parent** is a function called from the parent process after forking a child process.
- **after_in_child** is a function called from the child process.

These calls are only made if control is expected to return to the Python interpreter. A typical [`subprocess`](/modules/subprocess/) launch will not trigger them as the child is not going to re-enter the interpreter.

Functions registered for execution before forking are called in reverse registration order. Functions registered for execution after forking (either in the parent or in the child) are called in registration order.

Note that fork() calls made by third-party C code may not call those functions, unless it explicitly calls `PyOS_BeforeFork()`, `PyOS_AfterFork_Parent()` and `PyOS_AfterFork_Child()`.

There is no way to unregister a function.

### Syntax

```python
os.register_at_fork(*, before=None, after_in_parent=None, after_in_child=None)
```