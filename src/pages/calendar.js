import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Calendar = () => (
  <Layout>
    <SEO title="Calendar" />
    <h1>Calendar</h1>
    <iframe  id="calendar" src="https://calendar.google.com/calendar/embed?src=l2ibkdkkjcr4tgrc63hm6qlii4%40group.calendar.google.com&ctz=America%2FVancouver"
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
      title="Booking calendar for Queensborough Party Box">

    </iframe>
    <div id="back-to">
      <Link to="/">Go back to the homepage</Link>
    </div>

  </Layout>
)

export default Calendar
