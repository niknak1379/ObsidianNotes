---
creation date: 2025-12-12 14:40
---
#06-Quant #Probability

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

## Random Variables
is a function which assigns a number to events in the sample space.
We describe the probability of an outcome in terms of the probability of a random variable taking a given value.
1 heads, -1 tails
## Probability Distributions
### Continuous random variables 
all values are equally likely, since there are an infinite number of values, then the probability of any given value is 0

Instead we get the probability of a given range

Probability distributions need to be positive and sum to 1

## Cumilative Distribution Function

gives the probabilty that X is less than or equal to a given value 

probability density function is the derivative of the cumulative distribution function

THis is just the integral of the Density function

## Change of Variable

Suppose you create a new variable by applying a monotonic
increasing function to x y = Y(x) then the PDF of Y is 
F(y) = F(x) dx/dy


## Expectations and Moments

The probabilty distribution defines weighted averages over the sample space, where the weight of each event is equal to its probability. These are called expected values

Its basically the multiplication of each possible value and its probability

For continous it is the integral of the value and the probability density function

Mean of a distribution:
mean of the distribution is simply the expectation of the random variable it self. We alsu call it u
![[Obsidian/Excalidraw/Pasted image 20260110201636.png]]
### Moments of a distribution

Moments are the expectation of powers of the random variable itself
If all the moments are known and if they exist, they can be used to get the expectation of other functions using the linearity of the expectation operator
![[Obsidian/Excalidraw/Pasted image 20260110202116.png]]![[Obsidian/Excalidraw/Pasted image 20260110202130.png]]
Each moment tells sth else about the distribution:
first is just the expectation, second moment is useful for calculating variance(standard deviation), second central moment is the variance(second moment - mean^2), third is skewness, fourt is kurtosis -> how heavily tails or is concentrated in the center compared to normal
![[Obsidian/Excalidraw/Pasted image 20260110203656.png]]

## Covariance and correlation

for any two random variables their covariance is defeined as -> covariance is how two variables change together, covariance has units, corr fixes that by diciding by the variances to make it unitless
![[Obsidian/Excalidraw/Pasted image 20260110204954.png]]![[Obsidian/Excalidraw/Pasted image 20260110205041.png]]

if the variables are independant, covariance vanishes, however converse is not true


# Common Distributions:

### Uniform
### Binomial Distribution 
-> for things that have two possible outcomes
has two params
Probabilty of successp and number of trials n
![[Obsidian/Excalidraw/Pasted image 20260110213131.png]]


### Gaussian Distribution
or the normal distribution
![[Obsidian/Excalidraw/Pasted image 20260110215019.png]]

