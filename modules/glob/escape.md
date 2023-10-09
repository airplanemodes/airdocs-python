# glob.escape()

Escape all special characters (`'?'`, `'*'` and `'['`).

This is useful if you want to match an arbitrary literal string that may have special characters in it.

Special characters in drive/UNC sharepoints are not escaped, e.g. on Windows `escape('//?/c:/Quo vadis?.txt')` returns `'//?/c:/Quo vadis[?].txt'`.

### Syntax

```python
glob.escape(pathname)
```