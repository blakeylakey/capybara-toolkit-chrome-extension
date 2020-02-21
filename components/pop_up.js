import React from "react";
import ReactDOM from "react-dom";

class PopUp extends React.Component {
    constructor() {
        super();

        this.state = {
            opened: false
        }

        this.popUpOnClick = this.popUpOnClick.bind(this);
    }

    popUpOnClick() {
        this.setState({
            opened: true
        });
        document.getElementById("capybara__informational-box").classList.toggle('hidden');
    }

    render() {
        let displayStatus = this.state.opened ? {display: "none"} : {};

        return(
            <div id="capybara__extension">
                <div id="capybara__extension-show-button-container" id="capybara__pop_up" onClick={this.popUpOnClick} style={displayStatus}>
                    <img src="chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/chevron-up.png" alt="Chevron" height="20px" id="capybara__chevron_up"></img>
                    <img src="chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/capybara.png" alt="Capybara" height="40px" id="capybara__capybara"></img>
                </div>
                <div id="capybara__informational-box" className="box hidden">
                    <nav id="capybara__information-box-nav">
                        <a href="https://capybara-toolkit.appspot.com/" id="capybara__information-box-nav-brand">capybara.io</a>
                        <span>
                            <img src="chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/close.svg" height="20px"></img>
                        </span>
                    </nav>
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Product Information
                                    </div>
                                </div>
                                <div className="card-body">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default PopUp;