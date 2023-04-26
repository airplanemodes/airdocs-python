# window.bkgdset()

Set the window’s background.

A window’s background consists of a character and any combination of attributes. The attribute part of the background is combined (OR’ed) with all non-blank characters that are written into the window. Both the character and attribute parts of the background are combined with the blank characters. The background becomes a property of the character and moves with the character through any scrolling and insert/delete line/character operations.

### Syntax

```python
window.bkgdset(ch)
window.bkgdset(ch, attr)
```