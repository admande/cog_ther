import React from "react";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        const label = this.props.label
        const value = this.props.value
        return (
            <fieldset>
                <label>{label}
                    <textarea value={value} onChange={this.handleChange} />
                </label>
            </fieldset>
        )
    }
}

export default InputForm