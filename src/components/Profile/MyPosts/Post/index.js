import React from 'react'
import s from '../Post/post.module.css'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleChange = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div className = {s.mainContainer}>
                <div className={s.imgContainer}>
                <img src='https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300' alt ='i'/>
                </div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    <button onClick={this.handleChange}>Likes</button>
                    
                </div>
                <div>
                {this.state.count}
                </div>
            </div>
        )
    }
}