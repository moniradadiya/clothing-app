import React from "react";


import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss';


class Directory extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         section: [
             { 
                 title:'hats',
                 imgUrl:'/image/img.jpeg',
                 id: 1
             },

             { 
                title:'jackets',
                imgUrl: '/image/img.jpeg',
                id: 2
            },

            { 
                title:'sneakers',
                imgUrl:'/image/img.jpeg',
                id: 3
            },

            { 
                title:'womens',
                imgUrl: '/image/img.jpeg',
                id: 4
            },

            { 
                title:'mens',
                imgUrl: '/image/img.jpeg',
                id: 5
            },
         ]
      }
    }
    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.section.map(({title, imgUrl, id}) => (
                        <MenuItem key={id} title={title} imageUrl={imgUrl}/>
                    ))
                }
            </div>
        );

    }
}
export default Directory;