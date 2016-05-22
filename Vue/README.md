# Vue.js
###### Learning in a better way.

**Declaration**: This document is maintained by *Vivek Muthal*. You are free to correct the mistakes.


## Introduction

Learning Vue.js becomes easy if we get working code. So that, for every chapter we are providing a link ie. View Code.

For emergency situations experts are available at StackOverflow, so dont waste your time here ;)

Lets get started.


## Chapter 1: Hello World!

This chapter covers following topics:
* Basic Example of Vue.js
* Two way binding
* One time binding

#### [View Code](https://jsfiddle.net/vmuthal/ugjtot3q/)

## Chapter 2: {{mustache}} and HTML Binding

This chapter covers following topics:
* Information about Mustache
* HTML binding
* Why it is dangerous?

**Mustache**

In previous chapter we learned about bindings. We used curly brackets. {} These brackets are from templating system called as Mustache. So [Let us see mustache](https://github.com/janl/mustache.js) and also [who uses it.](https://github.com/janl/mustache.js/wiki/beard-competition)

**HTML Binding**

Many times there comes a situation when you want to render a HTML. For that Vue has given a syntax. Use tripple curly braces. {{{ your html variable}}}

```
<div> {{{ raw_html }}} </div>
```

**Why it is dangerous**

If the html is not from trusted source, then it is very easy to hack things.

#### [View Code](https://jsfiddle.net/vmuthal/8j7dmr0b/10/)


## Chapter 3: Templates Part 1
This chapter covers following topics:
* What is template?
* Is there conditional operators like if else available?
* How to write loop?

**What is template?**

In simple term, Template = **Logic** inside HTML (Structure ie. Representation).


**Is there conditional operators like if else available?**

Yes, in the code we will see how to use it.
It uses attribute v-if and v-else, here in vue they are called as directive.

```
v-if="value"
......
v-else
.......
```
**How to write loop?**

Loops can be done using attribute v-for and we learned these are directives so you can create your own directive. Like

```
v-for="item in items"
```

#### [View Code](https://jsfiddle.net/vmuthal/0vdLyt78/1/)


## Chapter 4: Templates Part 2
This chapter covers following topics:
* Javascript less styling

One more benefit of templating is that you have to write less javascript to do various operations. You might have not have obeserved but in previous chapter we have moved the logic part of the javascript in template. Resulting in a clear understanding on what is happening on the UI. Same can be done for the conditional css.

Please [Checkout Styling guide](https://vuejs.org/guide/class-and-style.html) to understand the different ways which can be used to style.

#### [View Code](https://jsfiddle.net/vmuthal/gzubqja2/)

