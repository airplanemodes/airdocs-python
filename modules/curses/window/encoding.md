# window.encoding

Encoding used to encode method arguments (Unicode strings and characters).

The encoding attribute is inherited from the parent window when a subwindow is created, for example with [`window.subwin()`](/modules/curses/window/subwin.md).

By default, current locale encoding is used (see [`locale.getencoding()`](/modules/locale/getencoding.md)).

### Syntax

```python
window.encoding
```