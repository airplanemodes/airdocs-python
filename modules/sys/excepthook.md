# sys.excepthook()

This function prints out a given traceback and exception to `sys.stderr`.

When an exception is raised and uncaught, the interpreter calls `sys.excepthook` with three arguments, the exception class, exception instance, and a traceback object. In an interactive session this happens just before control is returned to the prompt; in a Python program this happens just before the program exits. The handling of such top-level exceptions can be customized by assigning another three-argument function to `sys.excepthook`.

Raise an auditing event `sys.excepthook` with arguments `hook`, `type`, `value`, `traceback` when an uncaught exception occurs. If no hook has been set, `hook` may be `None`. If any hook raises an exception derived from [`RuntimeError`](/exceptions/RuntimeError.md) the call to the hook will be suppressed. Otherwise, the audit hook exception will be reported as unraisable and `sys.excepthook` will be called.

?> **See also:** The [`sys.unraisablehook()`](/modules/sys/unraisablehook.md) function handles unraisable exceptions and the [`threading.excepthook()`](/modules/threading/excepthook.md) function handles exception raised by [`threading.Thread.run()`](/modules/threading/Thread/run.md).

### Syntax

```python
sys.excepthook(type, value, traceback)
```