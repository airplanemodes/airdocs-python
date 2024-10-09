# str.removesuffix()

`>>> str.removesuffix.__doc__`: Return a string with the given **suffix** string removed if present.

If the string ends with the **suffix** string and that **suffix** is not empty, return `string[:-len(suffix)]`. Otherwise, return a copy of the original string.

### Syntax

```python
str.removesuffix(suffix)
```

### Example

```python
>>> "www.example.com".removesuffix(".com") # 'www.example'
```
