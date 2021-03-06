import React from 'react';
import { Pane } from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';
import { PageSize } from '../PageSize';

export default class ACComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
      return <Pane alignItems="center" justifyContent="flex-start" display="flex" flexDirection="column" margin="auto">
        <StatDisplayComponent name="AC" value={this.props.character.getJson().ac} height={50} width={300} marginTop={8}/>
        <StatDisplayComponent name="Flat-Footed" value={this.props.character.getJson().flatFooted} height={50} width={300} marginTop={16}/>
        <StatDisplayComponent name="Touch" value={this.props.character.getJson().touch} height={50} width={300} marginTop={16}/>
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="100%">
        <StatDisplayComponent name="AC" value={this.props.character.getJson().ac} width="100%"/>
        <StatDisplayComponent name="Flat-Footed" value={this.props.character.getJson().flatFooted} width="100%"/>
        <StatDisplayComponent name="Touch AC" value={this.props.character.getJson().touch} width="100%"/>
      </Pane>
    }
  };
}