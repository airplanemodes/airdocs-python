# datetime.timedelta()

A `timedelta` object represents a duration, the difference between two dates or times.

All arguments are optional and default to `0`. Arguments may be integers or floats, and may be positive or negative.

Only **days**, **seconds** and **microseconds** are stored internally. Arguments are converted to those units:

- A millisecond is converted to 1000 microseconds.
- A minute is converted to 60 seconds.
- An hour is converted to 3600 seconds.
- A week is converted to 7 days.

and days, seconds and microseconds are then normalized so that the representation is unique, with

- `0 <= microseconds < 1000000`
- `0 <= seconds < 3600*24` (the number of seconds in one day)
- `-999999999 <= days <= 999999999`

Instance attributes (read-only):

| Attribute    | Value                                      |
| ------------ | ------------------------------------------ |
| days         | Between -999999999 and 999999999 inclusive |
| seconds      | Between 0 and 86399 inclusive              |
| microseconds | Between 0 and 999999 inclusive             |

In Boolean contexts, a `timedelta` object is considered to be true if and only if it isn’t equal to `timedelta(0)`.

### Syntax

```python
datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
```

### Examples

The following example illustrates how any arguments besides **days**, **seconds** and **microseconds** are “merged” and normalized into those three resulting attributes:

```python
>>> from datetime import timedelta
>>> delta = timedelta(
...     days=50,
...     seconds=27,
...     microseconds=10,
...     milliseconds=29000,
...     minutes=5,
...     hours=8,
...     weeks=2
... )
>>> # Only days, seconds, and microseconds remain
>>> delta # datetime.timedelta(days=64, seconds=29156, microseconds=10)
```

If any argument is a float and there are fractional microseconds, the fractional microseconds left over from all arguments are combined and their sum is rounded to the nearest microsecond using round-half-to-even tiebreaker. If no argument is a float, the conversion and normalization processes are exact (no information is lost).

If the normalized value of days lies outside the indicated range, [`OverflowError`](/exceptions/OverflowError.md) is raised.

Note that normalization of negative values may be surprising at first. For example:

```python
>>> from datetime import timedelta
>>> d = timedelta(microseconds=-1)
>>> (d.days, d.seconds, d.microseconds) # (-1, 86399, 999999)
```

Comparisons of timedelta objects are supported, with some caveats.

The comparisons `==` or `!=` *always* return a [`bool`](/built-in-functions/bool.md), no matter the type of the compared object:

```python
>>> from datetime import timedelta
>>> delta1 = timedelta(seconds=57)
>>> delta2 = timedelta(hours=25, seconds=2)
>>> delta2 != delta1 # True
>>> delta2 == 5 # False
```

For all other comparisons (such as `<` and `>`), when a `timedelta` object is compared to an object of a different type, [`TypeError`](/exceptions/TypeError.md) is raised:

```python
>>> delta2 > delta1 # True
>>> delta2 > 5
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: '>' not supported between instances of 'datetime.timedelta' and 'int'
```

An additional example of normalization:

```python
>>> # Components of another_year add up to exactly 365 days
>>> from datetime import timedelta
>>> year = timedelta(days=365)
>>> another_year = timedelta(weeks=40, days=84, hours=23,
...                         minutes=50, seconds=600)
>>> year == another_year # True
>>> year.total_seconds() # 31536000.0
```

Examples of `timedelta` arithmetic:

```python
>>> from datetime import timedelta
>>> year = timedelta(days=365)
>>> ten_years = 10 * year
>>> ten_years # datetime.timedelta(days=3650)
>>> ten_years.days // 365 # 10
>>> nine_years = ten_years - year
>>> nine_years # datetime.timedelta(days=3285)
>>> three_years = nine_years // 3
>>> three_years, three_years.days // 365 # (datetime.timedelta(days=1095), 3)
```