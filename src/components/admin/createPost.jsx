import React, { Component } from 'react';
import _ from 'lodash';
class CreatePost extends Component {
    state = { 
        postTitle: '',
        postImageUrl: '',
        postContent: '', 
        postTags: []    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() { 
        return ( 
            <form
                className="form-group bg-light border rounded m-2 shadow p-5"
                onSubmit={this.handleSubmit}
            >
                <label className="col-md-4 control-label" htmlFor="txtTitle">
                    Post Title
                </label>
                <input
                    id="txtTitle"
                    name="postTitle"
                    type="text"
                    placeholder="Title"
                    className="form-control input-md m-2"
                    value={this.state.postTitle}
                    onChange={e => this.setState({ postTitle: e.target.value })}
                />

                <input
                    id="txtImageUrl"
                    name="postImageUrl"
                    type="text"
                    placeholder="Image Link"
                    className="form-control input-md m-2"
                    value={this.state.postImageUrl}
                    onChange={e =>
                        this.setState({ postImageUrl: e.target.value })
                    }
                />

                <textarea
                    name="postContent"
                    className="form-control m-2"
                    rows="5"
                    placeholder="Text Post"
                    value={this.state.postContent}
                    onChange={e =>
                        this.setState({ postContent: e.target.value })
                    }
                />

                <label className="col-md-4 control-label" htmlFor="txtTags">
                    Tags
                </label>

                <input
                    id="txtTags"
                    name="postTags"
                    type="text"
                    placeholder="Make the tags separate by using (,)"
                    className="form-control input-md m-2"
                    value={this.state.tags}
                    onChange={e =>
                        this.setState({
                            postTags: _.split(e.target.value, ',')
                        })
                    }
                />

                <button className="btn btn-success m-5">Create New Post</button>
            </form>
         );
    }
}
 
export default CreatePost;