import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Beast from './Data.json'
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// import Formbeast from './Formbeast';







class Main extends Component {

    constructor() {
        super();
        this.state = {
            horns: 0
        }
    }
    likeCounter = (count) => {
        return count + 1;
    }


    selectedHorns(value) {
        this.setState({
            horns: value
        })
    }
    render() {



        return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>View The Beasts By The Number Of Horns ❤️</Form.Label>
                        <Form.Control as="select" aria-label="Default select example" onChange={event => { this.selectedHorns(Number(event.target.value)) }}>
                            <option value="0">All The Number Of Horns</option>
                            <option value="1">one Horn</option>
                            <option value="2">two Horns</option>
                            <option value="3">three Horns</option>
                            <option value="100"> hundred Horns</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Row>

                    {
                        Beast.map((el, i) => {
                            return (
                                (this.state.horns === el.horns &&
                                    <HornedBeast key={i} title={el.title} description={el.description} image_url={el.image_url} count={0} countRequest={this.likeCounter} horns={el.horns} />
                                ) ||
                                (this.state.horns === 0 &&
                                    <HornedBeast key={i} title={el.title} description={el.description} image_url={el.image_url} count={0} countRequest={this.likeCounter} horns={el.horns} />
                                )
                            )
                        })

                    }
                    {/* {Beast.map(beasts => {

                        return <HornedBeast
                            image_url={beasts.image_url}
                            title={beasts.title}
                            description={beasts.description}
                            keyword={beasts.keyword}
                            horns={beasts.horns} />

                    })
                    } */}





                </Row>
            </>
        )
    }
}

export default Main


// / viewTitle=()=>{
//   arr.forEach(value =>{
//     let title =value.title;
//     return title ;
//   })
// }

{/* <Formbeast horns={this.props.horns} />
        
        <Row>
        
        
            {Beast.filter(Beast => Beast.horns == 1).map(Beast => (
        
                <HornedBeast image_url={Beast.image_url}
                    title={Beast.title}
                    description={Beast.description}
                    horns={Beast.horns}
                />
        
            ))}
        
        </Row> */}