# multiprocessing.set_start_method()

Set the method which should be used to start child processes.

The **method** argument can be `'fork'`, `'spawn'` or `'forkserver'`. 

Raises [`RuntimeError`](/exceptions/RuntimeError.md) if the start method has already been set and **force** is not `True`.

If **method** is `None` and **force** is `True` then the start method is set to `None`.

If **method** is `None` and **force** is `False` then the context is set to the default context.

Note that this should be called at most once, and it should be protected inside the if `__name__ == '__main__'` clause of the main module.

### Syntax

```python
multiprocessing.set_start_method(method, force=False)
```