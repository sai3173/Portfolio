import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,target = '_self', label,icon,classes,download
}) => {
if(href){


  return (
    
    <a href={href}
    target={target}
   
    download={download}
    className={"btn btn-primary" + classes  }>
        {label}
        {icon ?
        <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
        </span>:undefined}
    </a>
  )
}else{
    return (
        <button className={'btn btn-Primary '+ classes }>{label}</button>
    )
}}
ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}   


const ButtonOutline = ({
    href,target = '_self', label,icon,classes
}) => {
if(href){


  return (
    
    <a href={href}
    target={target}
    className={"btn btn-Outline" + classes  }>
        {label}
        {icon ?
        <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
        </span>:undefined}
    </a>
  )
}else{
    return (
        <button className={'btn btn-Outline '+ classes }>{label}</button>
    )
}}
ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}   





export {
    ButtonPrimary,
    ButtonOutline
}
