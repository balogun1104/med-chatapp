import React from 'react'
import { StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey = 'emxdqfhehxh6';

const cleint = StreamChat.getInstance(apiKey)

const App = () => {
  return (
    <div className='app_wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>
    </div>
  )
}

export default App
