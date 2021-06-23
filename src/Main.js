import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Beast from './Data.json'
import { Row } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

import Formbeast from './Formbeast';







class Main extends Component {


    render() {



        return (
            <>
                <Formbeast horns={this.props.horns} />

                <Row>


                    {Beast.filter(Beast => Beast.horns == 1).map(Beast => (

                        <HornedBeast image_url={Beast.image_url}
                            title={Beast.title}
                            description={Beast.description}
                            horns={Beast.horns}
                        />

                    ))}

                </Row>

                {/* <Row>


                    {Beast.map(beasts => {

                        return <HornedBeast
                            image_url={beasts.image_url}
                            title={beasts.title}
                            description={beasts.description}
                            keyword={beasts.keyword}
                            horns={beasts.horns} />

                    })
                    }





                </Row> */}
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
