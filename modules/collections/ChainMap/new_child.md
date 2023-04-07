# collections.ChainMap.new_child()

Returns a new ChainMap containing a new map followed by all of the maps in the current instance.

If **m** is specified, it becomes the new map at the front of the list of mappings. If not specified, an empty dict is used.

If any keyword arguments are specified, they update passed map or new empty dict. This method is used for creating subcontexts that can be updated without altering values in any of the parent mappings.

### Syntax

```python
collections.ChainMap.new_child(m=None, **kwargs)
```