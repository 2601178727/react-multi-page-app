/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
export default class App extends Component {
	render() {
		return (
			<div className="main index column is-8">
				<DatePicker />
			</div>
		);
	}
}
