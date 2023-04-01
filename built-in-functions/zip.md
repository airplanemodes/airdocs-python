# zip()

Iterate over several iterables in parallel, producing tuples with an item from each one.

### Syntax
```python
zip()
zip(iterables)
zip(*iterables, strict=False)
```

### Examples
```python
for item in zip([1, 2, 3], ['sugar', 'spice', 'everything nice']):
    print(item)

# (1, 'sugar')
# (2, 'spice')
# (3, 'everything nice')
```