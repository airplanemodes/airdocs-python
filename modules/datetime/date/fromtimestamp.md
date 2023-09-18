# datetime.date.fromtimestamp()

Return the local date corresponding to the POSIX timestamp, such as is returned by `time.time()`.

This may raise [`OverflowError`](/exceptions/OverflowError.md), if the timestamp is out of the range of values supported by the platform C localtime() function, and [`OSError`](/exceptions/OSError.md) on localtime() failure. It’s common for this to be restricted to years from 1970 through 2038. Note that on non-POSIX systems that include leap seconds in their notion of a timestamp, leap seconds are ignored by `fromtimestamp()`.

### Syntax

```python
date.fromtimestamp(timestamp)
```