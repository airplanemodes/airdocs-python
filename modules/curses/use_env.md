# curses.use_env()

`>>> curses.use_end.__doc__`: Use environment variables `LINES` and `COLUMNS`.

If used, this function should be called before [`initscr()`](/modules/curses/initscr.md) or newterm are called.

When **flag** is `False`, the values of lines and columns specified in the terminfo database will be used, even if environment variables `LINES` and `COLUMNS` (used by default) are set, or if curses is running in a window (in which case default behavior would be to use the window size if `LINES` and `COLUMNS` are not set).

### Syntax

```python
curses.use_env(flag)
```