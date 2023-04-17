# sys.getallocatedblocks()

Return the number of memory blocks currently allocated by the interpreter, regardless of their size. This function is mainly useful for tracking and debugging memory leaks. Because of the interpreter’s internal caches, the result can vary from call to call. You may have to call [`_clear_type_cache()`](/modules/sys/_clear_type_cache.md) and [`gc.collect()`](/modules/gc/collect.md) to get more predictable results.

If a Python build or implementation cannot reasonably compute this information, `getallocatedblocks()` is allowed to return 0 instead.

### Syntax

```python
sys.getallocatedblocks()
```