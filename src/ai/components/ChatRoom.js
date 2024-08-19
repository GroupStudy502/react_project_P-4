import React, { useRef, useEffect } from "react";
import ChatWrapper from "./ChatWrapper";

function ChatRoom(){
    const scrollRef = useRef();
    /*
    useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        //console.log(scrollRef.current); // ChatWrapper 출력

    }, [chatData])
    */
    return (
        <div ref={scrollRef}>
            
    	<ChatWrapper>
           
        </ChatWrapper>
        </div>
    );
};

export default React.memo(ChatRoom);