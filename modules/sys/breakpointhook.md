# sys.breakpointhook()

This hook function is called by built-in [`breakpoint()`](/built-in-functions/breakpoint.md). By default, it drops you into the [`pdb`](/modules/pdb/) debugger, but it can be set to any other function so that you can choose which debugger gets used.

The signature of this function is dependent on what it calls. For example, the default binding (e.g. [`pdb.set_trace()`](/modules/pdb/set_trace.md)) expects no arguments, but you might bind it to a function that expects additional arguments (positional and/or keyword). The built-in [`breakpoint()`](/built-in-functions/breakpoint.md) function passes its `*args` and `**kws` straight through. Whatever `breakpointhooks()` returns is returned from [`breakpoint()`](/built-in-functions/breakpoint.md).

The default implementation first consults the environment variable `PYTHONBREAKPOINT`. If that is set to `"0"` then this function returns immediately, i.e. it is a no-op. If the environment variable is not set, or is set to the empty string, [`pdb.set_trace()`](/modules/pdb/set_trace.md) is called. Otherwise this variable should name a function to run, using Python’s dotted-import nomenclature, e.g. `package.subpackage.module.function`. In this case, `package.subpackage.module` would be imported and the resulting module must have a callable named `function()`. This is run, passing in `*args` and `**kws`, and whatever `function()` returns, `sys.breakpointhook()` returns to the built-in [`breakpoint()`](/built-in-functions/breakpoint.md) function.

Note that if anything goes wrong while importing the callable named by `PYTHONBREAKPOINT`, a [`RuntimeWarning`](/exceptions/RuntimeWarning.md) is reported and the breakpoint is ignored.

Also note that if `sys.breakpointhook()` is overridden programmatically, `PYTHONBREAKPOINT` is *not* consulted.

### Syntax

```python
sys.breakpointhook()
```