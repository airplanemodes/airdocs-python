# filter()
Construct an iterator from those elements of **iterable** for which **function** is true.

**iterable** may be either a sequence, a container which supports iteration, or an iterator. If **function** is `None`, the identity function is assumed, that is, all elements of **iterable** that are false are removed.

### Syntax
```python
filter(function, iterable)
```

### Examples
Remove strings from a list:
```python
data = [10, "cat", 20, "dog", 30, 42.5]
def keep_numbers(element):
    return isinstance(element, (int, float))

filtered_data = filter(keep_numbers, data)
print(list(filtered_data)) # [10, 20, 30, 42.5]
```

?> Note that the `filter()` function returns an **iterator** object that contains the elements of original **iterable** that pass the condition specified by the filtering function. Additional conversion step with `list()`, `tuple()` or `set()` function is needed to print the result.

---

Remove numbers from a list using lambda function:
```python
data = [10, "cat", 20, "dog", 30, 42.5]
filtered_data = filter(lambda x: isinstance(x, (str)), data)
print(tuple(filtered_data)) # ("cat", "dog")
```