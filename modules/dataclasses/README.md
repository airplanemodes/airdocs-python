# dataclasses

**Data Classes.**

> Source code: [`Lib/dataclasses.py`](https://github.com/python/cpython/tree/3.12/Lib/dataclasses.py)

This module provides a decorator and functions for automatically adding generated special methods such as [`__init__()`](/abstraction/object/__init__.md) and [`__repr__()`](/abstraction/object/__repr__.md) to user-defined classes. It was originally described in [**PEP 557**](https://peps.python.org/pep-0557/).

The member variables to use in these generated methods are defined using [**PEP 526**](https://peps.python.org/pep-0526/) type annotations. For example, this code:

```python
from dataclasses import dataclass

@dataclass
class InventoryItem:
    """Class for keeping track of an item in inventory."""
    name: str
    unit_price: float
    quantity_on_hand: int = 0

    def total_cost(self) -> float:
        return self.unit_price * self.quantity_on_hand
```

will add, among other things, a `__init__()` that looks like:

```python
def __init__(self, name: str, unit_price: float, quantity_on_hand: int = 0):
    self.name = name
    self.unit_price = unit_price
    self.quantity_on_hand = quantity_on_hand
```

Note that this method is automatically added to the class: it is not directly specified in the `InventoryItem` definition shown above.
