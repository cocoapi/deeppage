import React from 'react';

const GuestBookArticle = (props) => {
  return (
    <div className="GuestBook" style={{marginTop: '8px'}}>
      <div style={{ width: '75%', height: '100%', padding: '4px', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '4px', boxSizing: 'border-box' }}>
          {props.nick}
        </div>
        <div style={{ width: '100%', height: '100%', margin: '4px', textAlign: 'left' }}>
          {props.contents}
        </div>
      </div>
      <div style={{ display: 'flex', width: '25%', height: '100%', padding: '4px' }}>
        <div style={{ width: '90%', maxWidth: '135px', margin: 'auto auto', height: '75%', maxHeight: '135px', }}><img style={{ width: '100%', maxWidth: '150px', }} src={props.profileImage} alt="test"></img></div>
      </div>
    </div>
  )
}

export default GuestBookArticle