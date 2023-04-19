# curses.color_pair()

Return the attribute value for displaying text in the specified color pair.

Only the first 256 color pairs are supported. This attribute value can be combined with A_STANDOUT, A_REVERSE, and the other A_* attributes.

[`pair_number()`](/modules/curses/pair_number.md) is the counterpart to this function.

### Syntax

```python
curses.color_pair(pair_number)
```