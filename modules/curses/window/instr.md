# window.instr()

Return a [`bytes`](/built-in-types/bytes/) object of characters, extracted from the window starting at the current cursor position, or at **y**, **x** if specified. Attributes are stripped from the characters. If **n** is specified, `instr()` returns a string at most **n** characters long (exclusive of the trailing NUL).

### Syntax

```python
window.instr()
window.instr(n)
window.instr(y, x, n)
```