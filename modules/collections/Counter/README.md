# collections.Counter()

A `Counter` is a [`dict`](/built-in-types/dict/) subclass for counting hashable objects.

It is a collection where elements are stored as dictionary keys and their counts are stored as dictionary values. Counts are allowed to be any integer value including zero or negative counts. The Counter class is similar to bags or multisets in other languages.

Elements are counted from an **iterable** or initialized from another mapping (or counter).

Counters support rich comparison operators for equality, subset, and superset relationships: `==`, `!=`, `<`, `<=`, `>`, `>=`. All of those tests treat missing elements as having zero counts so that `Counter(a=1) == Counter(a=1, b=0)` returns `True`.

### Syntax

```python
collections.Counter()
collections.Counter(iterable)
```

### Examples

Tally occurrences of words in a list:

```python
import collections

cnt = collections.Counter()

for word in ['red', 'blue', 'red', 'green', 'blue', 'blue']:
    cnt[word] += 1

print(cnt) # Counter({'blue': 3, 'red': 2, 'green': 1})
```

Find the ten most common words in Hamlet:

```python
import collections
import re

words = re.findall(r'\w+', open('hamlet.txt').read().lower())
print(collections.Counter(words).most_common(10))
# [('the', 1143), ('and', 966), ('to', 762), ('of', 669), ('i', 631),
# ('you', 554),  ('a', 546), ('my', 514), ('hamlet', 471), ('in', 451)]
```

Common patterns for working with Counter objects:

```python
c.total()                       # total of all counts
c.clear()                       # reset all counts
list(c)                         # list unique elements
set(c)                          # convert to a set
dict(c)                         # convert to a regular dictionary
c.items()                       # convert to a list of (elem, cnt) pairs
Counter(dict(list_of_pairs))    # convert from a list of (elem, cnt) pairs
c.most_common()[:-n-1:-1]       # n least common elements
+c                              # remove zero and negative counts
```