# curses.doupdate()

Update the physical screen.

The curses library keeps two data structures, one representing the current physical screen contents and a virtual screen representing the desired next state. The `doupdate()` ground updates the physical screen to match the virtual screen.

The virtual screen may be updated by a [`noutrefresh()`](/modules/curses/window/noutrefresh.md) call after write operations such as [`addstr()`](/modules/curses/window/addstr.md) have been performed on a window. The normal [`refresh()`](/modules/curses/window/refresh.md) call is simply [`noutrefresh()`](/modules/curses/window/noutrefresh.md) followed by `doupdate()`. If you have to update multiple windows, you can speed performance and perhaps reduce screen flicker by issuing [`noutrefresh()`](/modules/curses/window/noutrefresh.md) calls on all windows, followed by a single `doupdate()`.

### Syntax

```python
curses.doupdate()
```