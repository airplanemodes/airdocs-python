# max()
Return the largest item in an **iterable** or the largest of two or more arguments.

If one positional argument is provided, it should be an iterable. The largest item in the iterable is returned. If two or more positional arguments are provided, the largest of the positional arguments is returned.

There are two optional keyword-only arguments. The **key** argument specifies a one-argument ordering function like that used for `list.sort()`. The **default** argument specifies an object to return if the provided iterable is empty.

### Syntax

```python
max(iterable)
max(iterable1, iterable2)
max(iterable1, iterable2, default, key=None)
```

### Examples
```python
max([1, 2, 3]) # 3
max([1, 2, 3], [2, 4, 6]) # [2, 4, 6]
max([], default=[10, 20, 30]) # [10, 20, 30]
max([7, 5, 3], default=[10, 20, 30]) # 7
```

---

?> If multiple items are minimal, the function returns the first one encountered. This is consistent with other sort-stability preserving tools such as `sorted(iterable, key=keyfunc, reverse=True)[0]` and `heapq.nlargest(1, iterable, key=keyfunc)`.

!> If the iterable is empty and **default** is not provided, a `ValueError` is raised.
