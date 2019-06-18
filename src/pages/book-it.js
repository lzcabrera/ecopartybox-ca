import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Calendar from "../components/Calendar"

const FormWrapper = styled.div`
  margin-top: 3rem;
`
const Buttons = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;

  li:first-child {
    margin-right: 1rem;
  }
`

const InputField = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  label {
    margin-right: 1rem;
  }

  > input {
    flex-basis: 80%;
    height: 48px;
    border-style: solid;
    border-width: 1px;
    border-color: #dbdbdb;
  }

  .DateRangePicker {
    width:80%;
  }
`

const TextField = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  label {
    margin-right: 1rem;
  }

  > textarea {
    flex-basis: 80%;
    border-style: solid;
    border-width: 1px;
    border-color: #dbdbdb;
  }
`

const BookIt = () => (
  <Layout>
    <SEO title="BookIt" />
      <h1>Booking Request</h1>
      <p>Pick-up is in Queensborough at <b>11 - 188 Wood St. New Westminster, BC, V3M 0H6</b>.</p>
      <p>Please include in your message the pick-up and drop-off dates.</p>
      <FormWrapper>
        <form name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field">

          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <InputField>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
          </InputField>

          <InputField>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
          </InputField>

          {
            /*
            <InputField>
              <label>Dates</label>
              <Calendar />
            </InputField>
            */
          }
          <TextField>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" />
          </TextField>

          <Buttons>
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </Buttons>

        </form>
      </FormWrapper>
    </Layout>
)

export default BookIt
