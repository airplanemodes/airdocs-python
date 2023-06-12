# @functools.singledispatch

Transform a function into a single-dispatch generic function.

To define a generic function, decorate it with the `@singledispatch` decorator. When defining a function using `@singledispatch`, note that the dispatch happens on the type of the first argument:

```python
from functools import singledispatch
>>> @singledispatch
... def fun(arg, verbose=False):
...     if verbose:
...         print("Let me just say,", end=" ")
...     print(arg)
```

To add overloaded implementations to the function, use the `register()` attribute of the generic function, which can be used as a decorator. For functions annotated with types, the decorator will infer the type of the first argument automatically:

```python
@fun.register
... def _(arg: int, verbose=False):
...     if verbose:
...         print("Strength in numbers, eh?", end=" ")
...     print(arg)
...
>>> @fun.register
... def _(arg: list, verbose=False):
...     if verbose:
...         print("Enumerate this:")
...     for i, elem in enumerate(arg):
...         print(i, elem)
```

[`types.UnionType`](/modules/types/UnionType.md) and [`typing.Union`](/modules/typing/Union) can also be used:

```python
@fun.register
... def _(arg: int | float, verbose=False):
...     if verbose:
...         print("Strength in numbers, eh?", end=" ")
...     print(arg)
...
>>> from typing import Union
>>> @fun.register
... def _(arg: Union[list, set], verbose=False):
...     if verbose:
...         print("Enumerate this:")
...     for i, elem in enumerate(arg):
...         print(i, elem)
...
```

For code which doesn’t use type annotations, the appropriate type argument can be passed explicitly to the decorator itself:

```python
@fun.register(complex)
... def _(arg, verbose=False):
...     if verbose:
...         print("Better than complicated.", end=" ")
...     print(arg.real, arg.imag)
...
```

To enable registering lambdas and pre-existing functions, the `register()` attribute can also be used in a functional form:

```python
def nothing(arg, verbose=False):
...     print("Nothing.")
...
>>> fun.register(type(None), nothing)
```

The `register()` attribute returns the undecorated function. This enables decorator stacking, pickling, and the creation of unit tests for each variant independently:

```python
@fun.register(float)
... @fun.register(Decimal)
... def fun_num(arg, verbose=False):
...     if verbose:
...         print("Half of your number:", end=" ")
...     print(arg / 2)
...
>>> fun_num is fun # False
```

When called, the generic function dispatches on the type of the first argument:

```python
>>> fun("Hello, world.") # Hello, world.
>>> fun("test.", verbose=True) # Let me just say, test.
>>> fun(42, verbose=True) # Strength in numbers, eh? 42
>>> fun(['spam', 'spam', 'eggs', 'spam'], verbose=True)
# Enumerate this:
# 0 spam
# 1 spam
# 2 eggs
# 3 spam
>>> fun(None) # Nothing.
>>> fun(1.23) # 0.615
```

Where there is no registered implementation for a specific type, its method resolution order is used to find a more generic implementation. The original function decorated with `@singledispatch` is registered for the base [`object`](/built-in-functions/object.md) type, which means it is used if no better implementation is found.

If an implementation is registered to an abstract base class, virtual subclasses of the base class will be dispatched to that implementation:

```python
from collections.abc import Mapping
>>> @fun.register
... def _(arg: Mapping, verbose=False):
...     if verbose:
...         print("Keys & Values")
...     for key, value in arg.items():
...         print(key, "=>", value)
...
>>> fun({"a": "b"}) # a => b
```

To check which implementation the generic function will choose for a given type, use the `dispatch()` attribute:

```python
>>> fun.dispatch(float)
# <function fun_num at 0x1035a2840>
>>> fun.dispatch(dict) # note: default implementation
# <function fun at 0x103fe0000>
```

To access all registered implementations, use the read-only `registry` attribute:

```python
>>> fun.registry.keys()
# dict_keys([<class 'NoneType'>, <class 'int'>, <class 'object'>,
#           <class 'decimal.Decimal'>, <class 'list'>,
#           <class 'float'>])
>>> fun.registry[float] # <function fun_num at 0x1035a2840>
>>> fun.registry[object] # <function fun at 0x103fe0000>
```

### Syntax

```python
@functools.singledispatch
```