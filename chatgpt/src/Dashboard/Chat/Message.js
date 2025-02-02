import React, { useEffect, useRef, useState } from 'react';
import { FcMindMap } from "react-icons/fc";
import { GrUser } from 'react-icons/gr';

const SlowText = (props) => {
    const { speed, text } = props;

    const [placeholder, setPlaceholder] = useState(text[0]);

    const index = useRef(0);

    useEffect(() => {
        function tick() {
            index.current++;
            setPlaceholder((prev) => prev + text[index.current]);
        }
        if (index.current < text.length -1) {
            let addChar = setInterval(tick, speed);
            return () => clearInterval(addChar);
        }
    }, [placeholder, speed, text]);

    return <span>{placeholder}</span>
}

const Message = ({ content, aiMessage, animate }) => {
    return (
        <div className='messages_container'
            style={{ background: aiMessage ? 'rgb(247, 247, 248)' : 'white' }}
        >
            <div className='message_avatar_container'>
                {aiMessage ? <FcMindMap /> : <GrUser />}
            </div>
            <p className='message_text'>
               {animate ? <SlowText speed={30} text={content} /> : content}
            </p>
        </div>
    );
};

export default Message;