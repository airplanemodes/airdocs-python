# textwrap.shorten()

Collapse and truncate the given **text** to fit in the given **width**.

First the whitespace in **text** is collapsed (all whitespace is replaced by single spaces). If the result fits in the **width**, it is returned. Otherwise, enough words are dropped from the end so that the remaining words plus the **placeholder** fit within **width**:

```python
>>> textwrap.shorten("Hello  world!", width=12)
# 'Hello world!'
>>> textwrap.shorten("Hello  world!", width=11)
# 'Hello [...]'
>>> textwrap.shorten("Hello world", width=10, placeholder="...")
# 'Hello...'
```

Optional keyword arguments correspond to the instance attributes of [`TextWrapper`](/modules/textwrap/TextWrapper/). Note that the whitespace is collapsed before the text is passed to the [`TextWrapper`](/modules/textwrap/TextWrapper/) [`fill()`](/modules/textwrap/fill.md) function, so changing the value of **tabsize**, **expand_tabs**, **drop_whitespace**, and **replace_whitespace** will have no effect.

### Syntax

```python
textwrap.shorten(
    text, width, *, fix_sentence_endings=False, break_long_words=True,
    break_on_hyphens=True, placeholder=' [...]'
)
```
