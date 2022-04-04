import {FC} from "react"
import {Props} from "./Types"
import { TextField, Button } from "@material-ui/core"

const Form : FC <Props> = ({}) => {
    return(
        <>
        <form>

            <br></br>
            <TextField 
            label="First Name"
            required
            />
            <br></br>
            <br></br>

            <TextField
            label="Last Name"
            required
            />
            <br></br>
            <br></br>

            <TextField
            label="Username"
            required
            />
            <br></br>
            <br></br>

            <TextField
            label="Password"
            required
            />

            <br></br>
            <br></br>

            <TextField
            label="Confirm Password"
            required
            />

            <br></br>
            <br></br>


            <Button 
            variant="contained"
            color="primary"
            >
            Register
            </Button>

        </form>
        </>
    )
}

export default Form