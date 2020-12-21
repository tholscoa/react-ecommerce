import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'
import SECTION_DATA from './directory.data';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: SECTION_DATA
    }
  }

  render(){
    return(
      <div className="directory-menu">
        {this.state.section.map(({id, ...otherSectionParams}) => <MenuItem key={id} {...otherSectionParams}/>)}
      </div>
    )
  }
}

export default Directory;