# sys._debugmallocstats()

Print low-level information to stderr about the state of CPython’s memory allocator.

If Python is built in debug mode (`configure --with-pydebug` option), it also performs some expensive internal consistency checks.

### Syntax

```python
sys._debugmallocstats()
```