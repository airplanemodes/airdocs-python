# modulefinder.ModuleFinder()

This class provides `run_script()` and `report()` methods to determine the set of modules imported by a script.

**path** can be a list of directories to search for modules. If not specified, [`sys.path`](/modules/sys/path.md) is used.

**debug** sets the debugging level. Higher values make the class print debugging messages about what it’s doing.

**excludes** is a list of module names to exclude from the analysis.

**replace_paths** is a list of `(oldpath, newpath)` tuples that will be replaced in module paths.

### Syntax

```python
modulefinder.ModuleFinder(path=None, debug=0, excludes=[], replace_paths=[])
```