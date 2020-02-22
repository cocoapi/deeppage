import React from 'react';

const InnerArticleTitle = (props) => {
  return(
    <div style={{
      backgroundColor: '#BBBBBB',
      display: 'flex',
      flexDirection: 'row',
      padding: '4px',
      justifyContent: 'space-between',
    }}>
      <div> { props.content } </div>
      <div style={{
        margin: '0px 6px',
      }}> x </div>
    </div>
  );
}

export default InnerArticleTitle;