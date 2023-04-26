# window.chgat()

Set the attributes of **num** characters at the current cursor position, or at position `(y, x)` if supplied. If **num** is not given or is `-1`, the attribute will be set on all the characters to the end of the line. This function moves cursor to position `(y, x)` if supplied. The changed line will be touched using the [`touchline()`](/modules/curses/window/touchline.md) method so that the contents will be redisplayed by the next window refresh.

### Syntax

```python
window.chgat(attr)
window.chgat(num, attr)
window.chgat(y, x, attr)
window.chgat(y, x, num, attr)
```