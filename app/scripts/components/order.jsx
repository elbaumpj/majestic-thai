var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');


var OrderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();

  },
  render: function() {
    var OrderedItems = this.props.currentOrders.map(function(item){
      var itemPrice = item.get('price');
      var itemName = item.get('name');
      return(
        <div key={item.cid}>
          <span>{itemName}</span><span> {itemPrice}</span>
        </div>
      )
    });
    var subtotal = this.props.currentOrders.reduce(function(previous, current){
      return previous+=current.get('price');
    }, 0)
    return(
      <nav>
        <h4>Your Order</h4>
        <span>Item</span><span>Price</span>
        <ul>
          {OrderedItems}
        </ul>
        <span>Subtotal: {subtotal}</span>
        <button type="submit" onClick="handleSubmit">Place Order</button>
      </nav>
    );
  }
});


module.exports = {
  OrderComponent: OrderComponent
}
