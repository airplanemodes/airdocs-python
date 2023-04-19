# curses.cbreak()

`curses.cbreak.__doc__`: Enter cbreak mode.

In cbreak mode (sometimes called “rare” mode) normal tty line buffering is turned off and characters are available to be read one by one. However, unlike raw mode, special characters (interrupt, quit, suspend, and flow control) retain their effects on the tty driver and calling program. Calling first [`raw()`](/modules/curses/raw.md) then `cbreak()` leaves the terminal in cbreak mode.

### Syntax

```python
curses.cbreak()
```