import React, { Component } from "react";
import
{
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdbreact';

class Mision extends Component {
    render() {
        return (
            <div className="mt-5">
                <div className="divider-new">
                    <h2 className='h1-responsive blue-text font-weight-bold text-center'>Que nos caracteriza</h2>
                </div>

                <MDBRow>
                    <MDBCol size="md" className="z-depth-2 p-3 mb-3 rounded mx-3 text-center" bgColor="white">
                        <MDBIcon icon='cogs' size="2x" className='blue-text' />
                        <h3 className="h3-responsive font-weight-bold blue-text"> Eficiencia</h3>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur
                            quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dolore cum accusamus eveniet
                            molestias voluptatum inventore laboriosam labore sit,
                            aspernatur praesentium iste impedit quidem dolor veniam.
                        </p>
                    </MDBCol>

                    <MDBCol size="md" className="z-depth-2 p-3 mb-3 rounded mx-3 text-center" bgColor="white">
                        <MDBIcon icon='thumbs-up' size="2x" className='pink-text' />
                        <h3 className="h3-responsive font-weight-bold pink-text"> Compromiso</h3>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur
                            quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dolore cum accusamus eveniet
                            molestias voluptatum inventore laboriosam labore sit,
                            aspernatur praesentium iste impedit quidem dolor veniam.
                        </p>
                    </MDBCol>

                    <MDBCol size="md" className="z-depth-2 p-3 mb-3 rounded mx-3 text-center" bgColor="white">
                        <MDBIcon icon='clock' size="2x" className='green-text' />
                        <h3 className="h3-responsive font-weight-bold green-text"> Puntualidad</h3>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur
                            quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dolore cum accusamus eveniet
                            molestias voluptatum inventore laboriosam labore sit,
                            aspernatur praesentium iste impedit quidem dolor veniam.
                        </p>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}

export default Mision;