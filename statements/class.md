# class

Defines a class object.

A class definition is an executable statement. The inheritance list usually gives a list of base classes, so each item in the list should evaluate to a class object which allows subclassing. Classes without an inheritance list inherit, by default, from the base class [`object`](/abstraction/object/).

Class definitions, like function definitions ([`def`](/statements/def.md) statements) must be executed before they have any effect.

In practice, the statements inside a class definition will usually be function definitions, but other statements are allowed, and sometimes useful.

The function definitions inside a class normally have a peculiar form of argument list, dictated by the calling conventions for methods.

When a class definition is entered, a new namespace is created, and used as the local scope — thus, all assignments to local variables go into this new namespace. In particular, function definitions bind the name of the new function here.

When a class definition is left normally (via the end), a class object is created. This is basically a wrapper around the contents of the namespace created by the class definition. The original local scope (the one in effect just before the class definition was entered) is reinstated, and the class object is bound here to the class name given in the class definition header.

### Syntax

```python
class ClassName:
    suite

class ClassName(object):
    suite

class SubClassName(ClassName):
    suite
```

### Examples

```python
# Class creation
class Point():
    def __init__(self):
        self.x = 0
        self.y = 0

# Initialization of two instances
a = Point()
b = Point()

# Attribute access and modification
print(a.x, a.y) # 0 0
print(b.x, b.y) # 0 0

a.x = 10; a.y = 5
b.x = 2; b.y = -1

print(a.x, a.y) # 10 5
print(b.x, b.y) # 2 -1
```
