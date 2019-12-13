import React, { useState, useContext } from 'react';
// import { connect } from 'react-redux'
// import { addSmurf } from '../utils/actions'
// import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext';

// const Form = (props) => {
//     const [ newSmurf, setNewSmurf ] = useState({
//         name: '',
//         age: '',
//         height: ''
//     });

//     const handleChanges = event => {
//         event.preventDefault();
//         setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         // console.log(newSmurf);
//         props.addSmurf({...Smurf,})
//         setNewSmurf({
//             name: '',
//             age: '',
//             height: ''
//         })
//     }

//     return (
//         <div className="smurf-form">
//             <form>
//             <input 
//                 className="name"
//                 placeholder="Smurf Name"
//                 type="text"
//                 name="name"
//                 value={newSmurf.name}
//                 onChange={handleChanges} 
//             /> 
//             <input 
//                 className="age"
//                 placeholder="Smurf Age"
//                 type="number"
//                 name="age"
//                 value={newSmurf.age}
//                 onChange={handleChanges}
//             /> 
//             <input 
//                 className="height"
//                 placeholder="Smurf Height"
//                 type="number"
//                 name="height"
//                 value={newSmurf.height}
//                 onChange={handleChanges}
//             /> 
//             <button type="submit" className="add-smurf" onClick={handleSubmit}>Add Smurf</button>
//             </form>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return { state };
// }


// export default connect(mapStateToProps, {addSmurf})(Form);


const Form = () => {
    const [ newSmurf, setNewSmurf ] = useState({
        name: "",
        age: '',
        height: ""
    });

    const { addSmurfs } = useContext(SmurfContext);

    const changeHandler = event => {
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value })
    };

    const handleSubmit = () => {
        addSmurfs(newSmurf);
    };

    
    return (
        <div className="smurf-form">
            <h2 className="form-font">Smurf Village</h2>
            <form onSubmit={handleSubmit}>
            <input 
                className="name"
                placeholder="Smurf Name"
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={changeHandler}
            /> 
            <input 
                className="age"
                placeholder="Smurf Age"
                type="number"
                name="age"
                value={newSmurf.age}
                onChange={changeHandler}
            /> 
            <input 
                className="height"
                placeholder="Smurf Height"
                type="number"
                type="text"
                name="height"
                value={newSmurf.height}
                onChange={changeHandler}
            /> 
            <button type="submit" className="add-smurf">Add Smurf</button>
            </form>
        </div>
    );
  }


export default Form;