# locals()

Update and return a dictionary representing the current local symbol table. Free variables are returned by `locals()` when it is called in function blocks, but not in class blocks. 

?> At the module level, `locals()` and `globals()` are the same dictionary. The contents of this dictionary should not be modified. Changes may not affect the values of local and free variables used by the interpreter.

### Syntax
```python
locals()
```