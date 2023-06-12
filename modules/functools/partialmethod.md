# functools.partialmethod()

Return a new `partialmethod` descriptor which behaves like [`partial()`](/modules/functools/partial.md) except that it is designed to be used as a method definition rather than being directly callable.

**func** must be a descriptor or a callable (objects which are both, like normal functions, are handled as descriptors).

When **func** is a descriptor (such as a normal Python function, [`classmethod()`](/built-in-functions/classmethod.md), [`staticmethod()`](/built-in-functions/staticmethod.md), [`abstractmethod()`](/modules/abc/abstractmethod.md) or another instance of `partialmethod`), calls to `__get__` are delegated to the underlying descriptor, and an appropriate partial object returned as the result.

When **func** is a non-descriptor callable, an appropriate bound method is created dynamically. This behaves like a normal Python function when used as a method: the *self* argument will be inserted as the first positional argument, even before the **args** and **keywords** supplied to the `partialmethod` constructor.

### Syntax

```python
functools.partialmethod(func, /, *args, **keywords)
```

### Examples

```python
class Cell:
...     def __init__(self):
...         self._alive = False
...     @property
...     def alive(self):
...         return self._alive
...     def set_state(self, state):
...         self._alive = bool(state)
...     set_alive = partialmethod(set_state, True)
...     set_dead = partialmethod(set_state, False)
...
>>> c = Cell()
>>> c.alive # False
>>> c.set_alive()
>>> c.alive # True
```