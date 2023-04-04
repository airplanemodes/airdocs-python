# str.format()

Perform a string formatting operation. The string on which this method is called can contain literal text or replacement fields delimited by braces `{}`. Each replacement field contains either the numeric index of a positional argument, or the name of a keyword argument. Returns a copy of the string where each replacement field is replaced with the string value of the corresponding argument.

### Syntax

```python
str.format(*args, **kwargs)
```

### Examples

```python
x = 1
y = 2
sumstring = "The sum of x + y is {0}".format(x+y)
print(sumstring) # The sum of x + y is 3
```