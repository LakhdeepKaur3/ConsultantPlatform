import React, { Component } from 'react';
  class FormLabel extends Component {
    render() {
        return (
          <div>
             <div style={{textAlign:'center',marginTop:'30px'}} className="StepCounter">
                          <div className="SetTextOuter">
                             <span className="step"></span>
                             <span className="step-text">Basic Info</span>
                          </div>
                          <div className="SetTextOuter">
                             <span className="step"></span>
                             <span className="step-text">Additional Info</span>
                          </div>
                          <div className="SetTextOuter">
                             <span className="step"></span>
                             <span className="step-text">Choose Plan</span>
                          </div>
                           <div className="SetTextOuter last-step">
                             <span className="step"></span>
                             <span className="step-text">Upload Video</span>
                          </div>
                        </div>
            
</div>
            
        );
    }
};


export default FormLabel