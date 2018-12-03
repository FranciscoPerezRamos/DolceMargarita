import React from 'react';
import Select from 'react-select';
import '../dist/selector.css';
 

 
export default class Selector extends React.Component {
    constructor() {
        super();
        this.state ={
            selectedOption: null,
        }
    }
  handleChange = (selectedOption) => {
    this.props.selectOption(selectedOption.value);
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  options() {
    return this.props.options.map(item => {
        return {value: item, label: item.nombre}
    });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className="selector"
        value={selectedOption}
        onChange={this.handleChange}
        options={this.options()}
      />
    );
  }
}