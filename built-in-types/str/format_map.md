# str.format_map()

Similar to `str.format(**mapping)`, except that `mapping` is used directly and not copied to a dict. This is useful if for example `mapping` is a [`dict`](/built-in-types/dict/) subclass.

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