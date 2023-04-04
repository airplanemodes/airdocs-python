# tuple()

The constructor builds a tuple whose items are the same and in the same order as **iterable**’s items.

**iterable** may be either a sequence, a container that supports iteration, or an iterator object. If **iterable** is already a tuple, it is returned unchanged.

If no argument is given, the constructor creates a new empty tuple, `()`.

### Syntax

```python
tuple()
tuple(iterable)
```

### Examples

```python
>>> tuple('abc') # ('a', 'b', 'c')
>>> tuple([1, 2, 3]) # (1, 2, 3)
```

```python
a = tuple()
print(a) # ()

b = 1, 3
print(b) # (1, 3)
```

?> Note that it is actually the comma which makes a tuple, not the parentheses. The parentheses are optional, except in the empty tuple case, or when they are needed to avoid syntactic ambiguity. For example, `f(1, 2, 3)` is a function call with three arguments, while `f((1, 2, 3))` is a function call with a 3-tuple as the sole argument.