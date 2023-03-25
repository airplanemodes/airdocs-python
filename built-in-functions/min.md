# min()
Return the smallest item in an **iterable** or the smallest of two or more arguments.

If one positional argument is provided, it should be an iterable. The smallest item in the iterable is returned. If two or more positional arguments are provided, the smallest of the positional arguments is returned.

There are two optional keyword-only arguments. The **key** argument specifies a one-argument ordering function like that used for `list.sort()`. The **default** argument specifies an object to return if the provided iterable is empty.

### Syntax

```python
min(iterable)
min(iterable1, iterable2)
min(iterable1, iterable2, default, key=None)
```

### Examples
```python
min([1, 2, 3]) # 1
min([1, 2, 3], [2, 4, 6]) # [1, 2, 3]
min([], default=[10, 20, 30]) # [10, 20, 30]
min([7, 5, 3], default=[10, 20, 30]) # 3
```

---

?> If multiple items are minimal, the function returns the first one encountered. This is consistent with other sort-stability preserving tools such as `sorted(iterable, key=keyfunc)[0]` and `heapq.nsmallest(1, iterable, key=keyfunc)`.

!> If the iterable is empty and **default** is not provided, a `ValueError` is raised.