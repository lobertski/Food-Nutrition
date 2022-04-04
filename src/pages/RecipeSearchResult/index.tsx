import {Component} from "react";
import {Props, State} from "./Types";
import Axios from "axios";
import RecipeResultDisplay from "./component/RecipeSearchResult"
import {apiEndpoint}  from "../../utils/Path"

class RecipeResult extends Component <Props, State> {
    constructor(props : Props){
        super(props)
        this.state = ({
            response : []
        })
    }

        getFoodRecipe = async() => {
            try {
                const {location} = this.props
                const res = await Axios.get(apiEndpoint(location.state.search))
                this.setState({
                    response : [res.data]
                })   
            } catch (error) {
                alert(error)
            }
        }

        componentDidMount(){
            this.getFoodRecipe()
        }

      render(){
        return(
            <div>
                <RecipeResultDisplay foodresult={this.state.response} />
            </div>
        )
    }
}

export default RecipeResult
