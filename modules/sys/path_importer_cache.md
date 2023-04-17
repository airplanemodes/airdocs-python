# sys.path_importer_cache

A dictionary acting as a cache for finder objects. The keys are paths that have been passed to [`sys.path_hooks`](/modules/sys/path_hooks.md) and the values are the finders that are found. If a path is a valid file system path but no finder is found on [`sys.path_hooks`](/modules/sys/path_hooks.md) then `None` is stored.

Originally specified in [**PEP 302**](https://peps.python.org/pep-0302/).

### Syntax

```python
sys.path_importer_cache
```