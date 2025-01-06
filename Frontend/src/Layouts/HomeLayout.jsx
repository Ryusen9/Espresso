import AllCoffee from "../Components/AllCoffee"
import PropTypes from 'prop-types'
const HomeLayout = ({coffees}) => {
  return (
    <div>
        <AllCoffee coffees={coffees}/>
    </div>
  )
}

HomeLayout.propTypes = {
  coffees: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default HomeLayout