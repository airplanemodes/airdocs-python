# curses.unget_wch()

`>>> curses.unget_wch.__doc__`: Push **ch** so the next [`get_wch()`](/modules/curses/window/get_wch.md) will return it.

?> Only one **ch** can be pushed before [`get_wch()`](/modules/curses/window/get_wch.md) is called.

### Syntax

```python
curses.unget_wch(ch)
```