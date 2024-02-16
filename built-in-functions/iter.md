### iter()

Return an iterator object.

The first argument is interpreted very differently depending on the presence of the second argument. Without a second argument, **object** must be a collection object which supports the iterable protocol (the `__iter__()` method), or it must support the sequence protocol (the `__getitem__()` method with integer arguments starting at `0`). If it does not support either of those protocols, [`TypeError`](/exceptions/TypeError.md) is raised.

If the second argument, **sentinel**, is given, then **object** must be a callable object. The iterator created in this case will call **object** with no arguments for each call to its `__next__()` method. If the value returned is equal to **sentinel**, [`StopIteration`](/exceptions/StopIteration.md) will be raised, otherwise the value will be returned.

### Syntax

```python
iter(object)
iter(object, sentinel)
```

### Example

One useful application of the second form of `iter()` is to build a block-reader. For example, reading fixed-width blocks from a binary database file until the end of file is reached:

```python
from functools import partial
with open('mydata.db', 'rb') as f:
    for block in iter(partial(f.read, 64), b''):
        process_block(block)
```
