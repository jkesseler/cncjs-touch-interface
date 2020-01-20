import { connect } from 'react-redux';
import { actions, selectors } from '@state/modules/controller';
import Main from './Main';

const mapStateToProps = state => ({
  controllerType: selectors.slice(state).controllerType,
  userCommands: selectors.userCommands(state),
  workflowState: selectors.workflowState(state),
});

const mapDispatchToProps = dispatch => ({
  onJog: command => dispatch(actions.command(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
