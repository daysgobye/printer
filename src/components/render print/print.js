import React, { Component } from "react"
import html2canvas from "html2canvas"
class Print extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.capRef = React.createRef()
    this.imgRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.props)
  }
  htmlGo = () => {
    html2canvas(this.capRef.current).then(canvas => {
      this.imgRef.current.appendChild(canvas)
    })
  }
  renderProps = p => {
    console.log(p.value)
    switch (p.value) {
      case "":
        return
      case false:
        return
      case null:
        return
      case true:
        return <p style={style.p}>{p.type}</p>
      default:
        return (
          <p style={style.p}>
            {p.type}: {p.value}
          </p>
        )
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.undo()}>OH no not right</button>
        <div className="cap" style={style.cardWrap} ref={this.capRef}>
          {this.props.cards.map((car, index) => (
            <div style={style.card}>
              {car.name}
              <div style={style.pWrap}>
                {car.properties.map((prop, index) => (
                  <div>{this.renderProps(prop)}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => this.htmlGo()}>mkimg</button>
        <div className="img" ref={this.imgRef}></div>
      </div>
    )
  }
}
const style = {
  card: {
    width: "23.5%",
    height: "300px",
    border: "1px solid black",
    borderRadius: "3px",
    margin: "5px",
    padding: "2px",
  },
  cardWrap: {
    display: "flex",
    width: "8in",
    flexWrap: "wrap",
    border: "red 1px solid",
  },
  pWrap: { marginTop: "40px" },
  p: {
    margin: "3px",
  },
}
export default Print
