# curses.curs_set()

Set the cursor state.

**visibility** can be set to `0`, `1`, or `2`, for invisible, normal, or very visible. If the terminal supports the visibility requested, return the previous cursor state. Otherwise raise an exception. On many terminals, the “visible” mode is an underline cursor and the “very visible” mode is a block cursor.

### Syntax

```python
curses.curs_set(visibility)
```