# curses.init_pair()

`>>> curses.init_pair.__doc__`: Change the definition of a color-pair.

It takes three arguments: the number of the color-pair to be changed, the foreground color number, and the background color number.

The value of **pair_number** must be between `1` and `COLOR_PAIRS - 1` (the `0` color pair is wired to white on black and cannot be changed).

The value of **fg** and **bg** arguments must be between `0` and `COLORS - 1`, or, after calling [`use_default_colors()`](/modules/curses/use_default_colors.md), `-1`.

If the color-pair was previously initialized, the screen is refreshed and all occurrences of that color-pair are changed to the new definition.

### Syntax

```python
curses.init_pair(pair_number, fg, bg)
```