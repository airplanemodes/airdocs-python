# curses.resize_term()

Backend function used by [`resizeterm()`](/modules/curses/resizeterm.md), performing most of the work. When resizing the windows, `resize_term()` blank-fills the areas that are extended. The calling application should fill in these areas with appropriate data. The `resize_term()` function attempts to resize all windows. However, due to the calling convention of pads, it is not possible to resize these without additional interaction with the application.

### Syntax

```python
curses.resize_term(nlines, ncols)
```