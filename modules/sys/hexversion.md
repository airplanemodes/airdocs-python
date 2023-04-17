# sys.hexversion

The version number encoded as a single integer.

This is guaranteed to increase with each version, including proper support for non-production releases.

This is called `hexversion` since it only really looks meaningful when viewed as the result of passing it to the built-in [`hex()`](/built-in-functions/hex.md) function. The named tuple [`sys.version_info`](/modules/sys/version_info.md) may be used for a more human-friendly encoding of the same information.

### Syntax

```python
sys.hexversion
```

### Examples

For example, to test that the Python interpreter is at least version 1.5.2, use:

```python
if sys.hexversion >= 0x010502F0:
    # use some advanced feature
    # ...
else:
    # use an alternative implementation or warn the user
    # ...
```