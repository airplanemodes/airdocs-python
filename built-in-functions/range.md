# range()
The arguments to the range constructor must be integers (either built-in `int` or any object that implements the `__index__()` special method). If the step argument is omitted, it defaults to 1. If the start argument is omitted, it defaults to 0.

For a positive step, the contents of a range `r` are determined by the formula `r[i] = start + step*i` where `i >= 0` and `r[i] < stop`.

For a negative step, the contents of the range are still determined by the formula `r[i] = start + step*i`, but the constraints are `i >= 0` and `r[i] > stop`.

A range object will be empty if `r[0]` does not meet the value constraint. Ranges do support negative indices, but these are interpreted as indexing from the end of the sequence determined by the positive indices.

### Syntax
General syntax with default values:
```python
range(start=0, stop, step=1)
```

### Examples
A most common use of `range()` is a combination with `for` loop and `len()` function to iterate over a sequence:
```python
fruits = ["mango", "kiwi", "banana"]
for i in range(len(fruits)):
    print(fruits[i])
```
Output:
```
mango
kiwi
banana
```
---
Creating lists:
```python
>>> list(range(10))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

>>> list(range(10, 30, 5))
[10, 15, 20, 25]

>>> list(range(0, -10, -1))
[0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
```
---
?> Ranges containing absolute values larger than `sys.maxsize` are permitted but some features (such as [len()](/built-in-functions/len.md)) may raise `OverflowError`.

!> If step is zero, `ValueError` is raised.