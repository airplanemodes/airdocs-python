# curses.filter()

The `filter()` routine, if used, must be called before [`initscr()`](/modules/curses/initscr.md) is called. The effect is that, during those calls, LINES is set to `1`. The capabilities `clear`, `cup`, `cud`, `cud1`, `cuu1`, `cuu`, `vpa` are disabled. And the `home` string is set to the value of `cr`. The effect is that the cursor is confined to the current line, and so are screen updates. This may be used for enabling character-at-a-time line editing without touching the rest of the screen.

### Syntax

```python
curses.filter()
```