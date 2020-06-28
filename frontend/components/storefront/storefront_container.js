import {connect} from 'react-redux';
import { asArray } from '../../reducers/selectors'
import Storefront from './storefront';

const mapStateToProps = state => ({
  games: asArray(state.entities),
})

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storefront)