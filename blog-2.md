# The Four Pillars of OOP in TypeScript

## Introduction

As a TypeScript project grows, unmanaged complexity becomes the biggest
enemy. Logic gets duplicated, components become tightly coupled, and a
change in one place breaks five others. Object-Oriented Programming gives
us four pillars, Encapsulation, Inheritance, Abstraction, and Polymorphism.
Used together they keep large codebases organized, predictable, and maintainable.

## 1. Encapsulation — Hide What Doesn't Need to Be Seen

Encapsulation means bundling data and the methods that operate on it inside
a class, and restricting direct access from outside. TypeScript enforces this
with `private`, `protected`, and `public` access modifiers.

Without encapsulation, any part of the codebase can reach into an object and
corrupt its state. With it, the class controls its own data and other parts
of the system interact through a clean public API only.

## 2. Inheritance — Reuse Logic Across Related Classes

Inheritance lets a child class extend a parent class, inheriting its properties
and methods while adding its own behavior. This eliminates duplicated logic
across related types.

Instead of writing the same logic in five different classes, you write it once
in a parent class and every child gets it for free. Adding a new type means
extending the parent — not copying code.

## 3. Abstraction — Expose What Matters, Hide What Doesn't

Abstraction means defining a contract — what a class must do — without
specifying how it does it. In TypeScript this is done with abstract classes
and interfaces.

The consumer of a class should not need to know how it works internally.
They only need to know what methods are available. Adding a new implementation
means creating one new subclass — nothing else in the codebase changes.

## 4. Polymorphism — One Interface, Many Behaviors

Polymorphism means objects of different classes can be treated as the same
type, each responding to the same method in its own way. This removes long
if/else or switch chains based on type.

You can add a completely new class tomorrow and the rest of the code needs
zero changes. The calling code is completely decoupled from the concrete types,
which makes the system very easy to extend.

## Conclusion

The four pillars of OOP are not academic concepts — they are practical tools
for managing complexity that grows with every new feature. Encapsulation
protects state, inheritance removes duplication, abstraction hides
implementation details, and polymorphism eliminates brittle type-checking
logic. Used together in TypeScript, they produce codebases that are easier
to extend, easier to test, and far less likely to break when requirements change.