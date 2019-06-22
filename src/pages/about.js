
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BoxImage from "../images/qb_party_box.jpg"

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  > div {
    flex: 1 0 0;
  }

  img {
    height: 200px;
    text-align: center;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    margin-top:1.5rem;
  }
`
const FlexItemLeft = styled.div`

`
const Red = styled.span`
  color: #df2127;
`

const Yellow = styled.span`
  color: #b8b437;
`
const Blue = styled.span`
  color: #00afd9;
`

const Purple = styled.span`
  color: #7c246e;
`

const About = () => (
  <Layout>
    <SEO title="About" />

    <h1>About</h1>
    <p>The Queensborough Party Box is a set of community party dishes you can borrow for FREE for your next public or private gathering.</p>

    <h2>What's included?</h2>
    <FlexContainer>
      <FlexItemLeft>
        <h3>For <Red>k</Red><Blue>i</Blue><Yellow>d</Yellow><Purple>s</Purple></h3>
        <ul>
          <li>24 plates</li>
          <li>24 bowls</li>
          <li>24 cups</li>
          <li>24 utensil sets (fork, knife, spoon)</li>
        </ul>
      </FlexItemLeft>
      <div>
        <h3>For adults</h3>
        <ul>
          <li>20 dinner plates (white tempered glass)</li>
          <li>20 side plates (white tempered glass)</li>
          <li>20 stainless steel utensil sets (forks, knife, spoon)</li>
        </ul>
      </div>
      <div>
        <img src={BoxImage} alt="The Queensborough Party Box" />
      </div>
    </FlexContainer>

    <p>In the spirit of the reduce, reuse, recycle movement and inspired by the <Link to="https://clarkparkpartybox.wordpress.com/">Clark Park Party Box</Link>,
      let's cut plastic waste by not buying single-use plastic dishes and utensils
      and <Link to="/book-it">book</Link> the <strong>Queensborough Party Box</strong> instead.</p>
  </Layout>
)

export default About
