# curses.tigetnum()

Return the value of the numeric capability corresponding to the terminfo capability name **capname** as an integer.

Return the value `-2` if **capname** is not a numeric capability, or `-1` if it is canceled or absent from the terminal description.

### Syntax

```python
curses.tigetnum(capname)
```