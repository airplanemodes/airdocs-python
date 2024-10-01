# textwrap.TextWrapper()

The `TextWrapper` constructor accepts a number of optional keyword arguments. Each keyword argument corresponds to an instance attribute, so for example:

```python
wrapper = TextWrapper(initial_indent="* ")
```

is the same as:

```python
wrapper = TextWrapper()
wrapper.initial_indent = "* "
```

You can reuse the same `TextWrapper` object many times, and you can change any of its options through direct assignment to instance attributes between uses.

### Syntax

```python
textwrap.TextWrapper(**kwargs)
```
