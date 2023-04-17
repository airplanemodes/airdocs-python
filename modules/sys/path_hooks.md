# sys.path_hooks

A list of callables that take a path argument to try to create a finder for the path.

If a finder can be created, it is to be returned by the callable, else raise [`ImportError`](/exceptions/ImportError.md).

Originally specified in [**PEP 302**](https://peps.python.org/pep-0302/).

### Syntax

```python
sys.path_hooks
```