# multiprocessing.active_children()

Return list of all live children of the current process.

Calling this has the side effect of “joining” any processes which have already finished.

### Syntax

```python
multiprocessing.active_children()
```