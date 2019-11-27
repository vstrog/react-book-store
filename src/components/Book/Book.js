import React, { Component } from 'react';
import './Book.scss';

export default class Book extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        const {id, title, img, author, info} = this.props.book;
        const {removeBook} = this.props;
        return (
            <article className="book">
                <div className="img-container">
                    <img src={img} alt="" />
                
                    <span className="close-btn" onClick={()=>removeBook(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="book-info">
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <h5>info {" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
