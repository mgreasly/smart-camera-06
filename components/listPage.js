import { Component } from 'preact';
import { connect } from 'redux-zero/preact';
import {mapToProps, actions} from './store';

class ListPage extends Component {
	render() {
        return (
            <div id="results">
                <h1>Results...</h1>
                <img width="300" src={this.props.image} />
            </div>
		);
   	}
};

export default connect(mapToProps, actions)(ListPage);
