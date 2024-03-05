# types.resolve_bases()

Resolve MRO entries dynamically as specified by [**PEP 560**](https://peps.python.org/pep-0560/).

This function looks for items in **bases** that are not instances of [`type`](/built-in-functions/type.md), and returns a tuple where each such object that has an [`__mro_entries__()`](/abstraction/object/__mro_entries__.md) method is replaced with an unpacked result of calling this method. If a **bases** item is an instance of [`type`](/built-in-functions/type.md), or it doesn’t have an [`__mro_entries__()`](/abstraction/object/__mro_entries__.md) method, then it is included in the return tuple unchanged.

### Syntax

```python
types.resolve_bases(bases)
```
