import React, { Component } from "react";
import {
    MDBBox,
    MDBRow,
    MDBTooltip,
    MDBIcon,
    MDBCol
} from "mdbreact";

class Technologies extends Component {
    render() {
        return (

            <div className="my-5" id="Tecnologias">

                <div class="divider-new">
                    <h2 className='h1-responsive blue-text font-weight-bold text-center'>Tecnologías que utilizamos</h2>
                </div>

            <MDBBox className="z-depth-2 rounded p-5 text-center" bgColor="white">
                <h4 className='h5-responsive'> Lenguajes</h4>
                <hr/>
                <MDBRow className="mb-5">
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="html5"  className="orange-text" size="4x"/>
                            </div>
                            <div>HTML5</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="css3-alt" className="blue-text" size="4x" />
                            </div>
                            <div>CSS3</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="js-square"className="amber-text" size="4x" />
                            </div>
                            <div>JavaScript</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="php"className="blue-grey-text" size="4x" />
                            </div>
                            <div>PHP</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="python" className="indigo-text" size="4x" />
                            </div>
                            <div>Python</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol middle>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <img src={require("../images/c++.png")}/>
                            </div>
                            <div>C++</div>
                        </MDBTooltip>
                    </MDBCol>
                </MDBRow>

                <h4 className='h5-responsive'> Frameworks y plataformas</h4>
                <hr/>
                <MDBRow>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="laravel" className="red-text" size="4x"/>
                            </div>
                            <div>Laravel</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="vuejs" className="teal-text" size="4x" />
                            </div>
                            <div>VueJS</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="react" className="cyan-text" size="4x" />
                            </div>
                            <div>ReactJS</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="git-alt" className="red-text" size="4x" />
                            </div>
                            <div>Git</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <MDBIcon fab icon="node" className="green-text" size="4x" />
                            </div>
                            <div>NodeJS</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol middle>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <img src={require("../images/django.png")}/>
                            </div>
                            <div>Django</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol middle>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <img src={require("../images/postgresql.png")}/>
                            </div>
                            <div>PostgresSQL</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol middle>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <img src={require("../images/mysql.png")}/>
                            </div>
                            <div>MySQL</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol middle>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <img src={require("../images/Qt.png")}/>
                            </div>
                            <div>Qt</div>
                        </MDBTooltip>
                    </MDBCol>
                    <MDBCol middle>
                        <MDBTooltip placement="top" domElement tag="div">
                            <div>
                                <img src={require("../images/flutter.png")}/>
                            </div>
                            <div>Flutter</div>
                        </MDBTooltip>
                    </MDBCol>
                </MDBRow>
            </MDBBox>
            </div>
        );
    }
}

export default Technologies;