# sys._current_exceptions()

Return a dictionary mapping each thread’s identifier to the topmost exception currently active in that thread at the time the function is called. If a thread is not currently handling an exception, it is not included in the result dictionary.

This is most useful for statistical profiling.

This function should be used for internal and specialized purposes only.

Raises an auditing event `sys._current_exceptions` with no arguments.

### Syntax

```python
sys._current_exceptions()
```