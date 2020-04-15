import { connect } from 'react-redux';
import { actions, selectors } from '@state/modules/serialconnection';
import Connection from './Connection';

const mapStateToProps = state => ({
  controllerTypes: selectors.slice(state).controllerTypes,
  connecting: selectors.slice(state).connecting,
  isConnected: selectors.slice(state).isConnected,
  baudrates: selectors.slice(state).baudrates,
  ports: selectors.slice(state).ports,
});

const mapDispatchToProps = dispatch => ({
  onConnect: ({ port, baudrate, controllerType }) => dispatch(actions.SerialConnectStart({ port, baudrate, controllerType })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
