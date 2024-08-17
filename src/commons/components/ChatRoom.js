import React, { useRef } from "react";
import ChatWrapper from "./ChatWrapper";

function ChatRoom(){
    const scrollRef = useRef();
    //console.log(scrollRef.current); // ChatWrapper 출력
    
    return (
    	<ChatWrapper ref={scrollRef}>
           
        </ChatWrapper>
    );
};

export default React.memo(ChatRoom);