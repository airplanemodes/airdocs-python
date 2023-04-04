# array.fromfile()

Read **n** items (as machine values) from the file object **f** and append them to the end of the array. If less than **n** items are available, [`EOFError`](/exceptions/EOFError.md) is raised, but the items that were available are still inserted into the array.

### Syntax
```python
array.fromfile(f, n)
```