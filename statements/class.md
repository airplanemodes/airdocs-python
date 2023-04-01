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
class Car:
    def __init__(self, model, color):
        self.model = model
        self.color = color
    
    def ride(self):
        pass

    def stop(self):
        pass
```