# Functions
A user-defined function object is created by a function definition [`def`](/statements/def.md). It should be called with an argument list containing the same number of items as the function’s formal parameter list.

# Special attributes

## `__doc__`
The function’s documentation string, or `None` if unavailable. Not inherited by subclasses. Writable.
```python
print(int().__doc__)
```

## `__name__`
The function’s name. Writable.

## `__qualname__`
The function’s qualified name. Writable.

## `__module__`
The name of the module the function was defined in, or `None` if unavailable. Writable.

## `__defaults__`
A tuple containing default argument values for those arguments that have defaults, or `None` if no arguments have a default value. Writable.

## `__code__`
The code object representing the compiled function body. Writable.

## `__globals__`
A reference to the dictionary that holds the function’s global variables — the global namespace of the module in which the function was defined. Read-only.

## `__dict__`
The namespace supporting arbitrary function attributes. Writable.

## `__closure__`
`None` or a tuple of cells that contain bindings for the function’s free variables. See below for information on the `cell_contents` attribute. Read-only.

## `__annotations__`
A dict containing annotations of parameters. The keys of the dict are the parameter names, and `'return'` for the return annotation, if provided. Writable.

## `__kwdefaults__`
A dict containing defaults for keyword-only parameters. Writable.

?> Most of the attributes labelled “Writable” check the type of the assigned value.

Function objects also support getting and setting arbitrary attributes, which can be used, for example, to attach metadata to functions. Regular attribute dot-notation is used to get and set such attributes.

?> The current implementation only supports function attributes on user-defined functions. Function attributes on built-in functions may be supported in the future.

# Arguments
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