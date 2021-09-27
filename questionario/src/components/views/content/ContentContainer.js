import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Content } from './Content';
import { changeView } from '../../../redux/actions/action';

const mapStateToProps = state => ({questions: state.questions});

const mapDispatchToProps = dispatch => bindActionCreators({changeView}, dispatch)

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)