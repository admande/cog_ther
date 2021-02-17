import React from "react";

class TextAreaForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.onChange(event.target.value);
    }
  
    render() {
      const upsetting_event = this.props.upsetting_event
      return (
        <fieldset>
          <label>
            What is the Upsetting Event?
            <textarea value={upsetting_event} onChange={this.handleChange} />
          </label>
        </fieldset>
      );
    }
  }

  export default TextAreaForm