# str.islower()

`>>> str.islower.__doc__`: Return `True` if the string is a lowercase string, `False` otherwise.

A string is lowercase if all cased characters in the string are lowercase and there is at least one cased character in the string.

?> The lowercasing algorithm used is described in section 3.13 ‘Default Case Folding’ of the [Unicode Standard](https://www.unicode.org/versions/Unicode15.0.0/ch03.pdf).

### Syntax

```python
str.islower()
```

### Examples

```python
"lorem ipsum".islower() # True
"lazy Fox".islower() # False
```
