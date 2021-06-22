import React, { Component } from 'react'
import { Card , Col} from 'react-bootstrap';
import SelectedBeast from './SelectedBeast ';

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
            <Col>

            <Card style={{ width: '18rem', height: '450px' }}>
                <Card.Img variant="top" src={this.props.image_url}  height='300px' />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                        {this.props.horns}
                    </Card.Text>
                    <SelectedBeast
                    title={this.props.title} 
                    description= {this.props.description}
                    image_url={this.props.image_url}
                    vote={this.state.vote} 
                    keyword={this.props.keyword}
                        horns={this.props.horns}  
                    />
                    <span><i class="fab fa-gratipay" onClick={this.addVote}> {this.state.vote}</i></span>
                </Card.Body>
            </Card>
            </Col>
            


)
}
}

export default HornedBeast



// first try  
// <div>
//     <h2>{this.props.title}</h2>
//     <a onClick={this.addVote}><img src={this.props.image_url}  style ={{width:'200px'}}/></a>
//     <span><i class="fab fa-gratipay"> {this.state.vote}</i></span>
//     <p>{this.props.description}</p>
//     <p>{this.props.horns}</p>

// </div>

////////////////////////////////////////////////////////////////

