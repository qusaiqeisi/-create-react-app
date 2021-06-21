import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0,
        }
    }
    addVote = () => {
        this.setState({
            vote: this.state.vote + 1,
        })
    }

    render() {
        return (
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <a onClick={this.addVote}><img src={this.props.image_url}  style ={{width:'200px'}}/></a>
            //     <span><i class="fab fa-gratipay"> {this.state.vote}</i></span>
            //     <p>{this.props.description}</p>
            //     <p>{this.props.horns}</p>

            // </div>

            <Card style={{ width: '18rem', height: '450px' }}>
                <Card.Img variant="top" src={this.props.image_url} onClick={this.addVote} height='300px' />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                        {this.props.horns}
                    </Card.Text>
                    <span><i class="fab fa-gratipay"> {this.state.vote}</i></span>
                </Card.Body>
            </Card>


        )
    }
}

export default HornedBeast
