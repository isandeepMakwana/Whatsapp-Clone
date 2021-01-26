import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from 'react-router-dom';


function SidebarChat({ id, name, addNewChat }) {
    const [messages, setMessages] = useState([]);
    const [randomNumber, setRandomNumber] = useState("");
    useEffect(() => {
        if (id) {
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot((onSnapshot) => setMessages(onSnapshot.docs.map((doc) => doc.data()
            )))
        }

    }, [id])



    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please Enter name for chat room");

        if (roomName) {
            // do some database stuff  ...
            db.collection("rooms").add({
                name: roomName,
            })
        }
    };



    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${randomNumber}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>

    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new Chat </h2>
            </div>
        );
}

export default SidebarChat
