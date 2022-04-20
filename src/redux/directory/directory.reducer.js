const INITIAL_STATE = {
    sections: [
        { 
            title:'hats',
            imgUrl:'/image/img.jpeg',
            id: 1,
            linkUrl: 'shop/hats'
        },

        { 
           title:'jackets',
           imgUrl: '/image/img.jpeg',
           id: 2,
           linkUrl: 'shop/jackets'
       },

       { 
           title:'sneakers',
           imgUrl:'/image/img.jpeg',
           id: 3,
           linkUrl: 'shop/sneakers'
       },

       { 
           title:'womens',
           imgUrl: '/image/img.jpeg',
           id: 4,
           linkUrl: 'shop/womens'
       },

       { 
           title:'mens',
           imgUrl: '/image/img.jpeg',
           id: 5,
           linkUrl: 'shop/mens'
       },
    ]
};

const directoryReducer  = (state = INITIAL_STATE, action) => {
     switch(action.type) {
         default:
             return state;
     }
};

export default directoryReducer;