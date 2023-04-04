# list()

The constructor builds a list whose items are the same and in the same order as **iterable**’s items.

**iterable** may be either a sequence, a container that supports iteration, or an iterator object. If **iterable** is already a list, a copy is made and returned, similar to `iterable[:]`.

If no argument is given, the constructor creates a new empty list, `[]`.

### Syntax

```python
list()
list(iterable)
```

### Examples

```python
list("abc") # ['a', 'b', 'c']
list((1, 2, 3)) # [1, 2, 3]
```

Making a copy using `[:]`:

```python
numbers = [5, 10, 20, 40]
nums = numbers[:]
print(nums) # [5, 10, 20, 40]
```