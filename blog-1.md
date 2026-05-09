# Why `unknown` Is Safer Than `any` in TypeScript

## Introduction

When TypeScript encounters data it cannot predict an API response, user
input, or a third-party library value developers often reach for `any`.
It silences the compiler immediately, but at a serious cost. `unknown` is
the correct tool for the job, and understanding why requires looking at
what type safety actually means.

## The Problem with `any`

`any` means `any` kind of variables,
TypeScript stops checking it entirely. You can call methods on it,
index into it, and pass it anywhere and the compiler will not
complain, even when the code will crash at runtime. If we use that it kind of makes the typescript useless for that part.


## `unknown` — The Safe Alternative

`unknown` tells TypeScript: "I have a value but I do not know its type
yet." Unlike `any`, TypeScript refuses to let you operate on an `unknown`
value without first proving what it is. This forces you to handle all
cases explicitly.

That compile-time error just prevented a runtime crash. So thats the main thing.

## Type Narrowing

Type narrowing is how you "prove" the type of an `unknown` value to
TypeScript before using it. The most common techniques are:


## Conclusion

`any` trades short-term convenience for long-term bugs. `unknown` keeps
the compiler as your ally, it forces you to narrow the type before
using a value, making your code provably correct. Whenever you face
unpredictable data, reach for `unknown` and let type narrowing do the
rest.