# @functools.cached_property()

Transform a method of a class into a property whose value is computed once and then cached as a normal attribute for the life of the instance. Similar to [`property()`](/built-in-functions/property.md), with the addition of caching. Useful for expensive computed properties of instances that are otherwise effectively immutable.

### Syntax

```python
@functools.cached_property(func)
```

### Examples

```python
class DataSet:

    def __init__(self, sequence_of_numbers):
        self._data = tuple(sequence_of_numbers)

    @cached_property
    def stdev(self):
        return statistics.stdev(self._data)
```

The mechanics of `cached_property()` are somewhat different from [`property()`](/built-in-functions/property.md). A regular property blocks attribute writes unless a setter is defined. In contrast, a cached_property allows writes.

The cached_property decorator only runs on lookups and only when an attribute of the same name doesn’t exist. When it does run, the cached_property writes to the attribute with the same name. Subsequent attribute reads and writes take precedence over the cached_property method and it works like a normal attribute.

The cached value can be cleared by deleting the attribute. This allows the cached_property method to run again.

Note, this decorator interferes with the operation of [**PEP 412**](https://peps.python.org/pep-0412/) key-sharing dictionaries. This means that instance dictionaries can take more space than usual.

Also, this decorator requires that the `__dict__` attribute on each instance be a mutable mapping. This means it will not work with some types, such as metaclasses (since the `__dict__` attributes on type instances are read-only proxies for the class namespace), and those that specify `__slots__` without including `__dict__` as one of the defined slots (as such classes don’t provide a `__dict__` attribute at all).

If a mutable mapping is not available or if space-efficient key sharing is desired, an effect similar to `cached_property()` can also be achieved by stacking [`property()`](/built-in-functions/property.md) on top of [`lru_cache()`](/modules/functools/lru_cache.md).