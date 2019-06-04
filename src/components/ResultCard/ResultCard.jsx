import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fetchDistance } from '../../api/fetchDistance';

export class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: ''
    };
  }
  
  componentDidMount() {
    const { user, point } = this.props

    fetchDistance(user.location, point)
      .then(distance => this.setState({ distance }))
  }
    
  
  render() {
    const { id, title, address} = this.props

    return (
    <Link to={`/kys/locations/${id}`} className="ResultCard">
      <article>
        <div className="card-info">
            <h3>{title}</h3>
            <p>{address.split(';')[0]} <br /> {address.split(';')[1]}</p>
        </div>
        <div className="distance-container">
          <p>{this.state.distance}</p>
        </div>
      </article>
    </Link>
  )

  }
  
    
}
