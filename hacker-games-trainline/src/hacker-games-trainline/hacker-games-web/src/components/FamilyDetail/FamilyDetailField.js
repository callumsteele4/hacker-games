import React, { Component } from 'react';

class FamilyDetailField extends Component {
  render() {
    const { title, info } = this.props;

    return (
        <div>
          <div>
            {title}
          </div>
          <div>
            {info}
          </div>
        </div>
    )
  }
};

export default FamilyDetailField;