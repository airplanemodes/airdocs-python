# curses.has_extended_color_support()

Return `True` if the module supports extended colors. Otherwise, return `False`.

Extended color support allows more than 256 color pairs for terminals that support more than 16 colors (e.g. xterm-256color).

Extended color support requires ncurses version 6.1 or later.

### Syntax

```python
curses.has_extended_color_support()
```