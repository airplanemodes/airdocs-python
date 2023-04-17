# `sys.__interactivehook__`

When this attribute exists, its value is automatically called (with no arguments) when the interpreter is launched in interactive mode. This is done after the `PYTHONSTARTUP` file is read, so that you can set this hook there. The [`site`](/modules/site/) module sets this.

Raises an auditing event `cpython.run_interactivehook` with the hook object as the argument when the hook is called on startup.

### Syntax

```python
sys.__interactivehook__
```