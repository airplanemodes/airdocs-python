# window.bkgd()

Set the background property of the window to the character **ch**, with attributes **attr**. The change is then applied to every character position in that window:

* The attribute of every character in the window is changed to the new background attribute.
* Wherever the former background character appears, it is changed to the new background character.

### Syntax

```python
window.bkgd(ch)
window.bkgd(ch, attr)
```