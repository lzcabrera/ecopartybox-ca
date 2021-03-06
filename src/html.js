import React from "react"
import PropTypes from "prop-types"
import AdultsSet from "./images/adult-individual.jpg"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content="Queensborough Party Box" />
        <meta property="og:description" content="a set of community party dishes you can borrow for FREE for your next public or private gathering." />
        <meta property="og:image" content={AdultsSet} />
        <meta property="og:url" content="https://queensborough.ecopartybox.ca" />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Archivo+Narrow|Open+Sans+Condensed:300&display=swap" rel="stylesheet"></link>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
