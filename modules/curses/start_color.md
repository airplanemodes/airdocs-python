# curses.start_color()

Must be called if the programmer wants to use colors, and before any other color manipulation routine is called. It is good practice to call this routine right after [`initscr()`](/modules/curses/initscr.md).

[`start_color()`](/modules/curses/start_color.md) initializes eight basic colors (black, red, green, yellow, blue, magenta, cyan, and white), and two global variables in the [`curses`](/modules/curses/) module, `COLORS` and `COLOR_PAIRS`, containing the maximum number of colors and color-pairs the terminal can support. It also restores the colors on the terminal to the values they had when the terminal was just turned on.

### Syntax

```python
curses.start_color()
```