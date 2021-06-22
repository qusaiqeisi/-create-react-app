import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'





export class SelectedBeast extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModel = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <>
            <Button onClick={this.handleModel}>
              more information
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleModel}>
              <Modal.Header closeButton >
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src={this.props.image_url} width='450px' height='200px' />
                  <br/>
              
                  <p>{this.props.description}</p>
                  <p>{this.props.keyword}</p>
                  <p>{this.props.horns}</p>
                  <span> <i className="fas fa-heart"> {this.props.vote}</i></span>
                  </Modal.Body>
              <Modal.Footer>
                <Button  onClick={this.handleModel}>
                  Close
                </Button>
               
              </Modal.Footer>
            </Modal>
          </>
        )
    }
}

export default SelectedBeast





{/* <Col>

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
        vote={this.state.vote}/>
        <span><i class="fab fa-gratipay" onClick={this.addVote}> {this.state.vote}</i></span>
    </Card.Body>
</Card>
</Col> */}

////////////////////////
{/* <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> */}
///////////////////////// checking the working ///////////////////
