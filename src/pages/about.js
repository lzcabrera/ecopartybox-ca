
import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FlexContainer = styled.div`
  display: flex;
`
const FlexItemLeft = styled.div`
  margin-right: 50px;
`
const Red = styled.span`
  color: red;
`

const Yellow = styled.span`
  color: #CC9F00;
`
const Green = styled.span`
  color: green;
`

const Blue = styled.span`
  color: blue;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>The Queensborough Party Box is a set of community party dishes you can borrow for FREE for your next public or private gathering.</p>

    <p>Help cut plastic waste by not buying single-use plastic dishes and book the Queensborough Party Box instead.</p>

    <h2>What's included</h2>
    <FlexContainer>
      <FlexItemLeft>
        <h3>For <Red>k</Red><Yellow>i</Yellow><Green>d</Green><Blue>s</Blue></h3>
        <ul>
          <li>24 plates</li>
          <li>24 bowls</li>
          <li>24 cups</li>
          <li>24 forks</li>
          <li>24 knifes</li>
          <li>24 spoons</li>
        </ul>
      </FlexItemLeft>
      <div>
        <h3>For adults</h3>
        <ul>
          <li>20 dinner plates</li>
          <li>20 side plates</li>
          <li>20 glasses</li>
          <li>20 forks</li>
          <li>20 knifes</li>
          <li>20 spoons</li>
        </ul>
      </div>
    </FlexContainer>
    {/* <Link to="https://clarkparkpartybox.wordpress.com/">Clark Party Box</Link> */}
  </Layout>
)

export default About
