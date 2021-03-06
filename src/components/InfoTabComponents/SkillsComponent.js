import React from 'react';
import { Pane } from "evergreen-ui";
import { PageSize } from '../PageSize';
import StatDisplayComponent from '../StatDisplayComponent';

export default class SkillsComponent extends React.Component {

    organizeColumnsForSkills(skills) {
      let filteredSkills = [];
  
      for (let currentSkill = 0; currentSkill < skills?.length; currentSkill++) {
        let skill = skills[currentSkill]
        if (skill.hasModifiers) {
          filteredSkills.push(skill)
        }
      }
  
      if (this.props.windowWidth === PageSize.DEFAULT) {
        let numberOfSkills = filteredSkills?.length;
        let columns = Math.ceil(numberOfSkills/6);
        let width = 484;
        if (columns < 4) {
          width = 432;
        } else if (columns === 4) {
          width = 360;
        } else if (columns === 5) {
          width = 284;
        } else if (columns === 6) {
          width = 232;
        }
        let allColumns = [];
        for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
          let columnInternals = [];
          for (let i = currentColumn*6; i < currentColumn*6 + 6 && i < numberOfSkills; i++) {
            columnInternals.push(<StatDisplayComponent name={filteredSkills[i]?.name} value={filteredSkills[i]?.value} width={width} height={50} marginLeft={20} marginTop={8}/>)
          }
          allColumns.push(<Pane display="flex" flexDirection="column">{columnInternals}</Pane>)
        }
  
        return allColumns;
      } else {
        return filteredSkills?.map((skill) => <StatDisplayComponent name={skill.name} value={skill.value} width="100%"/>)
      }
    }

  render() {
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={380} display="flex" justifyContent="flex-start" alignItems="flex-start" paddingTop={10} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
        {this.organizeColumnsForSkills(this.props.character.getJson().skills)}
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="450" margin="auto">
          {this.organizeColumnsForSkills(this.props.character.getJson().skills)}
        </Pane>
    }
  };
}