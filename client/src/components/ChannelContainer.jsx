import React from 'react';
import { Channel, useChatContext } from 'stream-chat-react';
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './'

const ChannelContainer = ({ isCreacting, setIsCreating, isEditing, setIsEditing, createType }) => {
  const { channel } = useChatContext();

  if(isCreacting) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if(isEditing) {
    return (
      <div className="channel__container">
      <EditChannel setIsEditing={setIsEditing} />
    </div>
    )
  }

  const EmptyState = () => {
    <div className="channel-empty__container">
      <p className="channel-empty__first"> This is the beginning of your chat history. </p>
      <p className="channel-empty__second"> Send messages, attachment, links, emojis, and More! </p>
    </div>
  }


  return (
    <div className='channel__container'>
      <Channel 
      EmptyStateIndicator={EmptyState}
      Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  )
}

export default ChannelContainer
