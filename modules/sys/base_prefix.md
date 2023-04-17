# sys.base_prefix

Set during Python startup, before `site.py` is run, to the same value as [`prefix`](/modules/sys/prefix.md). If not running in a virtual environment, the values will stay the same. If `site.py` finds that a virtual environment is in use, the values of [`prefix`](/modules/sys/prefix.md) and [`exec_prefix`](/modules/sys/exec_prefix.md) will be changed to point to the virtual environment, whereas `base_prefix` and [`base_exec_prefix`](/modules/sys/base_exec_prefix.md) will remain pointing to the base Python installation (the one which the virtual environment was created from).

### Syntax

```python
sys.base_prefix
```