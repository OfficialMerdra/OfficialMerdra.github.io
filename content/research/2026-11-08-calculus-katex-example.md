+++
title = "Calculus example: derivatives and integrals"
date = 2026-11-08
description = "A longer KaTeX example with a derivative and a definite integral."

[taxonomies]
authors = ["simi"]
categories = ["Research"]
tags = ["Mathematics", "KaTeX"]

[extra]
katex = true
+++

This is a sample article for testing mathematical writing on the Merdra site. We will differentiate a function, locate its turning points, and integrate it over an interval. The numbers are chosen only to make the steps easy to follow.

## Start with a function

Let $f(x)=x^3-3x+2$. The derivative measures how quickly the function changes near a point. Starting from the limit definition gives:

{% <katex> %}
$$
\begin{aligned}
f'(x)
&= \lim_{h \to 0}\frac{f(x+h)-f(x)}{h} \\
&= \lim_{h \to 0}\frac{(x+h)^3-3(x+h)+2-(x^3-3x+2)}{h} \\
&= \lim_{h \to 0}(3x^2+3xh+h^2-3) \\
&= 3x^2-3.
\end{aligned}
$$
{% </katex> %}

The terms containing $h$ vanish as $h$ approaches zero. The same answer follows from the power rule, but the limit shows where it comes from.

## Find the turning points

A stationary point occurs where $f'(x)=0$. Here, $3x^2-3=0$, so $x=-1$ or $x=1$.

The second derivative is $f''(x)=6x$. At $x=-1$ it is negative, so $f(-1)=4$ is a local maximum. At $x=1$ it is positive, so $f(1)=0$ is a local minimum.

## Integrate over an interval

The fundamental theorem of calculus lets us evaluate a definite integral by finding an antiderivative. An antiderivative of $f(x)$ is $F(x)=x^4/4-3x^2/2+2x$. From zero to two:

{% <katex> %}
$$
\begin{aligned}
\int_0^2 (x^3-3x+2)\,dx
&= \left[\frac{x^4}{4}-\frac{3x^2}{2}+2x\right]_0^2 \\
&= \left(4-6+4\right)-0 \\
&= 2.
\end{aligned}
$$
{% </katex> %}

In this interval, $f(x)=(x-1)^2(x+2)\geq 0$. The integral therefore equals the area between the curve and the horizontal axis on $[0,2]$. For a function that crosses below the axis, a definite integral would instead give signed area.
