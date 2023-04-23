# curses.resizeterm()

`>>> curses.resizeterm.__doc__`: Resize the standard and current windows to the specified dimensions.

Adjusts other bookkeeping data used by the curses library that record the window dimensions (in particular the SIGWINCH handler).

### Syntax

```python
curses.resizeterm(nlines, ncols)
```