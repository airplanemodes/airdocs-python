# window.subwin()

Return a sub-window, whose upper-left corner is at `(begin_y, begin_x)`, and whose width/height is **ncols**/**nlines**.

By default, the sub-window will extend from the specified position to the lower right corner of the window.

### Syntax

```python
window.subwin(begin_y, begin_x)
window.subwin(nlines, ncols, begin_y, begin_x)
```