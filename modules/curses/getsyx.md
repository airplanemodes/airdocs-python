# curses.getsyx()

Return the current coordinates of the virtual screen cursor as a tuple `(y, x)`. If [`leaveok`](/modules/curses/window/leaveok.md) is currently `True`, then return `(-1, -1)`.

### Syntax

```python
curses.getsyx()
```