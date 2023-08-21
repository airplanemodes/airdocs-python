# datetime.time.fold

In `[0, 1]`. Used to disambiguate wall times during a repeated interval.

?> A repeated interval occurs when clocks are rolled back at the end of daylight saving time or when the UTC offset for the current zone is decreased for political reasons.

The value 0 (1) represents the earlier (later) of the two moments with the same wall time representation.

### Syntax

```python
datetime.time.fold
```