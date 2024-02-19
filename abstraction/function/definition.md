# Definition

A function that writes the Fibonacci series to an arbitrary boundary:

```python
>>> def fib(n):
...     """Print a Fibonacci series up to n."""
...     a, b = 0, 1
...     while a < n:
...         print(a, end=' ')
...         a, b = b, a+b
...     print()
... 
>>> fib(2000) # 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
```

The keyword [`def`](/statements/def.md) represents a function *definition*. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

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
