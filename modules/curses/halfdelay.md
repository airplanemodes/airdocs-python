# curses.halfdelay()

Used for half-delay mode, which is similar to cbreak mode in that characters typed by the user are immediately available to the program. However, after blocking for **tenths** tenths of seconds, raise an exception if nothing has been typed.

The value of **tenths** must be a number between `1` and `255`.

Use [`nocbreak()`](/modules/curses/nocbreak.md) to leave half-delay mode.

### Syntax

```python
curses.halfdelay(tenths)
```