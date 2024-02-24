# str.isidentifier()

`>>> str.isidentifier.__doc__`: Return `True` if the string is a valid Python identifier, `False` otherwise.

?> To test whether string is a reserved identifier, such as [`def`](/statements/def.md) or [`class`](/statements/class.md) call [`keyword.iskeyword()`](/modules/keyword/iskeyword.md).

### Syntax

```python
str.isidentifier()
```

### Examples

```python
>>> "hello".isidentifier() # True
>>> "123".isidentifier() # False
```
