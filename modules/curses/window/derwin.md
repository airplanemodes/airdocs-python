# window.derwin()

An abbreviation for “derive window”, `derwin()` is the same as calling [`subwin()`](/modules/curses/window/subwin.md), except that **begin_y** and **begin_x** are relative to the origin of the window, rather than relative to the entire screen. Return a window object for the derived window.

### Syntax

```python
window.derwin(begin_y, begin_x)
window.derwin(nlines, ncols, begin_y, begin_x)
```