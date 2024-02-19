# property()

Return a property attribute.

- **fget** is a function for getting an attribute value.
- **fset** is a function for setting an attribute value.
- **fdel** is a function for deleting an attribute value.
- **doc** creates a docstring for the attribute.

### Syntax

```python
property(fget=None, fset=None, fdel=None, doc=None)
```

### Examples

A typical use is to define a managed attribute `x`:

```python
class C:
    def __init__(self):
        self._x = None

    def getx(self):
        return self._x

    def setx(self, value):
        self._x = value

    def delx(self):
        del self._x

    x = property(getx, setx, delx, "I'm the 'x' property.")
```

If `c` is an instance of `C`, `c.x` will invoke the getter, `c.x = value` will invoke the setter, and `del c.x` the deleter.

If given, **doc** will be the docstring of the property attribute. Otherwise, the property will copy **fget**’s docstring (if it exists). This makes it possible to create read-only properties easily using `property()` as a decorator:

```python
class Parrot:
    def __init__(self):
        self._voltage = 100000

    @property
    def voltage(self):
        """Get the current voltage."""
        return self._voltage
```

The `@property` decorator turns the `voltage()` method into a “getter” for a read-only attribute with the same name, and it sets the docstring for `voltage` to `“Get the current voltage.”`.

```python
@getter
@setter
@deleter
```

A property object has `getter`, `setter`, and `deleter` methods usable as decorators that create a copy of the property with the corresponding accessor function set to the decorated function. This is best explained with an example:
```python
class C:
    def __init__(self):
        self._x = None

    @property
    def x(self):
        """I'm the 'x' property."""
        return self._x

    @x.setter
    def x(self, value):
        self._x = value

    @x.deleter
    def x(self):
        del self._x
```
This code is exactly equivalent to the first example. Be sure to give the additional functions the same name as the original property (`x` in this case.)

The returned property object also has the attributes `fget`, `fset`, and `fdel` corresponding to the constructor arguments.
