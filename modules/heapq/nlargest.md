# heapq.nlargest()

Return a list with the **n** largest elements from the dataset defined by **iterable**. 

**key**, if provided, specifies a function of one argument that is used to extract a comparison key from each element in **iterable** (for example, `key=str.lower`). Equivalent to: `sorted(iterable, key=key, reverse=True)[:n]`.

### Syntax

```python
heapq.nlargest(n, iterable, key=None)
```
