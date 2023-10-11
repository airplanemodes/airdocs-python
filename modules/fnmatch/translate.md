# fnmatch.translate()

Return the shell-style **pattern** converted to a regular expression for using with [`re.match()`](/modules/re/match.md).

### Syntax

```python
fnmatch.translate(pattern)
```

### Examples

```python
>>> import fnmatch, re
>>> regex = fnmatch.translate('*.txt')
>>> regex # '(?s:.*\\.txt)\\Z'
>>> reobj = re.compile(regex)
>>> reobj.match('foobar.txt') # <re.Match object; span=(0, 10), match='foobar.txt'>
```