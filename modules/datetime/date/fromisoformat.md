# datetime.date.fromisoformat()

Return a date corresponding to a **date_string** given in any valid ISO 8601 format, except ordinal dates (e.g. `YYYY-DDD`).

### Syntax

```python
date.fromisoformat(date_string)
```

### Examples

```python
>>> from datetime import date
>>> date.fromisoformat('2019-12-04')  # datetime.date(2019, 12, 4)
>>> date.fromisoformat('20191204')    # datetime.date(2019, 12, 4)
>>> date.fromisoformat('2021-W01-1')  # datetime.date(2021, 1, 4)
```