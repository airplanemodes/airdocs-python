# sys.getsizeof()

Return the size of an **object** in bytes.

The **object** can be any type of object. All built-in objects will return correct results, but this does not have to hold true for third-party extensions as it is implementation specific.

Only the memory consumption directly attributed to the **object** is accounted for, not the memory consumption of objects it refers to.

If given, **default** will be returned if the **object** does not provide means to retrieve the size. Otherwise a [`TypeError`](/exceptions/TypeError.md) will be raised.

`getsizeof()` calls the **object**’s `__sizeof__` method and adds an additional garbage collector overhead if the **object** is managed by the garbage collector.

### Syntax

```python
sys.getsizeof(object)
sys.getsizeof(object, default)
```

### Examples

```python
>>> import sys
>>> d = [10, 20, 30]
>>> sys.getsizeof(d) # 88
>>> d = [10, 20, 30, 40]
>>> sys.getsizeof(d) # 88
>>> a = 100
>>> sys.getsizeof(a) # 28
>>> a = 5
>>> sys.getsizeof(a) # 28
```