# heapq.nsmallest()

Return a list with the **n** smallest elements from the dataset defined by **iterable**. 

**key**, if provided, specifies a function of one argument that is used to extract a comparison key from each element in **iterable** (for example, `key=str.lower`). Equivalent to: `sorted(iterable, key=key)[:n]`.

### Syntax

```python
heapq.nsmallest(n, iterable, key=None)
```
