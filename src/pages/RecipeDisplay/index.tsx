import {Component} from "react";
import {Props, State} from "./Types"
import axios from "axios"
import {apiEndpoint} from "../../utils/Path"
import DisplayRecipe from "./component/DisplayRecipe";

class RecipeDisplay extends Component <Props, State> {
    constructor(props : Props){
        super(props)
        this.state = ({
            foodSearchResult : []
        })
    }

    getFoodRecipe = async() => {
        const {state} = this.props.location
        const res = await axios.get(apiEndpoint(state))
        this.setState({foodSearchResult : [res.data.hits[0]]})
    }

    componentDidMount() {
        this.getFoodRecipe()
    }

    render(){
        return(
            <div>
                <DisplayRecipe  foodRecipe={this.state.foodSearchResult}/>
        
            </div>
        )
    }

}

export default RecipeDisplay