# curses.unctrl()

Return a [`bytes`](/built-in-types/bytes/) object which is a printable representation of the character **ch**.

Control characters are represented as a caret followed by the character, for example as `b'^C'`. Printing characters are left as they are.

### Syntax

```python
curses.unctrl(ch)
```