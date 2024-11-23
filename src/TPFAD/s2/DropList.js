import React from "react";

export default class DropList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selctV : this.props.items[0]
    }
  }
  changeSelect(e){
    this.setState({selctV : e.target.value})
    this.props.selectedItem(this.state.selctV)
  }
  render() {
    return (
      <>
        <select value={this.state.selctV} onChange={(e)=>this.changeSelect(e)}>
          {this.props.items.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </>
    );
  }
}
