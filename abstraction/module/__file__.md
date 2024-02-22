# module.\_\_file\_\_

The pathname of the file from which the module was loaded, if it was loaded from a file. 

The `__file__` attribute may be missing for certain types of modules, such as C modules that are statically linked into the interpreter. For extension modules loaded dynamically from a shared library, it’s the pathname of the shared library file.

### Syntax

```python
module.__file__
```
