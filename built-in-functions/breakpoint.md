# breakpoint()

This function drops you into the debugger at the call site. Specifically, it calls [`sys.breakpointhook()`](/modules/sys/breakpointhook.md), passing **args** and **kws** straight through.

By default, [`sys.breakpointhook()`](/modules/sys/breakpointhook.md) calls [`pdb.set_trace()`](/modules/pdb/set_trace.md) expecting no arguments. In this case, it is purely a convenience function so you don’t have to explicitly import [`pdb`](/modules/pdb/) or type as much code to enter the debugger. However, [`sys.breakpointhook()`](/modules/sys/breakpointhook.md) can be set to some other function and `breakpoint()` will automatically call that, allowing you to drop into the debugger of choice. If [`sys.breakpointhook()`](/modules/sys/breakpointhook.md) is not accessible, this function will raise [`RuntimeError`](/exceptions/RuntimeError.md).

By default, the behavior of `breakpoint()` can be changed with the `PYTHONBREAKPOINT` environment variable. See [`sys.breakpointhook()`](/modules/sys/breakpointhook.md) for usage details.

Note that this is not guaranteed if [`sys.breakpointhook()`](/modules/sys/breakpointhook.md) has been replaced.

Raises an auditing event `builtins.breakpoint` with argument `breakpointhook`.

### Syntax

```python
breakpoint(*args, **kws)
```
