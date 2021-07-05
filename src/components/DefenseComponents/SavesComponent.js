import React from 'react';
import { Pane } from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';

export default class SavesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return <div className="SavesComponent">
            <Pane alignItems="center" justifyContent="flex-start" display="flex" flexDirection="column" margin="auto">
                <StatDisplayComponent name="Fort" value={this.props.character.fortitude} height={50} width={300} marginTop={8}/>
                <StatDisplayComponent name="Ref" value={this.props.character.reflex} height={50} width={300} marginTop={16}/>
                <StatDisplayComponent name="Will" value={this.props.character.will} height={50} width={300} marginTop={16}/>
            </Pane>
        </div>
    };
}