# `type`

The [`object`](/abstraction/object/) class is the base class for all objects in Python.

The `type` class is a subclass of [`object`](/abstraction/object/).

All built-in types in Python, such as [`int`](/built-in-types/int/), [`float`](/built-in-types/float/), [`bool`](/built-in-types/bool.md), and [`str`](/built-in-types/str/), are subclasses of `type`.

```python
# Getting list with all classes
object.__subclasses__()

# Getting list with subclasses of int
int.__subclasses__()
type.__subclasses__(int)
```

Class is defined by [`class`](/statements/class.md) statement and contains **methods**.

Class objects support two kinds of operations: attribute references and instantiation.

Attribute references use the standard syntax used for all attribute references in Python: `obj.name`. Valid attribute names are all the names that were in the class’s namespace when the class object was created. So, if the class definition looked like this:

```python
class MyClass:
    """A simple example class"""
    i = 12345

    def f(self):
        return 'hello world'
```

then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a [`function`](/abstraction/function/) object, respectively. Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. [`__doc__`](/abstraction/type/__doc__.md) is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`.

Class *instantiation* uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class):

```python
x = MyClass()
```

creates a new *instance* of the class and assigns this object to the local variable `x`.

The instantiation operation (“calling” a class object) creates an empty object. Many classes like to create objects with instances customized to a specific initial state. Therefore a class may define a special method named [`__init__()`](/abstraction/object/__init__.md), like this:

```python
def __init__(self):
    self.data = []
```

When a class defines an [`__init__()`](/abstraction/object/__init__.md) method, class instantiation automatically invokes [`__init__()`](/abstraction/object/__init__.md) for the newly created class instance.

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
