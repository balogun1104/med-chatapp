import React, {useState, useEffect} from 'react'
import { useChatContext } from 'stream-chat-react';

import { SearchIcon }  from '../assets'

const ChannelSearch = () => {

const [query, setQuery] = useState('');
const [loading, setLoading] = useState(false);

const getChannel = async (text) => {
    try {
        //Todo: fetch channels
    } catch (error) {
        setQuery('')
    }
}

const onSearch = (event) => {
    event.preventDeault();
    setLoading(true);
    setQuery(event.target.value);
    getChannel(event.target.value)
}


  return (
    <div className='channel-search__container'>
        <div className="channel-search__input__wrapper ">
            <div className="channel-search__input__icon ">
                <SearchIcon />
            </div>
            <input
            className="channel-search__input__text"
            type="text" 
            placeholder='search'
            value={query} 
            onChange={onSearch}
             />
        </div>
    </div>
  )
}

export default ChannelSearch
