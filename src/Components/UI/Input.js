import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input id={props.input.id} {...props.input}/>
            {/* it works like suppose input has {type:'text'} , then this will go as <input type='text' />
            along with id. */}
        </div>
    );
}

// think like props.something is there , so we are acepting a attr named something in the custom component 
// html tag 

// kim input is a object  we are expecting and this object will cintain all the attr that are supposed to be in a 
// input tag , this is so as to configure elemenst from outside

export default Input;