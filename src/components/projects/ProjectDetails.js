import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return(
    <div className='container section project-details'>
        <div className='card z-depth-0'>
            <div className='card-content'>
                    <span className='card-title'>Project Title - {id}</span>
                    <p>Lorem Ipsum asjdcakmsdocnimowjdnmf1iuheqw80ybd boibd8y buowbd08 ywboiubdv ubdovub8asbdcn
                    </p>
            </div>
            <div className='card-action gret lighten-4 grey-text'>
                <div>Posted by Ismael</div>
                <div>3rd January 10am</div>
            </div>
        </div>
    </div>
    )
}

export default ProjectDetails