import React from  'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {

  renderSubtitle() {
    if(this.props.subTitle){
      return <h3 className="title-bar__subtitle">{this.props.subTitle}</h3>;
    }
  }


  render () {
    return (
      <div className="title-bar">
        <div className='wrapper'>
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>

      </div>
    );
  }
}

TitleBar.propTypes = {
  title   : PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

//établir un prop par default
// TitleBar.defaultProps = {
//   title: 'Default title'
// };
