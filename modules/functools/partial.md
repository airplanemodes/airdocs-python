# functools.partial()

Return a new partial object which when called will behave like **func** called with the positional arguments **args** and keyword arguments **keywords**. If more arguments are supplied to the call, they are appended to **args**. If additional keyword arguments are supplied, they extend and override **keywords**. Roughly equivalent to:

```python
def partial(func, /, *args, **keywords):
    def newfunc(*fargs, **fkeywords):
        newkeywords = {**keywords, **fkeywords}
        return func(*args, *fargs, **newkeywords)
    newfunc.func = func
    newfunc.args = args
    newfunc.keywords = keywords
    return newfunc
```

The `partial()` is used for partial function application which “freezes” some portion of a function’s arguments and/or keywords resulting in a new object with a simplified signature. For example, `partial()` can be used to create a callable that behaves like the [`int()`](/built-in-functions/int.md) function where the **base** argument defaults to two:

```python
>>> from functools import partial
>>> basetwo = partial(int, base=2)
>>> basetwo.__doc__ = 'Convert base 2 string to an int.'
>>> basetwo('10010') # 18
```

### Syntax

```python
functools.partial(func, /, *args, **keywords)
```