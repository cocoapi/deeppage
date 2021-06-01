import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MainArticle from './containers/MainArticle'

// import logo from './logo.svg';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import './App.css';

export const UserContext = React.createContext({
  user: {},
});

export const ArticleContext = React.createContext({
  board: [],
  articles: [],
  removeByIndex: () => { },
  addItems: () => {},
  updateItems: () => {}
});

const contents = [{
  title: 'newTitle',
  article: '디비디비딮'
}, {
  title: '디비디빋비디비딥디',
  article: '딮하우스 점검하는 맨~'
}, {
  title: '엑소스 히어로즈',
  article: '바소리 넘모 조와~'
}, {
  title: '미키나노!',
  article: '중삼인거야'
}, {
  title: '멬우미 핫피',
  article: '이쭈닷테~'
}, {
  title: '아무의미없는 문자열의 나열입니다.',
  article: '장문에 대한 테스트는 해봐야할거같은데 막상 떠올리려니 떠오르는것도 없어 그냥 막 끄적여보는 아무 의미없는 문자열의 나열입니다. 이기회에 타자연습이나 하고 참으로 잘되었다고 생각하는데요? 하지만 벌써 쓸 이야기가 떨어져버린거시에요. 건담은 언제 만들지.... 포스임펄스건담도 사야하는데 언제 나올지 기대대요오오오. 아바레스트는 오늘또 만들어볼거에요',
}, {
  title: '깊은이가 도와준 문자열이에요.',
  article: `この人は何なのでしょうか。エヴァのアスカの二次創作を読み漁り、美少女ゲームに「何故か」精通しており、自身の(ある程度オタクの気がある私から見ても)明らかな性倒錯を語っておきながら、理論、あるいは権威付けにより「ただのオタク」とみなされることを忌避している感が否めません。
  と私が東さんをケナすのは、失礼ながらその職業の存在理由がわからないからです。評論家である以上、ある状況を1保守する2開拓する3遡行させる の三通りの何れかであるのが当然です。然るに東さんの立ち位置はどこでしょうか?本人からすれば2、つまり「コンテンツ批評家」という分野を生み出すことにあるのでしょう。しかし、「コンテンツ(漫画、アニメ、ラノベ)」とは結局はサブカルチャー、つまり低俗な文化、つまり趣味(それも低俗な)です。アニメラノベ漫画などの、頭を使わず楽しめる分野に批評家が介入する余地はあるのでしょうか?「カルチャー」に対抗して生まれた、気軽に消費できるはずの「サブカルチャー」に「カルチャー」の制度をいれる意義は、ないどころか蛇足、ありがた迷惑というものです。
  あるいは「一般人」「オタク」の垣根を、「コンテンツ」をカルチャーまで引き上げることでなくすことが目的ですか? だとしたら、もっと一般人受けするような、平易で、「コンテンツ」に興味をもってもらえる(具体的に作品を紹介し、その面白さを伝える)文章を書くことが肝要だと思います。
  あるいは、自己満足ですか? なら仕方無いですね。参りました。
  いい加減にしてください、東さん。`
}, {
  title: '제목이 장문인 경우에 대한 테스트 문자열이야요 ㅎㅎㅎ 이것은 어떨까나?',
  article: '쑻'
}]

const menupan = [{
  label: '홈',
  path: '/',
  subMenu: []
}, {
  label: '메뉴1',
  path: '/',
  subMenu: ['서브메뉴1', '서브메뉴2', '서브메뉴3']
}, {
  label: '메뉴2',
  path: '/',
  subMenu: ['서브메뉴10', '서브메뉴20', '서브메뉴30', '서브메뉴40', '서브메뉴50', '서브메뉴60']
}, {
  label: '메뉴3',
  path: '/',
  subMenu: []
}, {
  label: '메뉴4',
  path: '/',
  subMenu: []
}, {
  label: '메뉴5',
  path: '/',
  subMenu: []
}, {
  label: '메뉴6',
  path: '/',
  subMenu: []
}]

function App() {
  const [articles, setArticle] = React.useState([]);
  const [menuList, setMenuList] = React.useState([]);
  const [currentBoard, setBoard] = React.useState([]);
  
  const removeByIndex = (idx) => {
    if (articles.length > idx) {
      var newArticles = articles.map(e => e);
      newArticles.splice(idx, 1);
      setArticle(newArticles);
    }
  }
  const addItems = (e) => {
    console.log(e)
    if (articles.length === 0 || !articles.includes(e)) {
      setArticle([e, ...articles]);
    }
  }
  const updateItem = (idx, updateData) => {
    if(idx <= articles.length - 1){
      
    }
  }

  if(currentBoard.length <= 0){
    setBoard(contents);
  }
  useEffect(() => {
    if (menuList.length <= 0) {
      var menu = menupan.map(e => {
        var submenu = e.subMenu.map((sube, key) => {
          return (<li className={"item"} style={{ background: '#FFFFFF', width: '100%', lineHeight: '4vh', height: '4vh' }} key={'submenu-' + key}> {sube} </li>)
        })
        return { ...e, subMenu: submenu, }
      })
      setMenuList(menu);
    }
  }, [menuList])

  return (
    <Router>
      <div style={{ /* background: '#22800F' */ }}>
        <header
          style={{
            height: '15vh',
          }}
        >
          <div style={{ height: '70%', borderBottom: '1px solid #DDDDDD' }}> 이곳은 헤더 </div>
          <div style={{ height: '30%', display: 'flex', flexDirection: 'row', boxSizing: "border-box", justifyContent: 'center' }}>
            {
              menuList.map((e, key) => {
                return (
                  <div className="fold" key={"submenu-"+key} style={{ width: Math.floor(80 / menuList.length) + '%'}}>
                    <Link style={{ height: '100%', textDecoration: 'none', display: 'flex' }} to={e.path} key={'menu-' + key}>
                      <div style={{ width: '100%', margin: 'auto 0px', color: '#000000', position: 'relative' }} title={e.label} >
                        {e.label}
                      </div>
                    </Link>
                    <div className={"submenu submenu_"+e.subMenu.length}>
                      <ul>
                        { e.subMenu.length > 0 ? e.subMenu.map(sub=> sub): ''}
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </header>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '80vh',
          }}
        >
          <div
            className="left_menu_bar"
            style={{
              width: '14vw',
              height: '100%',
            }}
          >
            - left menu bar -
            <Link to='/'>
              <div> - Main </div>
            </Link>
            <Link to='/Login'>
              <div> - Login </div>
            </Link>
            <Link to='/GuestBook'>
              <div> - 방명록 </div>
            </Link>
          </div>
          <article>
            <UserContext.Provider value={{ user: {} }}>
              <MainArticle ArticleDat={{ board: currentBoard, articles: articles, removeByIndex: removeByIndex, addItems: addItems }} />
            </UserContext.Provider>
          </article>
          <nav
            style={{
              minWidth: '28vw',
              height: '100%',
            }}
          >
          </nav>
        </div>
        <footer> this is footer </footer>
      </div>
    </Router>
  );
}

export default App;
