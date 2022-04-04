import {Component} from "react";
import {Props, State} from "./Types"
import FoodDisplay from "./component/FoodDisplay";
import axios from "axios";
import {Container, CssBaseline} from '@material-ui/core'
import {apiEndpoint}  from "../../utils/Path"


class Dashboard extends Component <Props, State> {
    constructor(props:Props){
        super(props)
        this.state = ({
            arrayResponse : []
        })
    }

    getApiData =  async() => {
        try {
            const arrayFood = ["pasta", "chicken", "hotdog", "burger", "salad", "pizza"]
            const res = []
            for (let i = 0; i < arrayFood.length; i ++){
                res[i] = await axios.get(apiEndpoint(arrayFood[i]))
                this.setState({
                    arrayResponse : [...this.state.arrayResponse , res[i].data]
                })
            }     
        } catch (error) {
            alert(error.message)
        }
    }

    componentDidMount(){
        this.getApiData()
    }

    render(){
        return(
            <div>
                <CssBaseline>
                    <Container maxWidth="sm">
                        <FoodDisplay foodresults={this.state.arrayResponse} />
                    </Container>
                </CssBaseline>
            </div>
        )
    }
}

export default Dashboard