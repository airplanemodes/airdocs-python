# curses.mousemask()

`>>> curses.mousemask.__doc__`: Set the mouse events to be reported, and return a tuple `(availmask, oldmask)`.

**availmask** indicates which of the specified mouse events can be reported. On complete failure it returns `0`.

**oldmask** is the previous value of the given window’s mouse event mask.

If this function is never called, no mouse events are ever reported.

### Syntax

```python
curses.mousemask(mousemask)
```