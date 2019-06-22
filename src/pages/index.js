import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KidsSet from "../images/kids-individual.jpg"
import AdultsSet from "../images/adult-individual.jpg"

const HomepagePanel = styled.div`
  display: flex;
`
const MainPanel = styled.div`
  /* background: blue; */
  flex: 3 0 0;
`
const SidePanel = styled.div`
  /* background: red; */
  flex: 1 0 0;
  padding-left: 1rem;

  img{
    width: 100%;
    border-radius: 10px;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomepagePanel>
      <MainPanel>
        <p>A set of reusable plates, cups and cutlery you can borrow <strong>FREE</strong> for your next gathering!</p>

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
      </MainPanel>

      <SidePanel>
          <div><img src={KidsSet} alt="Kids plates and utensils" /></div>
          <div><img src={AdultsSet} alt="Adults plates and utensils" /></div>
      </SidePanel>
    </HomepagePanel>

  </Layout>
)

export default IndexPage
