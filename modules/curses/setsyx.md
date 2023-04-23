# curses.setsyx()

Set the virtual screen cursor to **y**, **x**.

If **y** and **x** are both `-1`, then [`leaveok`](/modules/curses/window/leaveok.md) is set `True`.

### Syntax

```python
curses.setsyx(y, x)
```