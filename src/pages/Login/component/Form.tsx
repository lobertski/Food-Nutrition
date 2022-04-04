import {FC} from "react";
import {Props} from "./Types"
import {TextField, Button} from '@material-ui/core';

const Form : FC<Props> = () => {
    return(
        <>
        <br></br>
        <TextField id="standard-basic" label="Username"  required />
        <br></br>
        <TextField id="standard-basic" label="Password"  required />
        <br></br>
        <br></br>
        <Button variant="contained" color="primary"> Login </Button> 
        </>
    )
}

export default Form