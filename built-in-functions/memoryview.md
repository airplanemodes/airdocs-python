# memoryview()

`>>> memoryview.__doc__`: Create a new `memory` object which references the given **object**.

### Syntax

```python
memoryview(object)
```

!> The function will return [`TypeError`](/exceptions/TypeError.md) in case of passing a not bytes-like object as an argument.