# multiprocessing.get_context()

Return a context object which has the same attributes as the [`multiprocessing`](/modules/multiprocessing/) module.

If **method** is `None` then the default context is returned. Otherwise **method** should be `'fork'`, `'spawn'`, `'forkserver'`.

[`ValueError`](/exceptions/ValueError.md) is raised if the specified start method is not available.

### Syntax

```python
multiprocessing.get_context(method=None)
```