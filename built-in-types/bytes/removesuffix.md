# bytes.removesuffix()

If the binary data ends with the **suffix** string and that suffix is not empty, return `bytes[:-len(suffix)]`. Otherwise, return a copy of the original binary data.

The **suffix** may be any bytes-like object.

### Syntax

```python
bytes.removesuffix(suffix, /)
```

### Example

```python
>>> b'MiscTests'.removesuffix(b'Tests')    # b'Misc'
>>> b'TmpDirMixin'.removesuffix(b'Tests')  # b'TmpDirMixin'
```
