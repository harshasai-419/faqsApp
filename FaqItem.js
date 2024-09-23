import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isShow: false}
  changeButton = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }
  render() {
    const {key, item} = this.props
    const {questionText, answerText} = item
    const {isShow} = this.state
    const altName = isShow ? 'minus' : 'plus'
    const imgUrl = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <li className="list-item">
        <div className="ques-con">
          <h1 className="que-text">{questionText}</h1>
          <button className="symbol-button">
            <img
              src={imgUrl}
              className="symbol-image"
              onClick={this.changeButton}
              alt={altName}
            />
          </button>
        </div>
        {isShow ? (
          <div>
            <hr className="hori-line" />
            <p>{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}
export default FaqItem
