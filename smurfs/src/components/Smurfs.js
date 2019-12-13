import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import Smurf from './Smurf.js';
// import { getSmurfs } from '../utils/actions';
import { SmurfContext } from '../contexts/SmurfContext';

// const Smurfs = (props) => {
//     console.log("smurfsData", props);
    
//     useEffect(() => {
//         props.getSmurfs();
//         console.log("getting smurfs", props.smurfs)
//     },[])


//     return (
//         <div>
//         {props.smurfs.map((smurf, id) => (
//             <Smurf 
//             key={id}
//             name={smurf.name}
//             age={smurf.age}
//             height={smurf.height}/>
//       ))}  
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     // console.log(state);
//     return {
//         smurfs: state.smurfs,
//         name: state.name,
//         age: state.age,
//         height: state.height,
//         id: state.id

//     }
// }

// export default connect(mapStateToProps, {getSmurfs})(Smurfs);


const Smurfs = () => {
    const { smurfs } = useContext(SmurfContext);
    
    return (
        <div className="smurf-list">
             {smurfs.map(smurf => (
                <div className="smurf" key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
             ))}
        </div>
    ); 
};

export default Smurfs;