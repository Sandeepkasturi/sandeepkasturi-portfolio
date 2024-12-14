const baseURL = 'skavtech.wegic.app'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Sandeep Kasturi',
    description: 'Founder of SKAV TECH and AI prompting Expert.'
}


// default open graph data
const og = {
    title: 'Sandeep Kasturi',
    description: 'We let designers code and developers design.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'SKAV TECH',
    description: 'SKAV TECH is an AI Development and Application Development company, Focusing on NOCODE Development ideas.',
    email: 'lorant@once-ui.com'
}

// social links
const social = {
    twitter: 'https://www.x.com/sandeepkasturi9',
    linkedin: 'https://www.linkedin.com/in/sandeepkasturi9/',
    discord: 'https://discord.com/invite/GnrQ2zhZ'
}

export { baseURL, style, meta, og, schema, social };
