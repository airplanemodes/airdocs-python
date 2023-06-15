# zipimport.zipimporter()

Create a new zipimporter instance.

**archivepath** must be a path to a ZIP file, or to a specific path within a ZIP file. For example, an **archivepath** of `foo/bar.zip/lib` will look for modules in the `lib` directory inside the ZIP file `foo/bar.zip` (provided that it exists).

[`ZipImportError`](/modules/zipimport/ZipImportError.md) is raised if **archivepath** doesn’t point to a valid ZIP archive.

### Syntax

```python
zipimport.zipimporter(archivepath)
```