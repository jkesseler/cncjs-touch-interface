import { connect } from 'react-redux';
import { actions } from '@state/modules/controller';
import { getControllerType } from '@state/modules';
import Main from './Main';

const mapStateToProps = state => ({
  controllerType: getControllerType(state),
  userCommands: getUserCommands(state),
  workflowState: getWorkflowState(state),
});

const mapDispatchToProps = dispatch => ({
  onJog: command => dispatch(actions.command(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
