import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Question } from './Question';
import { changeView, finish, getQuestions, moveQuestion, setAnswer } from '../../redux/actions/action';

const mapStateToProps = state => ({questions: state.questions});

const mapDispatchToProps = dispatch => bindActionCreators({getQuestions, setAnswer, moveQuestion, finish, changeView}, dispatch)

export const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question)