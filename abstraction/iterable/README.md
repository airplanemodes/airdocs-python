# `iterable`

These represent finite ordered sets indexed by non-negative numbers.

The built-in function [`len()`](/built-in-functions/len.md) returns the number of items in a sequence. When the length of a sequence is **n**, the index set contains the numbers 0, 1, ..., **n**-1.

### Accessing

This feature allows to select certain element of a sequence.

- **i** is the index of an element.

### Syntax

```python
sequence[i]
```

### Examples

```python
>>> currencies = ["USD", "EUR", "JPY", "CNY", "GBP"]
>>> currencies[2] # 'JPY'
```

### List comprehensions

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.

For example, assume we want to create a list of squares, like:

```python
>>> squares = []
>>> for x in range(10):
...     squares.append(x**2)
... 
>>> squares # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Note that this creates (or overwrites) a variable named `x` that still exists after the loop completes. We can calculate the list of squares without any side effects using:

```python
squares = list(map(lambda x: x**2, range(10)))
```

or, equivalently:

```python
squares = [x**2 for x in range(10)]
```

which is more concise and readable.

A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more [`for`](/statements/for.md) or [`if`](/statements/if.md) clauses. The result will be a new list resulting from evaluating the expression in the context of the [`for`](/statements/for.md) and [`if`](/statements/if.md) clauses which follow it. For example, this listcomp combines the elements of two lists if they are not equal:

```python
>>> [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

and it’s equivalent to:

```python
>>> combs = []
>>> for x in [1,2,3]:
...     for y in [3,1,4]:
...         if x != y:
...             combs.append((x, y))
... 
>>> combs # [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

Note how the order of the [`for`](/statements/for.md) and [`if`](/statements/if.md) statements is the same in both these snippets.

If the expression is a tuple (e.g. the `(x, y)` in the previous example), it must be parenthesized.

```python
>>> vec = [-4, -2, 0, 2, 4]
>>> # create a new list with the values doubled
>>> [x*2 for x in vec] # [-8, -4, 0, 4, 8]
>>> # filter the list to exclude negative numbers
>>> [x for x in vec if x >= 0] # [0, 2, 4]
>>> # apply a function to all the elements
>>> [abs(x) for x in vec] # [4, 2, 0, 2, 4]
>>> # call a method on each element
>>> freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
>>> [weapon.strip() for weapon in freshfruit]
# ['banana', 'loganberry', 'passion fruit']
>>> # create a list of 2-tuples like (number, square)
>>> [(x, x**2) for x in range(6)]
# [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]
>>> # the tuple must be parenthesized, otherwise an error is raised
>>> [x, x**2 for x in range(6)]
#   File "<stdin>", line 1
#     [x, x**2 for x in range(6)]
#      ^^^^^^^
# SyntaxError: did you forget parentheses around the comprehension target?
>>> # flatten a list using a listcomp with two 'for'
>>> vec = [[1,2,3], [4,5,6], [7,8,9]]
>>> [num for elem in vec for num in elem] # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

List comprehensions can contain complex expressions and nested functions:

```python
>>> from math import pi
>>> [str(round(pi, i)) for i in range(1, 6)]
# ['3.1', '3.14', '3.142', '3.1416', '3.14159']
```

### Nested List Comprehensions



### Immutable sequences

The only operation that immutable sequence types generally implement that is not also implemented by mutable sequence types is support for the [`hash()`](/built-in-functions/hash.md) built-in.

This support allows immutable sequences, such as [`tuple`](/built-in-types/tuple.md) instances, to be used as [`dict`](/built-in-types/dict/) keys and stored in [`set`](/built-in-types/set/) and [`frozenset`](/built-in-types/frozenset.md) instances.

Attempting to hash an immutable sequence that contains unhashable values will result in [`TypeError`](/exceptions/TypeError.md).

### Mappings

A mapping object maps hashable values to arbitrary objects. Mappings are mutable objects. There is currently only one standard mapping type, the dictionary.

?> The extension modules `dbm.ndbm` and `dbm.gnu` provide additional examples of mapping types, as does the [`collections`](/modules/collections.md) module.
