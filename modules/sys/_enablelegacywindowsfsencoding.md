# sys._enablelegacywindowsfsencoding()

> **Availability:** Windows.

Changes the filesystem encoding and error handler to ‘mbcs’ and ‘replace’ respectively, for consistency with versions of Python prior to 3.6.

This is equivalent to defining the `PYTHONLEGACYWINDOWSFSENCODING` environment variable before launching Python.

See also [`sys.getfilesystemencoding()`](/modules/sys/getfilesystemencoding.md) and [`sys.getfilesystemencodeerrors()`](/modules/sys/getfilesystemencodeerrors.md).

### Syntax

```python
sys._enablelegacywindowsfsencoding()
```