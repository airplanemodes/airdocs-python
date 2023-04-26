# window.insnstr()

Insert a character string (as many characters as will fit on the line) before the character under the cursor, up to **n** characters.

If **n** is zero or negative, the entire string is inserted. All characters to the right of the cursor are shifted right, with the rightmost characters on the line being lost. The cursor position does not change (after moving to **y**, **x**, if specified).

### Syntax

```python
window.insnstr(str, n)
window.insnstr(str, n, attr)
window.insnstr(y, x, str, n)
window.insnstr(y, x, str, n, attr)
```