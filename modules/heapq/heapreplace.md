# heapq.heapreplace()

Pop and return the smallest item from the **heap**, and also push the new **item**. The heap size doesn’t change.

If the heap is empty, [`IndexError`](/exceptions/IndexError.md) is raised.

This one step operation is more efficient than a [`heappop()`](/modules/heapq/heappop.md) followed by [`heappush()`](/modules/heapq/heappush.md) and can be more appropriate when using a fixed-size heap. The pop/push combination always returns an element from the heap and replaces it with **item**.

The value returned may be larger than the **item** added. If that isn’t desired, consider using [`heappushpop()`](/modules/heapq/heappushpop.md) instead. Its push/pop combination returns the smaller of the two values, leaving the larger value on the heap.

### Syntax

```python
heapq.heapreplace(heap, item)
```
