import postcss from "https://deno.land/x/postcss@8.4.16/mod.js"
import type { Declaration } from "https://deno.land/x/postcss@8.4.16/lib/postcss.js"

import React, {
    type ComponentType,
    type CSSProperties,
    type HTMLAttributes,
    type ReactHTML,
} from "https://esm.sh/react@18.2.0"

type HTMLAttrs<K extends keyof ReactHTML> = ReactHTML[K] extends
    React.DetailedHTMLFactory<infer P, HTMLElement> ? P
    : never

type Elem = {
    [K in keyof ReactHTML]: (
        (props: HTMLAttrs<K>) => React.JSX.Element
    )
}

const Elem: Elem = {
    a: (props) => <a {...props} />,
    abbr: (props) => <abbr {...props} />,
    address: (props) => <address {...props} />,
    area: (props) => <area {...props} />,
    article: (props) => <article {...props} />,
    aside: (props) => <aside {...props} />,
    audio: (props) => <audio {...props} />,
    b: (props) => <b {...props} />,
    base: (props) => <base {...props} />,
    bdi: (props) => <bdi {...props} />,
    bdo: (props) => <bdo {...props} />,
    big: (props) => <big {...props} />,
    blockquote: (props) => <blockquote {...props} />,
    body: (props) => <body {...props} />,
    br: (props) => <br {...props} />,
    button: (props) => <button {...props} />,
    canvas: (props) => <canvas {...props} />,
    caption: (props) => <caption {...props} />,
    center: (props) => <center {...props} />,
    cite: (props) => <cite {...props} />,
    code: (props) => <code {...props} />,
    col: (props) => <col {...props} />,
    colgroup: (props) => <colgroup {...props} />,
    data: (props) => <data {...props} />,
    datalist: (props) => <datalist {...props} />,
    dd: (props) => <dd {...props} />,
    del: (props) => <del {...props} />,
    details: (props) => <details {...props} />,
    dfn: (props) => <dfn {...props} />,
    dialog: (props) => <dialog {...props} />,
    div: (props) => <div {...props} />,
    dl: (props) => <dl {...props} />,
    dt: (props) => <dt {...props} />,
    em: (props) => <em {...props} />,
    embed: (props) => <embed {...props} />,
    fieldset: (props) => <fieldset {...props} />,
    figcaption: (props) => <figcaption {...props} />,
    figure: (props) => <figure {...props} />,
    footer: (props) => <footer {...props} />,
    form: (props) => <form {...props} />,
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    h4: (props) => <h4 {...props} />,
    h5: (props) => <h5 {...props} />,
    h6: (props) => <h6 {...props} />,
    head: (props) => <head {...props} />,
    header: (props) => <header {...props} />,
    hgroup: (props) => <hgroup {...props} />,
    hr: (props) => <hr {...props} />,
    html: (props) => <html {...props} />,
    i: (props) => <i {...props} />,
    iframe: (props) => <iframe {...props} />,
    img: (props) => <img {...props} />,
    input: (props) => <input {...props} />,
    ins: (props) => <ins {...props} />,
    kbd: (props) => <kbd {...props} />,
    keygen: (props) => <keygen {...props} />,
    label: (props) => <label {...props} />,
    legend: (props) => <legend {...props} />,
    li: (props) => <li {...props} />,
    link: (props) => <link {...props} />,
    main: (props) => <main {...props} />,
    map: (props) => <map {...props} />,
    mark: (props) => <mark {...props} />,
    menu: (props) => <menu {...props} />,
    menuitem: (props) => <menuitem {...props} />,
    meta: (props) => <meta {...props} />,
    meter: (props) => <meter {...props} />,
    nav: (props) => <nav {...props} />,
    noscript: (props) => <noscript {...props} />,
    object: (props) => <object {...props} />,
    ol: (props) => <ol {...props} />,
    optgroup: (props) => <optgroup {...props} />,
    option: (props) => <option {...props} />,
    output: (props) => <output {...props} />,
    p: (props) => <p {...props} />,
    param: (props) => <param {...props} />,
    picture: (props) => <picture {...props} />,
    pre: (props) => <pre {...props} />,
    progress: (props) => <progress {...props} />,
    q: (props) => <q {...props} />,
    rp: (props) => <rp {...props} />,
    rt: (props) => <rt {...props} />,
    ruby: (props) => <ruby {...props} />,
    s: (props) => <s {...props} />,
    samp: (props) => <samp {...props} />,
    script: (props) => <script {...props} />,
    search: (props) => <search {...props} />,
    section: (props) => <section {...props} />,
    select: (props) => <select {...props} />,
    slot: (props) => <slot {...props} />,
    small: (props) => <small {...props} />,
    source: (props) => <source {...props} />,
    span: (props) => <span {...props} />,
    strong: (props) => <strong {...props} />,
    style: (props) => <style {...props} />,
    sub: (props) => <sub {...props} />,
    summary: (props) => <summary {...props} />,
    sup: (props) => <sup {...props} />,
    table: (props) => <table {...props} />,
    tbody: (props) => <tbody {...props} />,
    td: (props) => <td {...props} />,
    template: (props) => <template {...props} />,
    textarea: (props) => <textarea {...props} />,
    tfoot: (props) => <tfoot {...props} />,
    th: (props) => <th {...props} />,
    thead: (props) => <thead {...props} />,
    time: (props) => <time {...props} />,
    title: (props) => <title {...props} />,
    tr: (props) => <tr {...props} />,
    track: (props) => <track {...props} />,
    u: (props) => <u {...props} />,
    ul: (props) => <ul {...props} />,
    var: (props) => <var {...props} />,
    video: (props) => <video {...props} />,
    wbr: (props) => <wbr {...props} />,
    webview: (props) => <webview {...props} />,
} as const

function parseCssString(css: string) {
    return postcss.parse(css)
}

function parseDecls(decls: string): Declaration[] {
    const root = parseCssString(decls)
    for (const node of root.nodes) {
        if (node.type !== "decl") {
            throw new Error(`Expected CSS declation, got: ${node.toString()}`)
        }
    }
    return root.nodes as Declaration[]
}

function toCamelCase(str: string) {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

function toReactCssProperties(str: string): CSSProperties {
    const decls = parseDecls(str)
    const css: Record<string, unknown> = {}
    for (const decl of decls) {
        const key = toCamelCase(decl.prop)
        css[key] = decl.value
    }
    return css
}

type NoStyleAttrs<A> = Omit<A, "style">

function withStyle<A extends HTMLAttributes<HTMLElement>>(
    Comp: ComponentType<A>,
    style: CSSProperties,
): ComponentType<NoStyleAttrs<A>> {
    return ((props: A) => <Comp {...props} style={style} />) as ComponentType<NoStyleAttrs<A>>
}

function styledComponent<A extends HTMLAttributes<HTMLElement>>(
    Comp: ComponentType<A>,
): (strings: TemplateStringsArray) => ComponentType<NoStyleAttrs<A>> {
    return (strings: TemplateStringsArray) => {
        if (strings.length != 1) {
            throw new Error("Expected exactly one string")
        }
        const style = toReactCssProperties(strings[0])
        return withStyle(Comp, style)
    }
}

type Styled = {
    [K in keyof Elem]: ReturnType<typeof styledComponent<HTMLAttrs<K>>>
}

const styled: Styled = Object.fromEntries(
    Object.entries(Elem).map(([key, value]) => [key, styledComponent(value as ComponentType)]),
) as Styled

export default styled
