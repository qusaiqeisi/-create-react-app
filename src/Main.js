import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Beast from './Data.json'
import {Row} from 'react-bootstrap';







class Main extends Component {

    render() {


        return (
            <Row>
                
             
                {Beast.map(beasts=> {

                    return <HornedBeast
                        image_url={beasts.image_url}
                        title={beasts.title}
                        description={beasts.description}
                        keyword={beasts.keyword}
                        horns={beasts.horns} />

                })
                }
                




            </Row>
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
    