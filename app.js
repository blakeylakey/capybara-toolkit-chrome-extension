import React from "react";
import ReactDOM from "react-dom";

import PopUp from "./components/pop_up";

class CapybaraExtension extends React.Component {
    render() {
        return(
            <PopUp />
        );
    }
}

window.addEventListener('load', () => {app()});

const app = () => {
    if (!document.getElementById('capybara-extension-container')) {
        let container = document.createElement('div');
        container.setAttribute('id', 'capybara-extension-container');

        document.body.appendChild(container);
    }
    ReactDOM.render(<CapybaraExtension />, document.getElementById('capybara-extension-container'));
}