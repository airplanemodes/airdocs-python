# Functions

## Definition

A function that writes the Fibonacci series to an arbitrary boundary:

```python
def fib(n):
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

>>> fib(2000) # 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
```

The keyword [`def`](/statements/def.md) represents a function *definition*. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

The first statement of the function body can optionally be a string literal. This string literal is the function’s *documentation string*, or **docstring**. There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code. It’s good practice to include docstrings in code.

The *execution* of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table. Whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables and variables of enclosing functions cannot be directly assigned a value within a function (unless, for global variables, named in a [`global`](/statements/global.md) statement, or, for variables of enclosing functions, named in a [`nonlocal`](/statements/nonlocal.md) statement), although they may be referenced.

The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called. Thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, or calls itself recursively, a new local symbol table is created for that call.

A function definition associates the function name with the function object in the current symbol table. The interpreter recognizes the object pointed to by that name as a user-defined function. Other names can also point to that same function object and can also be used to access the function:

```python
>>> fib # <function fib at 10042ed0>
>>> f = fib
>>> f(100) # 0 1 1 2 3 5 8 13 21 34 55 89
```

Coming from other languages, you might object that `fib` is not a function but a procedure since it doesn’t return a value. In fact, even functions without a [`return`](/statements/return.md) statement do return a value, albeit a rather boring one. This value is called `None` (it’s a built-in name). Writing the value `None` is normally suppressed by the interpreter if it would be the only value written. It may be seen by using [`print()`](/built-in-functions/print.md):

```python
>>> fib(0)
>>> print(fib(0)) # None
```

It is simple to write a function that returns a list of the numbers of the Fibonacci series, instead of printing it:

```python
def fib2(n):
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)    # see below
        a, b = b, a+b
    return result

f100 = fib2(100)    # call it
f100                # write the result
```

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

### Lambdas

Lambda expressions (sometimes called lambda forms) are used to create anonymous functions. The expression `lambda parameters: expression` yields a function object. The unnamed object behaves like a function object defined with:

```python
def lambda(parameters):
    return expression
```

### Special attributes

### `__globals__`
A reference to the dictionary that holds the function’s global variables — the global namespace of the module in which the function was defined. Read-only.

### `__closure__`
`None` or a tuple of cells that contain bindings for the function’s free variables. See below for information on the `cell_contents` attribute. Read-only.

?> Most of the attributes labelled “Writable” check the type of the assigned value.

Function objects also support getting and setting arbitrary attributes, which can be used, for example, to attach metadata to functions. Regular attribute dot-notation is used to get and set such attributes.

?> The current implementation only supports function attributes on user-defined functions. Function attributes on built-in functions may be supported in the future.