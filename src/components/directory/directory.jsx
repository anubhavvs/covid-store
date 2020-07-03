import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import SECTIONS_DATA from './directory.data';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
            </div>
        )
    }
}

export default Directory;