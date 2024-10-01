# textwrap.wrap()

Wraps the single paragraph in **text** (a string) so every line is at most **width** characters long. Returns a list of output lines, without final newlines.

Optional keyword arguments correspond to the instance attributes of [`TextWrapper`](/modules/textwrap/TextWrapper/).

?> See the [`TextWrapper.wrap()`](/modules/textwrap/TextWrapper/wrap.md) method for additional details on how `wrap()` behaves.

### Syntax

```python
textwrap.wrap(
    text, width=70, *, initial_indent='', subsequent_indent='',
    expand_tabs=True, replace_whitespace=True, fix_sentence_endings=False,
    break_long_words=True, drop_whitespace=True, break_on_hyphens=True,
    tabsize=8, max_lines=None, placeholder=' [...]'
)
```
