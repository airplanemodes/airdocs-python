# sys.meta_path

A list of meta path finder objects that have their [`find_spec()`](/modules/importlib/abc/MetaPathFinder/find_spec.md) methods called to see if one of the objects can find the module to be imported. By default, it holds entries that implement Python’s default import semantics. The [`find_spec()`](/modules/importlib/abc/MetaPathFinder/find_spec.md) method is called with at least the absolute name of the module being imported. If the module to be imported is contained in a package, then the parent package’s `__path__` attribute is passed in as a second argument. The method returns a module spec, or `None` if the module cannot be found.

### Syntax

```python
sys.meta_path
```