import React from 'react'
import GetInfo from './NameContactEmail/GetInfo'
import SetData from './NameContactEmail/SetData'
import GetDataFetch from './NameContactEmail/GetDataFetch'
import SetAllData from './NameContactEmail/SetDataFetch'
import Take from './FetchPractice/Take'
import Give from './FetchPractice/Give'
import GiiveData from './FetchPractice/GiiveData'
import Setter from './NameContEmlAXIOS/Setter'
import Getter from './NameContEmlAXIOS/Getter'
import PUT from './NameContEmlAXIOS/PUT'
import Delete from './NameContEmlAXIOS/Delete'
import POSTDATA from './NmEmlContFetch/POSTDATA'
import GETDATA from './NmEmlContFetch/GETDATA'
import SendData from './Post Using Fetch/SendData'
import GetData from './Post Using Fetch/GetData'
import PostFetch from './GETPOSTFetch/PostFetch'
import GetFetch from './GETPOSTFetch/GetFetch'
import Register from './LoginRegister/Register'
import Login from './LoginRegister/Login'
import PostImage from './FetchTitleIMAGE/PostImage'
import PostImage2 from './FetchTitleIMAGE/PostImage2'
import GetImage from './FetchTitleIMAGE/GetImage'
import RegisterToken from './SaveToken/Register'
import LoginToken from './SaveToken/Login'
import Logout from './SaveToken/Logout'
import ImageFetchINPUT from './ImageFETCHnew/ImageFetchINPUT'
import ImageFetchOUTPUT from './ImageFETCHnew/ImageFetchOUTPUT'
import ImageFetchOutputImage from './ImageFETCHnew/ImageFetchOutputImage'

function App() {
  return (
    <div>

      <SetData />

      <GetInfo />

      <GetDataFetch />

      <SetAllData />




      {/* Fetch Practice */}
      <p> Fetch seeeeeeeeeeeeeeeeeeeeeeeee</p>
      <Take />

      <br /> <br />

      <Give />

      {/* give khud se */}
      <p>This is dataaaaaaaaaa</p>
      <GiiveData />




      {/* axios se get and post */}
      <p>POST usin Axios</p>
      <Setter /> {/* post */}

      <br />
      <Getter />
      {/* axios se put yoshita */}

      <PUT />

      <Delete />

      {/* Fetch POST and Get */}
      <POSTDATA />
      <GETDATA />

      {/* send and Receive */}
      <SendData />
      <GetData />

      {/* Get Post Fetch */}

      <PostFetch />
      <GetFetch />



      {/* Login Register */}
      <Register />

      <Login />


      {/* Image Post and Get */}
      <PostImage />

      <PostImage2 />

      <GetImage />
      {/* --------------------------------------------------------------------- */}

      {/* Save Token */}
      <RegisterToken />

      <LoginToken />

      <Logout />

      {/* Image Fetch */}
      <ImageFetchINPUT />

      <ImageFetchOUTPUT />
      <ImageFetchOutputImage />

    </div>
  )
}

export default App