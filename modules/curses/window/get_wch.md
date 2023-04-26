# window.get_wch()

Get a wide character.

Return a character for most keys, or an integer for function keys, keypad keys, and other special keys.

In no-delay mode, raise an exception if there is no input.

### Syntax

```python
window.get_wch()
window.get_wch(y, x)
```