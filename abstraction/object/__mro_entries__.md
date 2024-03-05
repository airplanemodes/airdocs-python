# object.\_\_mro_entries\_\_()

If a base that appears in a class definition is not an instance of [`type`](/built-in-functions/type.md), then an `__mro_entries__()` method is searched on the base. If an `__mro_entries__()` method is found, the base is substituted with the result of a call to `__mro_entries__()` when creating the class. The method is called with the original bases tuple passed to the **bases** parameter, and must return a tuple of classes that will be used instead of the base. The returned tuple may be empty: in these cases, the original base is ignored.

### Syntax

```python
object.__mro_entries__(self, bases)
```
