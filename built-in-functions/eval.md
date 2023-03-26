# eval()
The arguments are a string and optional **globals** and **locals**. If provided, **globals** must be a dictionary. If provided, **locals** can be any mapping object.

The **expression** argument is parsed and evaluated as a Python expression (technically speaking, a condition list) using the **globals** and **locals** dictionaries as global and local namespace. If the **globals** dictionary is present and does not contain a value for the key `__builtins__`, a reference to the dictionary of the built-in module `builtins` is inserted under that key before **expression** is parsed. That way you can control what builtins are available to the executed code by inserting your own `__builtins__` dictionary into **globals** before passing it to `eval()`. If the **locals** dictionary is omitted it defaults to the **globals** dictionary. If both dictionaries are omitted, the expression is executed with the **globals** and **locals** in the environment where `eval()` is called. 

?> `eval()` does not have access to the nested scopes (non-locals) in the enclosing environment.

### Syntax
```python
eval(expression)
eval(expression, globals=None)
eval(expression, globals=None, locals=None)
```

### Examples
The return value is the result of the evaluated expression.
```python
>>> x = 1
>>> eval("x+1") # 2
```