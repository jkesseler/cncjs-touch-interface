import { connect } from 'react-redux';
import { actions, selectors } from '@state/modules/controller';
import Connection from './Connection';

const mapStateToProps = state => ({
  controllerTypes: selectors.slice(state).controllerTypes,
  userCommands: selectors.userCommands(state),
  workflowState: selectors.workflowState(state),
  connecting: selectors.slice(state).connecting,
  baudrates: selectors.slice(state).baudrates,
  ports: selectors.slice(state).ports,
  controllerType: selectors.slice(state).controllerType,
});

const mapDispatchToProps = dispatch => ({
  onConnect: ({ port, baudrate, controllerType }) => dispatch(actions.SerialConnectStart({ port, baudrate, controllerType })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
