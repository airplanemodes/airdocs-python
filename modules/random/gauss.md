# random.gauss()

Normal distribution, also called the Gaussian distribution.

**mu** is the mean, and **sigma** is the standard deviation. This is slightly faster than the [`normalvariate()`](/modules/random/normalvariate.md).

*Multithreading note:*  
When two threads call this function simultaneously, it is possible that they will receive the same return value. This can be avoided in three ways:
- Have each thread use a different instance of the random number generator.
- Put locks around all calls. 
- Use the slower, but thread-safe [`normalvariate()`](/modules/random/normalvariate.md) function instead.

### Syntax

```python
random.gauss(mu=0.0, sigma=1.0)
```