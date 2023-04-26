# sys.winver

> **Availability:** Windows.

The version number used to form registry keys on Windows platforms. This is stored as string resource 1000 in the Python DLL. The value is normally the major and minor versions of the running Python interpreter. It is provided in the `sys` module for informational purposes. Modifying this value has no effect on the registry keys used by Python.

### Syntax

```python
sys.winver
```