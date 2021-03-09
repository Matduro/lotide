# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @matduro/lotide`

**Require it:**

`const _ = require('@matduro/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arrayInput)`: returns the first value of an array (ie arrayInput[0]);
* `tail(arrayInput)`: returns the tail of an array. In other words it returns every value after arrayInput[0].
* `middle(arrayInput)`: returns the middle value of an array, and if the array is an even number, then it returns the two value in the middle.