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
