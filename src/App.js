
import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  constructor(props) {
    super(props);
    console.log('hello');
  }
  componentDidMount(){
    console.log('component rendered');
  }
  componentDidUpdate(){
    console.log('I just updated')
  }
  componentWillUnmount(){
    console.log('Goodbye, cruel world')
  }

  add = () => {
    console.log('add');
    this.setState(current => ({ count: current.count + 1 }));
  }
  minus = () => {
    console.log('minus');
    this.setState(current => ({ count: current.count - 1 }));
  }
  render() {
    console.log("I'm rendering");
    return (<div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
      );
  }
}

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   add = () => {
//     console.log('add');
//     this.setState(current => ({count : current.count + 1}));
//   }
//   minus = () => {
//     console.log('minus');
//     this.setState(current => ({count : current.count - 1 }));
//   }
//   render() {
//     return (<div><h1>The number is : {this.state.count}</h1><button onClick={this.add}>Add</button><button onClick={this.minus}>Minus</button></div>);
//   }
// }

function Food(props) {
  return <div>
    <h1>I like {props.name}</h1>
    <h4>{props.rating}/5.0</h4>
    <img src={props.picture} alt={props.name} />
  </div>
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 3.3
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 6.6
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5
  }
];
function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />

}

// function App() {
//   return (
//     <div>
//       <h1>hello</h1>

//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//       {/* {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/> )} */}
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }

export default App;
