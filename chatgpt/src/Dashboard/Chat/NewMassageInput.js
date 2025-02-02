import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';

const NewMassageInput = () => {
    const [content, setContent] = useState("");

    const proceedMessage = () => {
        const message = {
            aiMessage: false,
            content,
            id: uuid(),
            animate: false,
        };

        console.log(message)

        // append this message to our local store

        // sent message to the server

        // reset value of the input
        setContent("");

    };

    const handleSendMessage = () => {
        if(content.length > 0) {
            proceedMessage();
        }
    };

    const handleKeyPressed = (event) => {
        if(event.code === "Enter" && content.length > 0 ) {
            proceedMessage();
        }
    }

    return (
        <div className='new_message_input_container'>
            <input
                className='new_message_input'
                placeholder='Sent a message ...'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyPressed}
            />
            <div className='new_message_icon_container' onClick={handleSendMessage}>
                <BsSend color='grey' />
            </div>
        </div>
    );
};

export default NewMassageInput;