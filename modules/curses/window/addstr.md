# window.addstr()

Paint the character string **str** at `(y, x)` with attributes **attr**, overwriting anything previously on the display.

?> Writing outside the window, subwindow, or pad raises [`curses.error`](/modules/curses/error.md). Attempting to write to the lower right corner of a window, subwindow, or pad will cause an exception to be raised after the string is printed.

### Syntax

```python
window.addstr(str)
window.addstr(str, attr)
window.addstr(y, x, str)
window.addstr(y, x, str, attr)
```