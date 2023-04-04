# sum()

Sums **start** and the items of an **iterable** from left to right and returns the total.

The **iterable**’s items are normally numbers, and the **start** value is not allowed to be a string.

### Syntax

```python
sum(iterable)
sum(iterable, /, start=0)
```

### Examples

```python
>>> sum([8, 12, 40, 120]) # 180
```

Using variables:

```python
items_prices = [21.5, 59.9, 40, 192]
delivery_price = 30
sum_price = sum(items_prices, start=delivery_price)
print(sum_price) # 343.4
```