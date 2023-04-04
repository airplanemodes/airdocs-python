# str.removeprefix()

`>>> str.removeprefix.__doc__`: Return a string with the given **prefix** string removed if present.

If the string starts with the **prefix** string, return `string[len(prefix):]`. Otherwise, return a copy of the original string.

### Syntax

```python
str.removeprefix(prefix)
```

### Example

```python
"www.example.com".removeprefix("www.") # 'example.com'
```