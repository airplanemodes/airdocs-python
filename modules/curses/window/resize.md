# window.resize()

Reallocate storage for a curses window to adjust its dimensions to the specified values. If either dimension is larger than the current values, the window’s data is filled with blanks that have the current background rendition (as set by [`bkgdset()`](/modules/curses/window/bkgdset.md)) merged into them.

### Syntax

```python
window.resize(nlines, ncols)
```