# window.getkey()

Get a character, returning a string instead of an integer, as [`getch()`](/modules/curses/window/getch.md) does.

Function keys, keypad keys and other special keys return a multibyte string containing the key name.

In no-delay mode, raise an exception if there is no input.

### Syntax

```python
window.getkey()
window.getkey(y, x)
```