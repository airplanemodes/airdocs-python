# os.DirEntry.name

The entry’s base filename, relative to the [`scandir()`](/modules/os/scandir.md) **path** argument.

The name attribute will be [`bytes`](/built-in-types/bytes/) if the [`scandir()`](/modules/os/scandir.md) **path** argument is of type [`bytes`](/built-in-types/bytes/) and [`str`](/built-in-types/str/) otherwise.

Use [`fsdecode()`](/modules/os/fsdecode.md) to decode byte filenames.

### Syntax

```python
os.DirEntry.name
```