# curses.use_default_colors()

`>>> curses.use_default_colors.__doc__`: Allow use of default values for colors on terminals supporting this feature.

Use this to support transparency in your application. The default color is assigned to the color number `-1`. After calling this function, `init_pair(x, curses.COLOR_RED, -1)` initializes, for instance, color pair **x** to a red foreground color on the default background.

### Syntax

```python
curses.use_default_colors()
```