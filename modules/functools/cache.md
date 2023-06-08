# @functools.cache()

Simple lightweight unbounded function cache. Sometimes called “memoize”.

Returns the same as `lru_cache(maxsize=None)`, creating a thin wrapper around a dictionary lookup for the function arguments. Because it never needs to evict old values, this is smaller and faster than [`lru_cache()`](/modules/functools/lru_cache.md) with a size limit.

### Syntax

```python
@functools.cache(user_function)
```

### Examples

```python
@cache
def factorial(n):
    return n * factorial(n-1) if n else 1

# no previously cached result, makes 11 recursive calls
>>> factorial(10) # 3628800

# just looks up cached value result
>>> factorial(5)  # 120

# makes two new recursive calls, the other 10 are cached
>>> factorial(12) # 479001600
```

The cache is threadsafe so that the wrapped function can be used in multiple threads. This means that the underlying data structure will remain coherent during concurrent updates.

It is possible for the wrapped function to be called more than once if another thread makes an additional call before the initial call has been completed and cached.