# sys.base_exec_prefix

Set during Python startup, before `site.py` is run, to the same value as [`exec_prefix`](/modules/sys/exec_prefix.md). If not running in a virtual environment, the values will stay the same. If `site.py` finds that a virtual environment is in use, the values of prefix and [`exec_prefix`](/modules/sys/exec_prefix.md) will be changed to point to the virtual environment, whereas [`base_prefix`](/modules/sys/base_prefix.md) and `base_exec_prefix` will remain pointing to the base Python installation (the one which the virtual environment was created from).

### Syntax

```python
sys.base_exec_prefix
```