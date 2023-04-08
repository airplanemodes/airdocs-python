# random.setstate()

**state** should have been obtained from a previous call to [`getstate()`](/modules/random/getstate.md), and `setstate()` restores the internal state of the generator to what it was at the time [`getstate()`](/modules/random/getstate.md) was called.

### Syntax

```python
random.setstate(state)
```