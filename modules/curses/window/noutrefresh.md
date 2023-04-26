# window.noutrefresh()

Mark for refresh but wait.

This function updates the data structure representing the desired state of the window, but does not force an update of the physical screen. To accomplish that, call [`doupdate()`](/modules/curses/doupdate.md).

### Syntax

```python
window.noutrefresh()
```