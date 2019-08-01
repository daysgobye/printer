import React, { Component } from "react"
class Up extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
    }
    this.jsonRef = React.createRef()
  }
  parseJson = () => {
    const cards = JSON.parse(this.state.cards)
    console.log(this.state.cards, "state")
    console.log(cards)
    this.props.sendUp(cards)
  }
  submitHanddler = () => {
    // console.log(this.jsonRef.current.value)

    this.setState({ cards: this.jsonRef.current.value })
    this.parseJson()
  }
  render() {
    return (
      <div className="wrap">
        <div className="howto">
          <p>
            here you should put in all the cards you want to print in json here
            is an example of what it should look like
          </p>
          <img
            width="300px"
            src="https://cdn.discordapp.com/attachments/179103523789733888/603068795153809433/unknown.png"
            alt="json"
          />
        </div>
        <div className="input">
          <textarea
            name=""
            id=""
            cols="50"
            rows="100"
            ref={this.jsonRef}
          ></textarea>
          <button onClick={() => this.submitHanddler()}>take my json</button>
        </div>
      </div>
    )
  }
}

export default Up
