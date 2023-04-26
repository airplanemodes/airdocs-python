# window.enclose()

Test whether the given pair of screen-relative character-cell coordinates are enclosed by the given window, returning `True` or `False`.

It is useful for determining what subset of the screen windows enclose the location of a mouse event.

### Syntax

```python
window.enclose(y, x)
```