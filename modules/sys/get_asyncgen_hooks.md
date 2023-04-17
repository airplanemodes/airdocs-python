# sys.get_asyncgen_hooks()

Returns an **asyncgen_hooks** object, which is similar to a [`namedtuple`](/modules/collections/namedtuple.md) of the form `(firstiter, finalizer)`, where **firstiter** and **finalizer** are expected to be either `None` or functions which take an asynchronous generator iterator as an argument, and are used to schedule finalization of an asynchronous generator by an event loop.

?> This function has been added on a provisional basis. See [**PEP 411**](https://peps.python.org/pep-0411/) for details.

### Syntax

```python
sys.get_asyncgen_hooks()
```