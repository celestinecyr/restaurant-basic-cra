import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        //defining a state for the component
        //state stores property related to this component that we can make use of
        this.state = {
            //here we define a property called dishes which consist of 4 js objects and each js obj has an id
            //& each id has name, image, cat, label, etc...
            dishes: [
                //inside dishes we define this as a js object which contains a list of dishes
                {
                    id:0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        
                },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]

        }
    }

    render() {
        //here we use the javascript map operator
        const menu = this.state.dishes.map((dish) => {
            //iterating over every dish in the dishes array here
            //for every dish we return..
            return(
                <div key={dish.id} className="col-12 mt-5">
                    {/* mt-5 means give a top margin of 5 units */}
                    {/* inside this div we're going to construct the view for each
                    of the items in my dishes here */}
                    {/* Whenever we construct a list of items in React, every item requires a key attribute to be specified for it 
                    so this is where we're taking a list of items and then rendering them here. 
                    and so the key helps when React is rendering these items on the screen.
                    The key helps React to recognise each one of these elements and while it is and while it is updating the screen so the keys will enable it to identify each of those elements uniquely. */}
                    
                    {/* HOW TO RENDER THE LIST OF ITEMS IN THE MENU? */}
                    <Media tag="li">
                        {/* tag="li" says that each of these is going to act as a list item here 
                        and we alr specified that in return() */}
                        
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>

                        <Media body className="ml-5">
                        {/* ml-5 - give a left margin of 5 units */}
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>

                    </Media>
                </div>
            );
        }); 

        return (            
        //inside here it returns what needs to be displayed on the UI by this component
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;
// How to make use of this menu component? go App.js