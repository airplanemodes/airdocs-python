# curses.tigetflag()

Return the value of the Boolean capability corresponding to the terminfo capability name **capname** as an integer.

Return the value `-1` if **capname** is not a Boolean capability, or `0` if it is canceled or absent from the terminal description.

### Syntax

```python
curses.tigetflag(capname)
```