# datetime.timedelta.total_seconds()

Return the total number of seconds contained in the duration. Equivalent to `td / timedelta(seconds=1)`. 

For interval units other than seconds, use the division form directly (e.g. `td / timedelta(microseconds=1)`).

Note that for very large time intervals (greater than 270 years on most platforms) this method will lose microsecond accuracy.

### Syntax

```python
datetime.timedelta.total_seconds()
```