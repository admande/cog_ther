import React from "react";
import TextAreaForm from "./TextAreaForm";
import InputForm from "./InputForm";

class Keeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {upsetting_event: '', emotion: '', rating: 10};
  
      this.handleEventChange = this.handleEventChange.bind(this);
      this.handleEmotionChange = this.handleEmotionChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
    }
  
    handleEventChange(upsetting_event) {
      this.setState({upsetting_event});
    }
    handleEmotionChange(emotion) {
      this.setState({emotion});
    }
    handleRatingChange(rating) {
      this.setState({rating});
    }
  
    render() {
        const upsetting_event = this.state.upsetting_event;
        const emotion = this.state.emotion;
        const rating = this.state.rating;
        
        return (
            <div>
                <div>
                    <TextAreaForm 
                        upsetting_event={upsetting_event} 
                        onChange={this.handleEventChange} />
                </div>
                <div>
                    <InputForm 
                        label="Emotion"
                        value={emotion}
                        onChange={this.handleEmotionChange} />
                    <InputForm 
                        label="Rating"
                        value={rating}
                        onChange={this.handleRatingChange} />
                </div>
            </div>
        );
    }
  }

  export default Keeper