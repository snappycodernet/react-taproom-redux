import React from 'react';
import KegListItem from './KegListItem';
import { connect } from 'react-redux';

const KegList = (props) => {
  console.log(props);

  return(
    <div>
      <h3>Here is what we currently have on tap!</h3>
      {
        props.kegs.map(keg => {
          return (
            <div key={keg.id}>
              <KegListItem keg={keg}/>
            </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    kegs: state
  }
}

export default connect(mapStateToProps)(KegList);