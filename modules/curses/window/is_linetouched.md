# window.is_linetouched()

Return `True` if the specified line was modified since the last call to [`refresh()`](/modules/curses/window/refresh.md). Otherwise return `False`.

Raise a [`curses.error`](/modules/curses/error.md) exception if line is not valid for the given window.

### Syntax

```python
window.is_linetouched(line)
```