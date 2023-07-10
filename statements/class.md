# class

A `class` definition defines a class object.

A class definition is an executable statement. The inheritance list usually gives a list of base classes, so each item in the list should evaluate to a class object which allows subclassing. Classes without an inheritance list inherit, by default, from the base class `object`.

### Syntax

```python
class ClassName:
    methods

class ClassName(object):
    methods

class SubClassName(ClassName):
    methods
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