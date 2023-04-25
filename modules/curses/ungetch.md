# curses.ungetch()

`>>> curses.ungetch.__doc__`: Push **ch** so the next [`getch()`](/modules/curses/window/getch.md) will return it.

?> Only one **ch** can be pushed before [`getch()`](/modules/curses/window/getch.md) is called.

### Syntax

```python
curses.ungetch(ch)
```