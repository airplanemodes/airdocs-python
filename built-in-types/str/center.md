# str.center()

`>>> str.center.__doc__`: Return a centered string of length **width**.

Padding is done using the specified **fillchar** (default is an ASCII space). The original string is returned if **width** is less than or equal to original length.

### Syntax

```python
str.center(width)
str.center(width, fillchar)
```

### Example

```python
>>> greetings = "hello world!"
>>> greetings.center(20) # '    hello world!    '
```
