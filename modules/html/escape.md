# html.escape()

Convert the characters `&`, `<` and `>` in string **s** to HTML-safe sequences.

Use this if you need to display text that might contain such characters in HTML. If the optional flag **quote** is true, the characters (`) and (`) are also translated. This helps for inclusion in an HTML attribute value delimited by quotes, as in `<a href="...">`.

### Syntax

```python
html.escape(s, quote=True)
```