import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeView } from '../../../redux/actions/action';
import { Finished } from './Finished';

const mapStateToProps = state => ({questions: state.questions});

const mapDispatchToProps = dispatch => bindActionCreators({changeView}, dispatch)

export const FinishedContainer = connect(mapStateToProps, mapDispatchToProps)(Finished)