import {connect} from "react-redux"
import Heading from "../components/Head";


// Data flows from the Redux store to the component.
const mapStateToProps=state=>({
   cardData:state.CardItems
})


// Data flows from the component to the Redux store.
const mapDispatchToProps=dispatch=>({
})


export default connect(mapStateToProps, mapDispatchToProps)(Heading)




// export default SellingItems;