import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  type: 'dark',
  primary: { main: '#6D4C41' },
  secondary: { main: '#455A64' },
};
const themeName = 'Default';

export default createMuiTheme({ palette, themeName });
