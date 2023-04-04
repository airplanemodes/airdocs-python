# slice()

Return a slice object representing the set of indices specified by `range(start, stop, step)`. 

The **start** and **step** arguments default to `None`.

?> Slice objects have read-only data attributes `start`, `stop`, and `step` which merely return the argument values (or their default). They have no other explicit functionality. However, they are used by NumPy and other third-party packages.

### Syntax

```python
slice(stop)
slice(start, stop, step=1)
```