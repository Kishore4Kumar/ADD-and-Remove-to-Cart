import {connect} from "react-redux"
import SellingItems from "../components/ItemsList";
import {addtoCart, removetoCart} from "../service/Actions/actions";



// Data flows from the Redux store to the component.
const mapStateToProps=state=>({
    // cardData:state.CardItems
})


// Data flows from the component to the Redux store.
const mapDispatchToProps=dispatch=>({
    addtocardHandler:data=>dispatch(addtoCart(data)),
    removetocardHandler:data=>dispatch(removetoCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(SellingItems)




// export default SellingItems;