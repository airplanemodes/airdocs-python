# window.getch()

Get a character.

Note that the integer returned does not have to be in ASCII range: function keys, keypad keys and so on are represented by numbers higher than 255.

In no-delay mode, return `-1` if there is no input, otherwise wait until a key is pressed.

### Syntax

```python
window.getch()
window.getch(y, x)
```