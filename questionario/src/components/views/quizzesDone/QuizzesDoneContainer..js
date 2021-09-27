import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeView, setFinished } from '../../../redux/actions/action';
import { QuizzesDone } from './QuizzesDone';
import { getQuizzesDone } from './redux/action';

const mapStateToProps = state => ({quizzesDone: state.quizzesDone});

const mapDispatchToProps = dispatch => bindActionCreators({changeView, getQuizzesDone, setFinished}, dispatch)

export const QuizzesDoneContainer = connect(mapStateToProps, mapDispatchToProps)(QuizzesDone)