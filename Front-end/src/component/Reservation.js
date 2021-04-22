import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'


export default function Reservation () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){ 
         axios.post('http://localhost:3000/reservation/',data)
         .then(response=>{
            console.log(response)
            history.push('/Reservation')
            })
        .catch(err=>console.log(err))
        
    }
    
        return (
<div className="app">
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h3>Sign IN</h3>
                <div className="form-group">
                    <label>Date</label>
                    <input type="text" name="phone" className="form-control" placeholder="Phone" {...register('date')}/>
                </div>
                <div className="form-group">
                    <label>Heure</label>
                    <input type="text" name="phone" className="form-control" placeholder="Phone" {...register('heure')}/>

                </div>
                <button type="submit" className="btn btn-danger ">Reserver</button>


            </form>
                <div id='printMe'>
                Print this only 
              </div>
         <button onclick="printDiv('printMe')">Print only the above div</button>
          </div>  

        );
   
    
}
