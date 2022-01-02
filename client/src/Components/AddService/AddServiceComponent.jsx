import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AddService.css';

export default class AddService extends Component {
  constructor(props) {
    super(props);

    this.onChangeServiceName = this.onChangeServiceName.bind(this);
    this.onChangeServiceProvider = this.onChangeServiceProvider.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      serviceProvider: '',
      serviceName: '',
      description: '',
      category: '',
      startDate: new Date(),
      endDate: new Date(),
      availability: ''
    }
  }

  onChangeServiceName(e) {
    this.setState({
      serviceName: e.target.value
    })
  }

  onChangeServiceProvider(e) {
    this.setState({
      serviceProvider: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onChangeStartDate(date) {
    this.setState({
      startDate: date
    })
  }

  onChangeEndDate(date) {
    this.setState({
      endDate: date
    })
  }

  onChangeAvailability(e) {
    this.setState({
      availability: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const service = {
      serviceProvider: this.state.serviceProvider,
      serviceName: this.state.serviceName,
      description: this.state.description,
      category: this.state.category,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      availability: this.state.availability
    }

    console.log(service);

    axios.post('http://localhost:5000/service/add', service)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className="col-md-4 offset-md-4">
        <h3>Add New Service</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group ">
            <label>Service Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.serviceName}
              onChange={this.onChangeServiceName}
            />
          </div>

          <div className="form-group">
            <label>Service Provider: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.serviceProvider}
              onChange={this.onChangeServiceProvider}
            />
          </div>

          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Category: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </div>

          <div className="row">
            <div className="form-group col">
              <label>Start Date: </label>
              <div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.onChangeStartDate}
                />
              </div>
            </div>

            <div className="form-group col">
              <label>End Date: </label>
              <div>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.onChangeEndDate}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Availability: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.availability}
              onChange={this.onChangeAvailability}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Add Service" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}