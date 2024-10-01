# textwrap.fill()

Wraps the single paragraph in **text**, and returns a single string containing the wrapped paragraph.

`fill()` is shorthand for:

```python
"\n".join(wrap(text, ...))
```

In particular, `fill()` accepts exactly the same keyword arguments as [`wrap()`](/modules/textwrap/wrap.md).

### Syntax

```python
textwrap.fill(
    text, width=70, *, initial_indent='', subsequent_indent='',
    expand_tabs=True, replace_whitespace=True, fix_sentence_endings=False,
    break_long_words=True, drop_whitespace=True, break_on_hyphens=True,
    tabsize=8, max_lines=None, placeholder=' [...]'
)
```
