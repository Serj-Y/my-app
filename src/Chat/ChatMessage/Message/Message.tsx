import React from "react";
import DefaultPhoto from "../../../Common//assets/img/4314581-200.png"
import styles from "./Message.module.scss"

export type ChatMessageType = {
    message: string;
    userName: string;
    photo: string | undefined;
    userId: number

}


export const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {


    return (
        <div className={styles.messageContainer}>
            <div className={styles.namePhotoContainer} >
                <img className={styles.userPhoto} src={message.photo} alt="userPhoto" />
                <div className={styles.userName} >
                    {message.userName}
                </div>
            </div>
            <div className={styles.message} >
                Message:{message.message}
            </div>
        </div>
    );
};
