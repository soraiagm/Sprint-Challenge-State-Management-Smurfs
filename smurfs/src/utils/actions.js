// import axios from 'axios';
// export const GET_SMURFS = 'GET_SMURFS'
// export const ADD_SMURF = 'ADD_SMURF'

// export const getSmurfs = () => dispatch => {
//         dispatch({ type: GET_SMURFS })
//         axios
//             .get('http://localhost:3333/smurfs')
//             .then(res => {
//                 console.log("where are my smurfs", res.data);
//                 dispatch({
//                     type: GET_SMURFS,
//                     payload: res.data
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//             })
// }

// export const addSmurf = (smurf) => dispatch => {
//     dispatch({ type: ADD_SMURF })
//     axios
//         .post('http://localhost:3333/smurfs', smurf)
//         .then(res => {
//             console.log(res);
//             dispatch({
//                 type: ADD_SMURF,
//                 // payload: res.data
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

