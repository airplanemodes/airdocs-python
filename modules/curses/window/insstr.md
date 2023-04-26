# window.insstr()

Insert a character string (as many characters as will fit on the line) before the character under the cursor. All characters to the right of the cursor are shifted right, with the rightmost characters on the line being lost. The cursor position does not change (after moving to **y**, **x**, if specified).

### Syntax

```python
window.insstr(str)
window.insstr(str, attr)
window.insstr(y, x, str)
window.insstr(y, x, str, attr)
```