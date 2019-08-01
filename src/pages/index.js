import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Print from "../components/render print/print"
import Up from "../components/up/up"

import React, { Component } from "react"
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: [{ name: "no Card Yet" }], upload: false }
  }
  hanndleCards = cards => {
    console.log(cards)

    this.setState({ cards, upload: true })
  }
  backup = () => {
    this.setState({ upload: false })
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        {this.state.upload ? (
          <Print cards={this.state.cards} undo={this.backup}></Print>
        ) : (
          <Up sendUp={this.hanndleCards}></Up>
        )}
      </div>
    )
  }
}

export default Index
