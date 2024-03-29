# range()

The arguments to the range constructor must be integers (either built-in [`int`](/built-in-types/int/) or any object that implements the `__index__()` special method). If the step argument is omitted, it defaults to 1. If the start argument is omitted, it defaults to `0`.

For a positive step, the contents of a range `r` are determined by the formula `r[i] = start + step*i` where `i >= 0` and `r[i] < stop`.

For a negative step, the contents of the range are still determined by the formula `r[i] = start + step*i`, but the constraints are `i >= 0` and `r[i] > stop`.

A range object will be empty if `r[0]` does not meet the value constraint. Ranges do support negative indices, but these are interpreted as indexing from the end of the sequence determined by the positive indices.

### Syntax

```python
range(stop)
range(start=0, stop)
range(start=0, stop, step=1)
```

### Examples

A common use of `range()` is in a combination with [`for`](/statements/for.md) loop and [`len()`](/built-in-functions/len.md) function to iterate over a sequence:

```python
fruits = ["mango", "kiwi", "banana"]
for i in range(len(fruits)):
    print(fruits[i])

# mango
# kiwi
# banana
```

Creating lists:

```python
>>> list(range(10)) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(10, 30, 5)) # [10, 15, 20, 25]
>>> list(range(0, -9, -1)) # [0, -1, -2, -3, -4, -5, -6, -7, -8]
```

---

?> Ranges containing absolute values larger than `sys.maxsize` are permitted but some features (such as [`len()`](/built-in-functions/len.md)) may raise [`OverflowError`](/exceptions/OverflowError.md).

!> If step is zero, [`ValueError`](/exceptions/ValueError.md) is raised.
