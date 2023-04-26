# window.touchline()

Pretend **count** lines have been changed, starting with line **start**. If **changed** is supplied, it specifies whether the affected lines are marked as having been changed (`changed=True`) or unchanged (`changed=False`).

### Syntax

```python
window.touchline(start, count)
window.touchline(start, count, changed)
```