# str.format_map()

Similar to `str.format(**mapping)`, except that `mapping` is used directly and not copied to a dict.

### Syntax

```python
str.format_map(mapping)
```

### Examples

```python
class Default(dict):
    def __missing__(self, key):
        return key

'{name} was born in {country}'.format_map(Default(name='Guido'))

# 'Guido was born in country'
```