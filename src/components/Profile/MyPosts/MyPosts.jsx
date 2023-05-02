import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css"
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator, minLengthCreator } from "../../Common/Validators/Validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(50);
const minLength = minLengthCreator(2);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field 
                name="newPostText" 
                component={Textarea}
                placeholder="Enter your message"
                validate={ [required, maxLength, minLength]} />
                <div>
                    <button>Post</button>
                </div>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map(posts => <Post
        message={posts.message}
        id={posts.id}
        likesCount={posts.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <h2>Posts</h2>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts