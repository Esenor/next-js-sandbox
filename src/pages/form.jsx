import React from 'react'
import Layout from '../components/Layout'
import { Header, Button, Checkbox, Form as SUIForm } from 'semantic-ui-react'

class Form extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    console.log('toto')
    event.preventDefault()
    const data = new FormData(event.target)

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data
    })
  }

  render() {
    return (
      <Layout page={this.constructor.name}>
        <Header as="h1">
          Form page
          <Header.Subheader>Next js demo Form page</Header.Subheader>
        </Header>
        <SUIForm onSubmit={this.handleSubmit}>
          <SUIForm.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </SUIForm.Field>
          <SUIForm.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </SUIForm.Field>
          <SUIForm.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </SUIForm.Field>
          <Button type="submit">
            Submit
          </Button>
        </SUIForm>
      </Layout>
    )
  }
}

export default Form
