# array.array.extend()

Append items from **iterable** to the end of the array.

If **iterable** is another array, it must have *exactly* the same type code. If not, [`TypeError`](/exceptions/TypeError.md) will be raised. If **iterable** is not an array, it must be iterable and its elements must be the right type to be appended to the array.

### Syntax

```python
array.array.extend(iterable)
```
