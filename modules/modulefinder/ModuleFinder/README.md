# modulefinder.ModuleFinder()

This class provides [`run_script()`](/modules/modulefinder/ModuleFinder/run_script.md) and [`report()`](/modules/modulefinder/ModuleFinder/report.md) methods to determine the set of modules imported by a script.

**path** can be a list of directories to search for modules. If not specified, [`sys.path`](/modules/sys/path.md) is used.

**debug** sets the debugging level. Higher values make the class print debugging messages about what it’s doing.

**excludes** is a list of module names to exclude from the analysis.

**replace_paths** is a list of `(oldpath, newpath)` tuples that will be replaced in module paths.

### Syntax

```python
modulefinder.ModuleFinder(path=None, debug=0, excludes=[], replace_paths=[])
```

### Examples

The script that is going to get analyzed later on (bacon.py):

```python
import re, itertools

try:
    import baconhameggs
except ImportError:
    pass

try:
    import guido.python.ham
except ImportError:
    pass
```

The script that will output the report of bacon.py:

```python
from modulefinder import ModuleFinder

finder = ModuleFinder()
finder.run_script('bacon.py')

print('Loaded modules:')
for name, mod in finder.modules.items():
    print('%s: ' % name, end='')
    print(','.join(list(mod.globalnames.keys())[:3]))

print('-'*50)
print('Modules not imported:')
print('\n'.join(finder.badmodules.keys()))
```

Sample output (may vary depending on the architecture):

```
Loaded modules:
_types:
copyreg:  _inverted_registry,_slotnames,__all__
re._compiler:  isstring,_sre,_optimize_unicode
_sre:
re._constants:  REPEAT_ONE,makedict,AT_END_LINE
sys:
re:  __module__,finditer,_expand
itertools:
__main__:  re,itertools,baconhameggs
re._parser:  _PATTERNENDERS,SRE_FLAG_UNICODE
array:
types:  __module__,IntType,TypeType
---------------------------------------------------
Modules not imported:
guido.python.ham
baconhameggs
```