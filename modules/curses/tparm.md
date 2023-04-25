# curses.tparm()

Instantiate the [`bytes`](/built-in-types/bytes/) object **str** with the supplied parameters, where **str** should be a parameterized string obtained from the terminfo database.

E.g. `tparm(tigetstr("cup"), 5, 3)` could result in `b'\033[6;4H'`, the exact result depending on terminal type.

### Syntax

```python
curses.tparm(str)
```