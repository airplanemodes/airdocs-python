# window.insdelln()

Insert **nlines** lines into the specified window above the current line. The **nlines** bottom lines are lost. For negative **nlines**, delete **nlines** lines starting with the one under the cursor, and move the remaining lines up. The bottom **nlines** lines are cleared. The current cursor position remains the same.

### Syntax

```python
window.insdelln(nlines)
```