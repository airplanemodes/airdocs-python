# curses.color_content()

Return the intensity of the red, green, and blue (RGB) components in the color **color_number**, which must be between `0` and `COLORS - 1`. Return a 3-tuple, containing the R,G,B values for the given color, which will be between `0` (no component) and `1000` (maximum amount of component).

### Syntax

```python
curses.color_content(color_number)
```