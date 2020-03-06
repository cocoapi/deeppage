import React from 'react';

const InnerArticleTitle = (props) => {
  console.log(props.idx);
  return(
    <div style={{
      backgroundColor: '#dadada',
      display: 'flex',
      flexDirection: 'row',
      padding: '4px',
      justifyContent: 'space-between',
    }}>
      <div> { props.content } </div>
      <div style={{
        margin: '0px 6px',
        cursor: 'pointer',
        zIndex: '10',
      }}
      onMouseDown={e => { e.stopPropagation(); props.close.callback(props.close.idx)}}> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
      </div>
    </div>
  );
}

export default InnerArticleTitle;