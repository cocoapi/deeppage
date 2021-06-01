import React, { useEffect, useState } from 'react'
import GuestBookArticle from '../components/GuestBookArticle'
import Button from '../components/Button'
import '../styles/GuestBook.css'

const GuestBookdata = [{
  nick: 'asdf',
  profileImage: 'https://pbs.twimg.com/profile_images/809782046755147776/Vn06awMF_400x400.jpg',
  contents: '오늘은 무엇을 해야하 고민중인데스우....',
},{
  nick: 'asdf',
  profileImage: 'https://pbs.twimg.com/profile_images/809782046755147776/Vn06awMF_400x400.jpg',
  contents: '오늘은 무엇을 해야하 고민중인데스우....',
},{
  nick: 'asdf',
  profileImage: 'https://pbs.twimg.com/profile_images/809782046755147776/Vn06awMF_400x400.jpg',
  contents: '오늘은 무엇을 해야하 고민중인데스우....',
},{
  nick: 'asdf',
  profileImage: 'https://pbs.twimg.com/profile_images/809782046755147776/Vn06awMF_400x400.jpg',
  contents: '오늘은 무엇을 해야하 고민중인데스우....',
}]

const GuestBookContainer = (props) => {
  const [GuestBookList, setGuestBookList] = useState([])

  useEffect(() => {
    if (GuestBookList.length < 1) {
      setGuestBookList(GuestBookdata)
    }
  }, [GuestBookList])

  return (
    <div className="GuestBookWrapper">
      <div className="GuestBook">
        <div style={{ width: '75%', height: '100%', margin: '4px', textAlign: 'left' }}>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '4px', boxSizing: 'border-box' }}>
            <input style={{ margin: '4px', textAlign: 'left' }} type="text" placeholder="닉네임"></input>
            <input style={{ margin: '4px', textAlign: 'left' }} type="password" placeholder="비밀번호"></input>
          </div>
          <textarea style={{ height: '65%' }} placeholder='이 곳을 방문하신 여러분의 감상은 어떠신가요?' />
        </div>
        <div style={{ width: '25%', height: '100%', margin: '4px' }}>
          <div style={{ margin: '4px', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '90%', maxWidth: '135px', margin: '4px auto', height: '75%', maxHeight: '135px', marginTop: 'auto' }}><img style={{ width: '100%', maxWidth: '150px', }} src="https://pbs.twimg.com/profile_images/809782046755147776/Vn06awMF_400x400.jpg" alt="test"></img></div>
            <Button style={{ width: '90%', maxWidth: '135px', height: '20px', margin: '4px auto', marginBottom: 'auto' }}> 작성하기 </Button>
          </div>
        </div>
      </div>
      <div className="GuestBookListWrapper">
        {
          GuestBookList.length > 0 ?
            GuestBookList.map((e, idx) => {
              return <GuestBookArticle key={'guest_book_' + (idx + 1)} {...e} />
            })
            :
            <div style={{ margin: 'auto', color: '#AAAAAA' }}>
              내용이 없습니다.
            </div>
        }
      </div>
    </div>
  )
}

export default GuestBookContainer