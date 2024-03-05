# types.prepare_class()

Calculates the appropriate metaclass and creates the class namespace.

The arguments are the components that make up a class definition header: the class name, the base classes (in order) and the keyword arguments (such as `metaclass`).

The return value is a 3-tuple: `metaclass, namespace, kwds`.

*metaclass* is the appropriate metaclass, *namespace* is the prepared class namespace and *kwds* is an updated copy of the passed in **kwds** argument with any `'metaclass'` entry removed. If no **kwds** argument is passed in, this will be an empty [`dict`](/built-in-types/dict/).

### Syntax

```python
types.prepare_class(name, bases=(), kwds=None)
```
