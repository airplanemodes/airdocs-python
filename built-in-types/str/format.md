# str.format()

Perform a string formatting operation.

The string on which this method is called can contain literal text or replacement fields delimited by braces `{}`. Each replacement field contains either the numeric index of a positional argument, or the name of a keyword argument.

Returns a copy of the string where each replacement field is replaced with the string value of the corresponding argument.

### Syntax

```python
str.format(*args, **kwargs)
```

### Examples

Accessing arguments by position:

```python
>>> '{0}, {1}, {2}'.format('a', 'b', 'c')  # 'a, b, c'
>>> '{}, {}, {}'.format('a', 'b', 'c')     # 'a, b, c'
>>> '{2}, {1}, {0}'.format('a', 'b', 'c')  # 'c, b, a'
>>> '{2}, {1}, {0}'.format(*'abc')         # 'c, b, a'
>>> '{0}{1}{0}'.format('abra', 'cad')      # 'abracadabra'
```

Accessing arguments by name:

```python
>>> 'Coordinates: {latitude}, {longitude}'.format(latitude='37.24N', longitude='-115.81W')
# 'Coordinates: 37.24N, -115.81W'
>>> coord = {'latitude': '37.24N', 'longitude': '-115.81W'}
>>> 'Coordinates: {latitude}, {longitude}'.format(**coord)
# 'Coordinates: 37.24N, -115.81W'
```

Accessing arguments’ items:

```python
>>> coord = (5, 7)
>>> 'X: {0[0]},  Y: {0[1]}'.format(coord) # 'X: 5,  Y: 7'
```

Expression:

```python
x = 10
y = 20
result = "The sum of x and y is {0}".format(x+y)
print(result) # The sum of x and y is 30
```