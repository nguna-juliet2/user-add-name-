import React, {useState} from "react";
import Card from "../UI/card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props =>{
    const [EnterUserName, setEnteredName]= useState('');
    const [Enteredage, setEnteredage]= useState('');
    const [error, seterror]= useState();
     
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(EnterUserName.trim().length === 0 || Enteredage.trim().length ===0){
            seterror({
                title: 'invalid input',
                message: 'Please enter a valid name and age'
            });
            return;
        }
        if(+Enteredage < 1){
            seterror({
                title: 'invalid age',
                message: 'Please enter age greaterthan 0'
            });

            return;
        }
            props.onAddname(EnterUserName, Enteredage);
            setEnteredName('')
            setEnteredage('')
        }
        const userNameChangeHandler =(event) =>{
            setEnteredName(event.target.value);
        }
        const ageNameChangeHandler =(event) =>{
            setEnteredage(event.target.value);
        }
        const onclickHandler = ()=>{
            seterror(null);
        }
        return(
           
            <div>
           {error && <ErrorModal title={error.title}  message= {error.message} onConfrim={onclickHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="Username">username</label>
                    <input id="name" type='text' value={EnterUserName} onChange={userNameChangeHandler}></input>
                    <label htmlFor="Age">Age(years)</label>
                    <input id="age" type='number' value={Enteredage} onChange={ageNameChangeHandler}></input>
                    <Button type="submit"  >Add User</Button>
                </form>
            </Card>
            </div>
        )
      
   
}
// {/* <div className=""></div> */}
export default AddUser;