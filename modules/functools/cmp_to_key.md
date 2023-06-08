# functools.cmp_to_key()

Transform an old-style comparison function to a key function. Used with tools that accept key functions (such as [`sorted()`](/built-in-functions/sorted.md), [`min()`](/built-in-functions/min.md), [`max()`](/built-in-functions/max.md), [`heapq.nlargest()`](/modules/heapq/nlargest.md), [`heapq.nsmallest()`](/modules/heapq/nsmallest.md), [`itertools.groupby()`](/modules/itertools/groupby.md)). This function is primarily used as a transition tool for programs being converted from Python 2 which supported the use of comparison functions.

A comparison function is any callable that accepts two arguments, compares them, and returns a negative number for less-than, zero for equality, or a positive number for greater-than. A key function is a callable that accepts one argument and returns another value to be used as the sort key.

### Syntax

```python
functools.cmp_to_key(func)
```

### Examples

```python
sorted(iterable, key=cmp_to_key(locale.strcoll)) # locale-aware sort order
```