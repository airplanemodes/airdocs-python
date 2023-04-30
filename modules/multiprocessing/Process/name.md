# multiprocessing.Process.name

The process’s name. The name is a string used for identification purposes only. It has no semantics. Multiple processes may be given the same name.

The initial name is set by the constructor. If no explicit name is provided to the constructor, a name of the form ‘Process-N1:N2:…:Nk’ is constructed, where each Nk is the N-th child of its parent.

# Syntax

```python
multiprocessing.Process.name
```