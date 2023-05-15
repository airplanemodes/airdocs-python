# enum

**Support for enumerations.**

> Source code: [`Lib/enum.py`](https://github.com/python/cpython/tree/3.11/Lib/enum.py)

An enumeration:

* is a set of symbolic names (members) bound to unique values.
* can be iterated over to return its canonical (i.e. non-alias) members in definition order.
* uses *call* syntax to return members by value.
* uses *index* syntax to return members by name.

Enumerations are created either by using [`class`](/statements/class.md) syntax, or by using function-call syntax:

```python
>>> from enum import Enum
>>> # class syntax
>>> class Color(Enum):
...     RED = 1
...     GREEN = 2
...     BLUE = 3

>>> # functional syntax
>>> Color = Enum('Color', ['RED', 'GREEN', 'BLUE'])
```

* The class `Color` is an *enumeration* (or *enum*).
* The attributes `Color.RED`, `Color.GREEN`, etc., are *enumeration members* (or *members*) and are functionally constants.
* The enum members have *names* and *values* (the name of `Color.RED` is `RED`, the value of `Color.BLUE` is `3`, et cetera).