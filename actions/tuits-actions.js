import * as service from "../services/tuits-service.js";

export const CREATE_TUIT = "CREATE_TUIT";
export const FIND_ALL_TUITS = "FIND_ALL_TUITS";
export const UPDATE_TUIT = "UPDATE_TUIT";
export const DELETE_TUIT = "DELETE_TUIT";

export const createTuit = async (dispatch, tuit) => {
  const newTuit = await service.createTuit(tuit);
  dispatch({
    type: CREATE_TUIT,
    newTuit,
  });
};

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();    
  dispatch({
    type: FIND_ALL_TUITS,
    tuits,
  });
};
export const updateTuit = async (dispatch, tuit) => {
  const status = await service.updateTuit(tuit);     
  console.log(status);
  
 dispatch({
   type: UPDATE_TUIT,
   tuit
 });
};

export const deleteTuit = async (dispatch, tuit) => {    // will be call from tuit-list-item.js
    const response = await service.deleteTuit(tuit);    // call from tuits-service.js 
    console.log(response);
    dispatch({
      type: DELETE_TUIT,
      tuit,
    });

};
