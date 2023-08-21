# datetime.time()

A time object represents a (local) time of day, independent of any particular day, and subject to adjustment via a [`tzinfo`](/modules/datetime/tzinfo/) object.

All arguments are optional. **tzinfo** may be `None`, or an instance of a [`tzinfo`](/modules/datetime/tzinfo/) subclass. The remaining arguments must be integers in the following ranges:

* `0 <= hour < 24`,
* `0 <= minute < 60`,
* `0 <= second < 60`,
* `0 <= microsecond < 1000000`,
* `fold in [0, 1]`.

If an argument outside those ranges is given, [`ValueError`](/exceptions/ValueError.md) is raised. All default to `0` except **tzinfo**, which defaults to `None`.

[`time`](/modules/datetime/time/) objects support comparison of [`time`](/modules/datetime/time/) to [`time`](/modules/datetime/time/), where a is considered less than b when a precedes b in time. If one comparand is naive and the other is aware, TypeError is raised if an order comparison is attempted. For equality comparisons, naive instances are never equal to aware instances.

If both comparands are aware, and have the same [`tzinfo`](/modules/datetime/time/tzinfo.md) attribute, the common [`tzinfo`](/modules/datetime/time/tzinfo.md) attribute is ignored and the base times are compared. If both comparands are aware and have different [`tzinfo`](/modules/datetime/time/tzinfo.md) attributes, the comparands are first adjusted by subtracting their UTC offsets (obtained from `self.utcoffset()`). In order to stop mixed-type comparisons from falling back to the default comparison by object address, when a [`time`](/modules/datetime/time/) object is compared to an object of a different type, [`TypeError`](/exceptions/TypeError.md) is raised unless the comparison is `==` or `!=`. The latter cases return `False` or `True`, respectively.

In Boolean contexts, a [`time`](/modules/datetime/time/) object is always considered to be true.

### Syntax

```python
datetime.time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)
```