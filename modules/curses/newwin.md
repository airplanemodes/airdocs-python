# curses.newwin()

Return a new window, whose left-upper corner is at `(begin_y, begin_x)`, and whose height/width is **nlines**/**ncols**.

By default, the window will extend from the specified position to the lower right corner of the screen.

### Syntax

```python
curses.newwin(nlines, ncols)
curses.newwin(nlines, ncols, begin_y=0, begin_x=0)
```