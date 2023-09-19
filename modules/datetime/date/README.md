# datetime.date()

A `date` object represents a date (year, month and day) in an idealized calendar, the current Gregorian calendar indefinitely extended in both directions.

January 1 of year 1 is called day number 1, January 2 of year 1 is called day number 2, and so on.

All arguments are required. Arguments must be integers, in the following ranges:

* `MINYEAR <= year <= MAXYEAR`
* `1 <= month <= 12`
* `1 <= day <= number of days in the given month and year`

If an argument outside those ranges is given, [`ValueError`](/exceptions/ValueError.md) is raised.

Supported operations:

| Operation                   | Result                                                                     |
| --------------------------- | -------------------------------------------------------------------------- |
| `date2 = date1 + timedelta` | **date2** will be `timedelta.days` days after **date1**.                   |
| `date2 = date1 - timedelta` | Computes **date2** such that `date2 + timedelta == date1`.                 |
| `timedelta = date1 - date2` |                                                                            |
| `date1 < date2`             | **date1** is considered less than **date2** when **date1** precedes **date2** in time. |

### Syntax

```python
datetime.date(year, month, day)
```