# React Styled Components (Inline)

A simple CSS library for React with an API inspired by 
[styled-components](https://styled-components.com/), but using inline styles.

```tsx
import styled from "https://deno.land/x/react_styled_inline/mod.tsx"

type ButtonProps = {
    primary?: boolean
}

const Button = styled.button<ButtonProps>`
    margin: 10px;
    padding: 20px;
    border: 1px solid gray;
    background-color: ${(props) => props.primary ? "blue" : "gray"};
`

const App = () => {
    return (
        <div>
            <h1>Awesome Button Component</h1>
            <Button primary type="submit">
                Click Me
            </Button>
        </div>
    )
}
```

This renders to:

```html
<div>
  <h1>Awesome Button Component</h1>
  <button
    type="submit"
    style="
      margin: 10px;
      padding: 20px;
      border: 1px solid gray;
      background-color: blue;
    "
  >
    Click Me
  </button>
</div>
```

## Why?

This library uses the same awesome API as styled-components, but instead of 
generating CSS, it generates inline styles. This means that you don't need to
worry about CSS files, and there's no need to integrate this with any build
system. Just import and use it!

## Should you use it?

Probably not. Definitely **not in production**. I don't use it in production.

This is just a fun experiment to see how far we can push the 
styled-components API without relying on a build system.

Also, inline styles are not the best for performance, although it probably 
doesn't matter for most applications. Moreover, currently the CSS is parsed and 
converted to inline styles on every render, which is not very efficient. Still, 
you can probably get away with it for non-performance critical use cases like 
static site rendering.

I do plan to benchmark this library against styled-components to see how much 
of a performance hit it imposes.

## Installation

This library is available on [deno.land](https://deno.land/x/react_styled_inline).

Import it like this:

```tsx
import styled from "https://deno.land/x/react_styled_inline/mod.tsx"
```

## Editor Support

Use the [Styled Components VSCode
extension](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
for syntax highlighting and IntelliSense for embedded CSS.