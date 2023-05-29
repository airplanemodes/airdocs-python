# linecache.checkcache()

Check the cache for validity. Use this function if files in the cache may have changed on disk, and you require the updated version. If **filename** is omitted, it will check all the entries in the cache.

### Syntax

```python
linecache.checkcache(filename=None)
```