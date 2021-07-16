import {ADDITION, LANGUAGE, SUBTRACTION, } from './actionTypes';

const  API_URL = 'https://boraque-api.ondemandcreations.com/api/v1/admin/languages';

export const addition = () => ({
    type: ADDITION,
});

export const subtraction = () => ({
    
        type: SUBTRACTION,
      
    
})

export const getLanguage = () => {
    try {
        
            return async dispatch => {
 const result = await fetch(API_URL, {
     method: 'GET',
     headers: {
         'Content-Type' : 'application/json',
     }
 });
   const json = await result.json();
        if(json){

            console.log("data",json)
            dispatch({
                type: LANGUAGE,
                payload: json
            });
        } else {
            console.log('Unable to Fetch');
        }
            
        }
    } catch (error) {
        console.log(error);
    }
}




