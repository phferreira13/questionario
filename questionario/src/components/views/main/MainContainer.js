import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Main } from './Main';
import { changeView, getQuestions, setQtdQuestion } from '../../../redux/actions/action';


const mapStateToProps = state => ({questions: state.questions});

const mapDispatchToProps = dispatch => bindActionCreators({getQuestions, changeView, setQtdQuestion}, dispatch)

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)