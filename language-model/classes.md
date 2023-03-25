# Classes
The `object` class is the base class for all objects in Python. The `type` class is a subclass of `object`. All built-in types in Python, such as `int`, `float`, `bool`, and `str`, are subclasses of `type`.

```python
# Getting list with all classes
object.__subclasses__()

# Getting list with subclasses of int
int.__subclasses__()
type.__subclasses__(int)
```

Class is defined by [`class`](/statements/class.md) statement and consist of **methods**.

Method is a function which is defined inside a class body. If called as an attribute of an instance of that class, the method will get the instance object as its first argument (which is usually called self).