# sys.implementation

An object containing information about the implementation of the currently running Python interpreter. The following attributes are required to exist in all Python implementations.

**name** is the implementation’s identifier, e.g. `'cpython'`. The actual string is defined by the Python implementation, but it is guaranteed to be lower case.

**version** is a named tuple, in the same format as [`sys.version_info`](/modules/sys/version_info.md). It represents the version of the Python *implementation*. This has a distinct meaning from the specific version of the Python *language* to which the currently running interpreter conforms, which [`sys.version_info`](/modules/sys/version_info.md) represents. For example, for PyPy 1.8 `sys.implementation.version` might be `sys.version_info(1, 8, 0, 'final', 0)`, whereas `sys.version_info` would be `sys.version_info(2, 7, 2, 'final', 0)`. For CPython they are the same value, since it is the reference implementation.

**hexversion** is the implementation version in hexadecimal format, like [`sys.hexversion`](/modules/sys/hexversion.md).

**cache_tag** is the tag used by the import machinery in the filenames of cached modules. By convention, it would be a composite of the implementation’s name and version, like `'cpython-33'`. However, a Python implementation may use some other value if appropriate. If **cache_tag** is set to `None`, it indicates that module caching should be disabled.

`sys.implementation` may contain additional attributes specific to the Python implementation. These non-standard attributes must start with an underscore, and are not described here. Regardless of its contents, `sys.implementation` will not change during a run of the interpreter, nor between implementation versions. It may change between Python language versions, however.

?> The addition of new required attributes must go through the normal PEP process. See [**PEP 421**](https://peps.python.org/pep-0421/) for more information.

### Syntax

```python
sys.implementation
```