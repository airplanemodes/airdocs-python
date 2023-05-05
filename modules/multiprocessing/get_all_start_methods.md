# multiprocessing.get_all_start_methods()

Returns a list of the supported start methods, the first of which is the default.

The possible start methods are `'fork'`, `'spawn'` and `'forkserver'`. On Windows only `'spawn'` is available. On Unix `'fork'` and `'spawn'` are always supported, with `'fork'` being the default.

### Syntax

```python
multiprocessing.get_all_start_methods()
```