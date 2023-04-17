# sys.dont_write_bytecode

If this is true, Python won’t try to write `.pyc` files on the import of source modules. This value is initially set to `True` or `False` depending on the `-B` command line option and the `PYTHONDONTWRITEBYTECODE` environment variable, but you can set it yourself to control bytecode file generation.

### Syntax

```python
sys.dont_write_bytecode
```