# Functions

### Arguments
Argument is a value passed to a function (or method) when calling the function. There are two kinds of argument:
- **keyword argument**: an argument preceded by an identifier (e.g. `name=`) in a function call or passed as a value in a dictionary preceded by `**`. For example, `3` and `5` are both keyword arguments in the following calls to `complex()`:
```python
complex(real=3, imag=5)
complex(**{'real': 3, 'imag': 5})
```
- **positional argument**: an argument that is not a keyword argument. Positional arguments can appear at the beginning of an argument list and/or be passed as elements of an iterable preceded by `*`. For example, `3` and `5` are both positional arguments in the following calls:
```python
complex(3, 5)
complex(*(3, 5))
```

Arguments are assigned to the named local variables in a function body. Syntactically, any expression can be used to represent an argument. The evaluated value is assigned to the local variable.