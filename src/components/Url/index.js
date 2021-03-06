import React from 'react'; 
import './url.scss'
import PropTypes from 'prop-types'


function Url(props){

    return(
        <div className={props.styleClass }>
            <a href={props.url} target="_blank" rel="noreferrer">{props.text}</a>
        </div>
    )
}

                                   
Url.propTypes = {

    careerUrl: PropTypes.string,
    jobTitle: PropTypes.string
}
export default Url;