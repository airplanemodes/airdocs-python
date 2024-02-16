# repr()

`>>> repr.__doc__`: Return the canonical string representation of the **object**.

For many types, this function makes an attempt to return a string that would yield an object with the same value when passed to [`eval()`](/built-in-functions/eval.md). Otherwise, the representation is a string enclosed in angle brackets that contains the name of the type of the object together with additional information often including the name and address of the object. A class can control what this function returns for its instances by defining a `__repr__()` method. If `sys.displayhook()` is not accessible, this function will raise [`RuntimeError`](/exceptions/RuntimeError.md).

### Syntax

```python
repr(object)
```

### Examples

```python
>>> repr(1) # '1'
>>> repr([]) # '[]'
>>> repr(int) # "<class 'int'>"
```
