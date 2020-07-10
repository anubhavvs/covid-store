const INTITIAL_STATE = {
    sections: [
        {
            title: 'gloves',
            imageUrl: 'images/gloves.jpg',
            id: 1,
            linkUrl: 'shop/gloves'
    
        },
        {
            title: 'disinfectant',
            imageUrl: 'images/disinfectant.jpg',
            id: 2,
            linkUrl: 'shop/disinfectant'
        },
        {
            title: 'thermometer',
            imageUrl: 'images/thermometer.jpg',
            id: 3,
            linkUrl: 'shop/thermometer'
        },
        {
            title: 'sanitisers',
            imageUrl: 'images/sanitisers.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/sanitisers'
        },
        {
            title: 'masks',
            imageUrl: 'images/masks.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/masks'
        }
    ]
};

const directoryReducer = (state = INTITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;