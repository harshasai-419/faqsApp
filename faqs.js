import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  ToggleButton = id => {}
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">FAQs</h1>
          <ul className="unordered-list">
            {faqsList.map(each => (
              <FaqItem
                item={each}
                key={each.id}
                ToggleButton={this.ToggleButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
