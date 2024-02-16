# exec()

This function supports dynamic execution of Python code. **object** must be either a string or a code object. If it is a string, the string is parsed as a suite of Python statements which is then executed (unless a syntax error occurs). If it is a code object, it is simply executed. In all cases, the code that’s executed is expected to be valid as file input. Be aware that the [`nonlocal`](/statements/nonlocal.md), [`yield`](/statements/yield.md), and [`return`](/statements/return.md) statements may not be used outside of function definitions even within the context of code passed to the [`exec()`](/built-in-functions/exec.md) function. The return value is `None`.

In all cases, if the optional parts are omitted, the code is executed in the current scope. If only **globals** is provided, it must be a dictionary (and not a subclass of dictionary), which will be used for both the global and the local variables. If **globals** and **locals** are given, they are used for the global and local variables, respectively. If provided, **locals** can be any mapping object. Remember that at the module level, globals and locals are the same dictionary. If exec gets two separate objects as **globals** and **locals**, the code will be executed as if it were embedded in a class definition.

If the **globals** dictionary does not contain a value for the key `__builtins__`, a reference to the dictionary of the built-in module [`builtins`](/modules/builtins.md) is inserted under that key. That way you can control what builtins are available to the executed code by inserting your own `__builtins__` dictionary into **globals** before passing it to [`exec()`](/built-in-functions/exec.md).

The **closure** argument specifies a closure–a tuple of cellvars. It’s only valid when the **object** is a code object containing free variables. The length of the tuple must exactly match the number of free variables referenced by the code object.

### Syntax

```python
exec(object)
exec(object, globals=None)
exec(object, globals=None, locals=None)
exec(object, globals=None, locals=None, /, *, closure=None)
```

### Examples

?> The built-in functions [`globals()`](/built-in-functions/globals.md) and [`locals()`](/built-in-functions/locals.md) return the current global and local dictionary, respectively, which may be useful to pass around for use as the second and third argument to `exec()`.

?> The default **locals** act as described for function [`locals()`](/built-in-functions/locals.md). Modifications to the default **locals** dictionary should not be attempted. Pass an explicit **locals** dictionary if you need to see effects of the code on **locals** after function `exec()` returns.
