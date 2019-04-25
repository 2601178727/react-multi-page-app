import React, { Component } from "react";
import {
	Button,
	Input,
	Image
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import logo from 'src/static/images/react-multi.png'

export default class App extends Component {
	render() {
		return (
			<div className="main index column is-8">
				<Button primary>Primary</Button>
				<Image src={logo} size='small' />
				<Input placeholder='Search...' />
			</div>
		);
	}
}
