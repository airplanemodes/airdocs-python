# type.\_\_subclasses\_\_()

Each class keeps a list of weak references to its immediate subclasses. This method returns a list of all those references still alive. The list is in definition order.

### Syntax

```python
type.__subclasses__()
```

### Example

```python
>>> int.__subclasses__()
# [<class 'bool'>, <enum 'IntEnum'>, <flag 'IntFlag'>, <class 're._constants._NamedIntConstant'>]
```
