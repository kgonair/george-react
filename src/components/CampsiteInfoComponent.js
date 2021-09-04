import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import { CAMPSITES }  from '../shared/campsites';


class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }
    renderComments(comments){
        if(comments){
            return (

                <div className = "col-md-5 m1">
                    <h4>Comments</h4>
                    {comments.map(
                        comment => <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p>
                            <p>{comment.date}</p>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>

                            </div>

                        
                    )}
                </div>
            )
            

            
        }
        return <div />


    }
    renderCampsite(campsite){
        if (campsite) {
                return (
                    <div className="col-md-5 m-1" >

                        <Card>
                            <CardImg top src={campsite.image} alt={campsite.name} />
                            <CardBody>
                                <CardTitle>{campsite.name}</CardTitle>
                                <CardText>{campsite.description}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                )
        }

    }
    render() {
        if (this.props.campsite) {
            return (
            <div className="container">
                <div className="row" >
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            </div>
            )
        }
        return <div />
    }
}

export default CampsiteInfo;