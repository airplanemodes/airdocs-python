# multiprocessing.freeze_support()

Add support for when a program which uses [`multiprocessing`](/modules/multiprocessing/) has been frozen to produce a Windows executable (has been tested with *py2exe*, *PyInstaller* and *cx_Freeze*).

One needs to call this function straight after the `if __name__ == '__main__'` line of the main module. For example:

```python
from multiprocessing import Process, freeze_support

def f():
    print('hello world!')

if __name__ == '__main__':
    freeze_support()
    Process(target=f).start()
```

If the `freeze_support()` line is omitted then trying to run the frozen executable will raise [`RuntimeError`](/exceptions/RuntimeError.md).

Calling `freeze_support()` has no effect when invoked on any operating system other than Windows. In addition, if the module is being run normally by the Python interpreter on Windows (the program has not been frozen), then `freeze_support()` has no effect.

### Syntax

```python
multiprocessing.freeze_support()
```