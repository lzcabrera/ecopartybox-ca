import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>A set of reusable plates, cups and cutlery you can borrow FREE for your next gathering!</p>

    <p>If you have an upcoming event, here is what you have to do:</p>

    <ul>
      <li>Check the availability <Link to="/calendar">calendar</Link></li>
      <li><Link to="/book-it">Book</Link> the box by sending us
    a message with your <strong>pick-up</strong> and <strong>drop-off</strong> dates</li>
      <li>Pick up the box</li>
      <li>Host your event without disposable dishes</li>
      <li>Run the dishes through your dishwasher</li>
      <li>Return the box</li>
    </ul>
  </Layout>
)

export default IndexPage
