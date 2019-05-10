import React, { Component } from 'react';
import {createCourse} from '../../services/courseService';
import {toast} from 'react-toastify';

class CreateCourse extends Component {
    state = { 
        title:'',
        time:'',
        price:'',
        imageUrl:''
     };
    handleSubmit = async  e => {
        e.preventDefault();
        try {
            const result = await createCourse(
                JSON.parse(JSON.stringify(this.state))
            );
            if (result.status === 200)
                toast.success('New Course has been made successfully');
        } catch (ex) {
            if (ex.response && ex.response.status === 400)
                toast.error('Please fill out all items');
        }
    }
    render() { 
        return ( 
            <form
                onSubmit={this.handleSubmit}
                className="form-group bg-light border rounded m-2 shadow p-5"
            >
                <label className="col-md-4 control-label m-2" for="txtTitle">
                    Title Course
                </label>
                <input
                    id="txtTitle"
                    name="textinput"
                    type="text"
                    placeholder="Title Course"
                    className="form-control input-md m-2"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                />
                <label
                    className="col-md-4 control-label m-2"
                    for="txtCourseTime"
                >
                    Course Time
                </label>
                <input
                    id="txtCourseTime"
                    name="textinput"
                    type="text"
                    placeholder="second:minute:hour"
                    className="form-control w-25 m-2"
                    value={this.state.time}
                    onChange={e => this.setState({ time: e.target.value })}
                />
                <label
                    className="col-md-4 control-label m-2"
                    for="txtCoursePrice"
                >
                    Course Price
                </label>
                <input
                    id="txtCoursePrice"
                    name="textinput"
                    type="text"
                    placeholder="AU$"
                    className="form-control w-25 m-2"
                    value={this.state.price}
                    onChange={e => this.setState({ price: e.target.value })}
                />

                <input
                    id="txtImageUrl"
                    name="textinput"
                    type="text"
                    placeholder="Image Link"
                    className="form-control m-2"
                    value={this.state.imageUrl}
                    onChange={e => this.setState({ imageUrl: e.target.value })}
                />

                <button className="btn btn-success m-5">Create New Course</button>
            </form>
         );
    }
}
 
export default CreateCourse;