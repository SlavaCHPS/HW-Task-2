
import React, { Component } from 'react'

export default class ShopItemClass extends Component {
  render() {
    const item = this.props.item
    const isInt = Number.isInteger(item.price)
    return (
        <div className ="main-content">
    <h2>{item.brand}</h2>
    <h1>{item.title}</h1>
    <h3>{item.description}</h3>
    <div className ="description">
     {item.descriptionFull}
    </div>
    <div className ="highlight-window mobile"><div className ="highlight-overlay"></div></div>
    <div className ="divider"></div>
    <div className ="purchase-info">
      <div className ="price">{item.currency}{isInt ? item.price + '.00' : item.price }</div>
      <button>Добавить в корзину</button>
    </div>
  </div>
    )
  }
}
