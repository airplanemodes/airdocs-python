# curses.tigetstr()

Return the value of the string capability corresponding to the terminfo capability name **capname** as a [`bytes`](/built-in-types/bytes/) object. 

Return `None` if **capname** is not a terminfo “string capability”, or is canceled or absent from the terminal description.

### Syntax

```python
curses.tigetstr(capname)
```