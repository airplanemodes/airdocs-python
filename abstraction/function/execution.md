# Execution

The *execution* of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table. Whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables and variables of enclosing functions cannot be directly assigned a value within a function (unless, for global variables, named in a [`global`](/statements/global.md) statement, or, for variables of enclosing functions, named in a [`nonlocal`](/statements/nonlocal.md) statement), although they may be referenced.

The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called. Thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, or calls itself recursively, a new local symbol table is created for that call.

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
