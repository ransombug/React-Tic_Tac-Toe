import React from 'react';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

const Icon = ({name}) =>
{
    switch (name) 
        {
            case "circle": return <FaRegCircle className="icons"></FaRegCircle>
                        break;
            case "cross": return <FaTimes className="icons"></FaTimes>
                        break;
                default: return <FaPen className="icons"></FaPen>
                        break;
        }
}

export default Icon;