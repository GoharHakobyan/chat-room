import React from 'react'
import Post from './Post'

const MyPosts = (props) => {
    const postElements =props.posts.map(elem => <Post key={elem.id} title={elem.title} />)
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <p>My posts</p>
            <div>
                <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost} >Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts