# sys.prefix

A string giving the site-specific directory prefix where the platform independent Python files are installed.

On Unix, the default is `/usr/local`. This can be set at build time with the `--prefix` argument to the `configure` script.

?> If a virtual environment is in effect, this value will be changed in `site.py` to point to the virtual environment. The value for the Python installation will still be available, via [`base_prefix`](/modules/sys/base_prefix.md).

### Syntax

```python
sys.prefix
```