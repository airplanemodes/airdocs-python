# window.addch()

Paint character **ch** at `(y, x)` with attributes **attr**, overwriting any character previously painted at that location.

By default, the character position and attributes are the current settings for the window object.

?> Writing outside the window, subwindow, or pad raises a [`curses.error`](/modules/curses/error.md). Attempting to write to the lower right corner of a window, subwindow, or pad will cause an exception to be raised after the character is printed.

### Syntax

```python
window.addch(ch)
window.addch(ch, attr)
window.addch(y, x, ch)
window.addch(y, x, ch, attr)
```