import React, { Component } from 'react';
import axios from "axios";
import {AiFillFileAdd} from 'react-icons/ai';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Modal, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap';

class Education extends Component {
state={
  data:[],
  modalShow: false,
  modalClose: false,
  form:{
        id:'',
        gts_user_degree_name:'',
        gts_user_degree_institute:'',
        gts_user_degree_location:'',
        gts_user_degree_start_date:'',
        gts_user_degree_end_date:'',
        gts_user_degree_marks_percentage:'',
        gts_user_degree_grade:'',
        user_id:1,
        dataModal: ''
  }
}

dataGet=()=>{
    axios.get("http://localhost:3003/gts_user_degree_details").then(response=>{
            this.setState({data: response.data});
        }).catch(error=>{
        console.log(error.message);
    })
}

dataPost=async()=>{
    delete this.state.form.id;
    await axios.post("http://localhost:3003/gts_user_degree_details",this.state.form).then(response=>{
            this.modalShow();
            this.dataGet();
        }).catch(error=>{
        console.log(error.message);
    })
}

dataPut=()=>{
    axios.put(`http://localhost:3003/gts_user_degree_details/${this.state.form.id}`, this.state.form).then(response=>{
        this.modalShow();
        this.dataGet();
    })
}

dataDelete=()=>{
    axios.delete(`http://localhost:3003/gts_user_degree_details/${this.state.form.id}`).then(response=>{
        this.setState({modalClose: false});
        this.dataGet();
    })
}

modalShow=()=>{
    this.setState({modalShow: !this.state.modalShow});
}

selectEducation=(education)=>{
    this.setState({
        dataModal: 'update',
        form: {
            id: education.id,
            gts_user_degree_name: education.gts_user_degree_name,
            gts_user_degree_institute: education.gts_user_degree_institute,
            gts_user_degree_location: education.gts_user_degree_location,
            gts_user_degree_start_date: education.gts_user_degree_start_date,
            gts_user_degree_end_date: education.gts_user_degree_end_date,
            gts_user_degree_marks_percentage: education.gts_user_degree_marks_percentage,
            gts_user_degree_grade: education.gts_user_degree_grade
        }
    })
}

handleChange=async e=>{
    e.persist();
    await this.setState({
    form:{
        ...this.state.form,
        [e.target.name]: e.target.value
    }
    });
    console.log(this.state.form);
}

componentDidMount() {
    this.dataGet();
}
  
    render(){
        const {form}=this.state;
    return (
      <div>
        <div className="container align-items-center">
        <div className="mt-3">
            <div className="border border-dark rounded-lg">
                <div className="row">
                    <div className="col">
                        <h5 className="mb-3 p-2">Education Details</h5>
                    </div>
                    <div className="col-1" style={{"float":"right"}}>
                        <button className="btn btn-outline-primary" onClick={()=>{this.setState({form: null, dataModal: 'insert'}); this.modalShow()}}><AiFillFileAdd/></button>
                    </div>
                </div>
                {
                    this.state.data.map(education=>{
                        return(
                            <div className="row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <label>Name of degree: {education.gts_user_degree_name}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Name of Institute/University: {education.gts_user_degree_institute}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label>Start Date: {education.gts_user_degree_start_date}</label>
                                        </div>
                                        <div className="col-4">
                                            <label>Completion Date: {education.gts_user_degree_end_date}</label>
                                        </div>
                                    </div>
                                    <div style={{"float":"right"}}>
                                        <button className="btn btn-outline-warning" onClick={()=>{this.selectEducation(education); this.modalShow()}}><FaEdit/></button>{"   "}
                                        <button className="btn btn-outline-danger" onClick={()=>{this.selectEducation(education); this.setState({modalClose: true})}}><FaTrashAlt/></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    
    <Modal isOpen={this.state.modalShow}>
        <ModalHeader style={{display: 'block'}}>
            {this.state.dataModal==='insert'?
                    <button className="btn btn-outline-primary">
                        <AiFillFileAdd/>{" "}Add Details
                    </button>
                    : 
                    <button className="btn btn-outline-warning">
                        <FaEdit/>{" "}Update Details
                    </button>}
            <span style={{float: 'right'}} onClick={()=>this.modalShow()}>x</span>
        </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-2">  
                                <label htmlFor="id">Education</label>
                                <Input required className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                            </div>
                            <div className="col">
                                <label htmlFor="gts_user_degree_name">Name of the degree: </label>
                                <Input required className="form-control" type="text" name="gts_user_degree_name" id="gts_user_degree_name" onChange={this.handleChange} value={form?form.gts_user_degree_name: ''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_degree_institute">University/Institute</label>
                                <Input required className="form-control" type="text" name="gts_user_degree_institute" id="gts_user_degree_institute" onChange={this.handleChange} value={form?form.gts_user_degree_institute: ''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_degree_location">Education Location</label>
                                <Input required className="form-control" type="select" name="gts_user_degree_location" id="gts_user_degree_location" onChange={this.handleChange} value={form?form.gts_user_degree_location:''}>
                                    <option>--select--</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Maharashtra</option>
                                    <option>Orissa</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>West Bengal</option>
                                </Input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="gts_user_degree_start_date">Started Year</label>
                                <Input required className="form-control" type="date" name="gts_user_degree_start_date" id="gts_user_degree_start_date" onChange={this.handleChange} value={form?form.gts_user_degree_start_date:''}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="gts_user_degree_end_date">Passing Year</label>
                                <Input required className="form-control" type="date" name="gts_user_degree_end_date" id="gts_user_degree_end_date" onChange={this.handleChange} value={form?form.gts_user_degree_end_date:''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="gts_user_degree_marks_percentage">Percentage</label>
                                <Input required className="form-control" type="number" min="0" step="0.1" name="gts_user_degree_marks_percentage" id="gts_user_degree_marks_percentage" onChange={this.handleChange} value={form?form.gts_user_degree_marks_percentage:''}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="gts_user_degree_grade">Grade</label>
                                <select required className="form-control" type="select" name="gts_user_degree_grade" id="gts_user_degree_grade" onChange={this.handleChange} value={form?form.gts_user_degree_grade:''}>
                                    <option>--select--</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                    <option>F</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.dataModal==='insert'?
                    <button className="btn btn-success" onClick={()=>this.dataPost()}>
                    Save
                  </button>: <button className="btn btn-primary" onClick={()=>this.dataPut()}>
                    Update
                  </button>}
                    <button className="btn btn-danger" onClick={()=>this.modalShow()}>Cancel</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalClose}>
            <ModalBody>
               Are you sure you want to delete this {form && form.gts_user_degree_name} education data
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.dataDelete()}>YES</button>
              <button className="btn btn-secondary" onClick={()=>this.setState({modalClose: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default Education;