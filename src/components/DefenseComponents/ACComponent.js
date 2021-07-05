import React from 'react';
import { Pane } from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';

export default class ACComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="ACComponent">
      <Pane alignItems="center" justifyContent="flex-start" display="flex" flexDirection="column" margin="auto">
        <StatDisplayComponent name="AC" value={this.props.character.ac} height={50} width={300} marginTop={8}/>
        <StatDisplayComponent name="Flat-Footed" value={this.props.character.flatFooted} height={50} width={300} marginTop={16}/>
        <StatDisplayComponent name="Touch" value={this.props.character.touch} height={50} width={300} marginTop={16}/>
      </Pane>
    </div>
  };
}