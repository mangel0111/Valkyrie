import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import Dashboard from './Dashboard';
import E2E from './Apps/E2E';
import Jenkins from './Apps/Jenkins';
import Orchard from './Apps/Orchard';
import CatchphrasesApp from './Apps/CatchphrasesApp';
import Calendar from './Apps/Calendar';
import Profile from './Apps/Profile';
import Skills from './Apps/Skills';
import Offices from './Apps/Offices';
import WhatWeCanEat from './Apps/WhatWeCanEat';

import Apps from '../app-samples';

class Principal extends React.Component {
    constructor() {
        super();
        this.renderPrincipalPanel = this.renderPrincipalPanel.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
        this.renderBodyContainer = this.renderBodyContainer.bind(this);
        this.switchView = this.switchView.bind(this);
        this.getValidName = this.getValidName.bind(this);
    }

    renderTitle() {
        const title = this.getValidName();
        return (
            <div className='AplicacionesTitle'>
                <h3><Glyphicon glyph='list' />&nbsp; {title}!</h3>
            </div>
        )
    }

    getValidName() {
        if (this.props.view === "" || this.props.view === undefined) {
            return "Applications"
        }
        return this.props.view;
    }

    switchView() {
        const view = this.props.view;
        switch (view) {
            case "E2E":
                return <E2E />;
            case "Jenkins":
                return <Jenkins />;
            case "Orchard":
                return <Orchard />;
            case "Calendar":
                return <Calendar />;
			case "CatchphrasesApp":
				return <CatchphrasesApp />;
			 case "Profile":
                return <Profile />;
            case "Skills":
				return <Skills />;
			case "Offices":
				return <Offices />;
            case "WhatWeCanEat":
                return <WhatWeCanEat />;
            default:
                return (
                    <Dashboard
                        Apps={this.props.apps}
                        />
                );
        }
    }

    renderBodyContainer() {
        return (
            <div className='bodyContainer'>
                {this.switchView()}
            </div>
        )
    }

    renderPrincipalPanel() {
        return (
            <div className='principalPanel'>
                {this.renderTitle()}
                {this.renderBodyContainer()}
            </div>
        )
    }

    render() {
        return this.renderPrincipalPanel();
    }
}

export default Principal;
