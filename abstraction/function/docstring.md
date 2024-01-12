# Docstring

The first statement of the function body can optionally be a string literal. This string literal is the function’s *documentation string*, or **docstring**. There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code.

```python
>>> def increment(x):
...     """Increment a value by one"""
...     return x + 1
... 
>>> print(increment.__doc__) # Increment a value by one
```

?> It’s good practice to include docstrings in code.