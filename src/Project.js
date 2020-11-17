import React, { Component } from 'react';
import axios from "axios";
import {AiFillFileAdd} from 'react-icons/ai';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Modal, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap';

class Project extends Component {
state={
  data:[],
  modalShow: false,
  modalClose: false,
  form:{
        id:'',
        gts_user_project_name: '',
        gts_user_employment_type: '',
        gts_user_project_skill_ids: '',
        gts_user_role_description: '',
        gts_user_role: '',
        gts_user_project_start_date: '',
        gts_user_project_end_date: '',
        gts_user_project_site: '',
        gts_user_client: '',
        gts_user_project_description: '',
        gts_user_project_location: '',
        gts_user_team_size: '',
        dataModal: ''
  }
}

dataGet=()=>{
axios.get("http://localhost:3003/gts_user_project_details").then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

dataPost=async()=>{
  delete this.state.form.id;
 await axios.post("http://localhost:3003/gts_user_project_details",this.state.form).then(response=>{
    this.modalShow();
    this.dataGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

dataPut=()=>{
  axios.put(`http://localhost:3003/gts_user_project_details/${this.state.form.id}`, this.state.form).then(response=>{
    this.modalShow();
    this.dataGet();
  })
}

dataDelete=()=>{
  axios.delete(`http://localhost:3003/gts_user_project_details/${this.state.form.id}`).then(response=>{
    this.setState({modalClose: false});
    this.dataGet();
  })
}

modalShow=()=>{
  this.setState({modalShow: !this.state.modalShow});
}

selectProject=(project)=>{
  this.setState({
    dataModal: 'update',
    form: {
        id: project.id,
        gts_user_project_name : project.gts_user_project_name,
        gts_user_employment_type : project.gts_user_employment_type,
        gts_user_project_skill_ids : project.gts_user_project_skill_ids,
        gts_user_role_description : project.gts_user_role_description,
        gts_user_role : project.gts_user_role,
        gts_user_project_start_date : project.gts_user_project_start_date,
        gts_user_project_end_date : project.gts_user_project_end_date,
        gts_user_client : project.gts_user_client,
        gts_user_project_description : project.gts_user_project_description,
        gts_user_project_location : project.gts_user_project_location,
        gts_user_team_size : project.gts_user_team_size
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
                        <h5 className="mb-3 p-2">Project Details</h5>
                    </div>
                    <div className="col-1" style={{"float":"right"}}>
                        <button className="btn btn-outline-primary" onClick={()=>{this.setState({form: null, dataModal: 'insert'}); this.modalShow()}}><AiFillFileAdd/></button>
                    </div>
                </div>
                {
                    this.state.data.map(project=>{
                        return(
                            <div className="row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <p><label>Project Title: </label>{project.gts_user_project_name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><label>Client(Name of institute/university/company): </label>{project.gts_user_client}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <p><label>Started Working From: </label>{project.gts_user_project_start_date}</p>
                                        </div>
                                        <div className="col-4">
                                            <p><label>Worked Till: </label>{project.gts_user_project_end_date}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><label>Project Details: </label>{project.gts_user_project_description}</p>
                                        </div>
                                    </div>
                                    <div style={{"float":"right"}}>
                                        <button className="btn btn-outline-warning" onClick={()=>{this.selectProject(project); this.modalShow()}}><FaEdit/></button>{"   "}
                                        <button className="btn btn-outline-danger" onClick={()=>{this.selectProject(project); this.setState({modalClose: true})}}><FaTrashAlt/></button>
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
                                <label htmlFor="id">Project</label>
                                <Input required className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                            </div>
                            <div className="col">
                                <label htmlFor="gts_user_project_name">Title</label>
                                <Input required className="form-control" type="text" name="gts_user_project_name" id="gts_user_project_name" onChange={this.handleChange} value={form?form.gts_user_project_name: ''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_client">Client</label>
                                <Input required className="form-control" type="text" name="gts_user_client" id="gts_user_client" onChange={this.handleChange} value={form?form.gts_user_client: ''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="gts_user_project_start_date">Started Working From</label>
                                <Input required className="form-control" type="date" name="gts_user_project_start_date" id="gts_user_project_start_date" onChange={this.handleChange} value={form?form.gts_user_project_start_date:''}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="gts_user_project_end_date">Worked Till</label>
                                <Input required className="form-control" type="date" name="gts_user_project_end_date" id="gts_user_project_end_date" onChange={this.handleChange} value={form?form.gts_user_project_end_date:''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_project_skill_ids">Skills Used</label>
                                <Input required className="form-control" type="text" name="gts_user_project_skill_ids" id="gts_user_project_skill_ids" onChange={this.handleChange} value={form?form.gts_user_project_skill_ids:''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_project_location">Project Location</label>
                                <Input required className="form-control" type="text" name="gts_user_project_location" id="gts_user_project_location" onChange={this.handleChange} value={form?form.gts_user_project_location:''}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="gts_user_employment_type">Nature of Employment</label>
                                <Input required className="form-control" type="select" name="gts_user_employment_type" id="gts_user_employment_type" onChange={this.handleChange} value={form?form.gts_user_employment_type:''}>
                                    <option>--select--</option>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Contractual</option>
                                </Input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="gts_user_team_size">Team Size</label>
                                <Input required className="form-control" type="select" name="gts_user_team_size" id="gts_user_team_size" onChange={this.handleChange} value={form?form.gts_user_team_size:''}>
                                    <option>--select--</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Input>
                            </div>
                            <div className="col">
                                <label htmlFor="gts_user_role">Role</label>
                                <Input required className="form-control" type="text" name="gts_user_role" id="gts_user_role" onChange={this.handleChange} value={form?form.gts_user_role:''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_role_description">Role Description</label>
                                <Input required className="form-control" type="text" name="gts_user_role_description" id="gts_user_role_description" onChange={this.handleChange} value={form?form.gts_user_role_description:''}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="gts_user_project_description">Details of project</label>
                                <Input required className="form-control" type="textarea" name="gts_user_project_description" id="gts_user_project_description" onChange={this.handleChange} value={form?form.gts_user_project_description:''}/>
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
               Are you sure you want to delete this {form && form.gts_user_project_name} project data
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
export default Project;