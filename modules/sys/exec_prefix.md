# sys.exec_prefix

A string giving the site-specific directory prefix where the platform-dependent Python files are installed.

By default, this is also `'/usr/local'`. This can be set at build time with the `--exec-prefix` argument to the `configure` script. Specifically, all configuration files (e.g. the `pyconfig.h` header file) are installed in the directory `exec_prefix/lib/pythonX.Y/config`, and shared library modules are installed in `exec_prefix/lib/pythonX.Y/lib-dynload`, where X.Y is the version number of Python, for example `3.2`.

?> If a virtual environment is in effect, this value will be changed in `site.py` to point to the virtual environment. The value for the Python installation will still be available, via [`base_exec_prefix`](/modules/sys/base_exec_prefix.md).

### Syntax

```python
sys.exec_prefix
```