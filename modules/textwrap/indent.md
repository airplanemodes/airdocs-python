# textwrap.indent()

Add prefix to the beginning of selected lines in **text**.

Lines are separated by calling `text.splitlines(True)`.

By default, **prefix** is added to all lines that do not consist solely of whitespace (including any line endings).

### Syntax

```python
textwrap.indent(text, prefix, predicate=None)
```

### Example

```python
>>> s = 'hello\n\n \nworld'
>>> indent(s, '  ')
# '  hello\n\n \n  world'
```

The optional **predicate** argument can be used to control which lines are indented. For example, it is easy to add **prefix** to even empty and whitespace-only lines:

```python
>>> print(indent(s, '+ ', lambda line: True))
# + hello
# +
# +
# + world
```
