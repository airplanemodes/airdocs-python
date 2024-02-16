# locals()

`>>> locals.__doc__`: Return a dictionary containing the current scope's local variables.

Free variables are returned by `locals()` when it is called in function blocks, but not in class blocks. 

?> At the module level, `locals()` and [`globals()`](/built-in-functions/globals.md) are the same dictionary. The contents of this dictionary should not be modified. Changes may not affect the values of local and free variables used by the interpreter.

### Syntax

```python
locals()
```
