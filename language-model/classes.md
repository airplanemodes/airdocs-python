# Classes

The `object` class is the base class for all objects in Python. The `type` class is a subclass of `object`. All built-in types in Python, such as [`int`](/built-in-types/int/), [`float`](/built-in-types/float/), [`bool`](/built-in-types/bool.md), and [`str`](/built-in-types/str/), are subclasses of `type`.

```python
# Getting list with all classes
object.__subclasses__()

# Getting list with subclasses of int
int.__subclasses__()
type.__subclasses__(int)
```

Class is defined by [`class`](/statements/class.md) statement and contains **methods**.

Method is a function which is defined inside a class body. If called as an attribute of an instance of that class, the method will get the instance object as its first argument (which is usually called self).

```python
str.__sizeof__("hi") # 51
"hi".__sizeof__() # 51
```

Methods can be listed using [`dir()`](/built-in-functions/dir.md) function:
```python
dir(list)
dir(dict)
```