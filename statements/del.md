# del

Deletion is recursively defined very similar to the way assignment is defined. Rather than spelling it out in full details, here are some hints.

Deletion of a target list recursively deletes each target, from left to right.

Deletion of a name removes the binding of that name from the local or global namespace, depending on whether the name occurs in a [`global`](/statements/global.md) statement in the same code block. If the name is unbound, a [`NameError`](/exceptions/NameError.md) exception will be raised.

Deletion of attribute references, subscriptions and slicings is passed to the primary object involved. Deletion of a slicing is in general equivalent to assignment of an empty slice of the right type (but even this is determined by the sliced object).

### Syntax

```python
del target
```