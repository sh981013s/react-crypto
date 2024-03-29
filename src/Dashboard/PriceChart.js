import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) => {
        return (
          <Tile>
            <ChartSelect
              defaultValue={'months'}
              onChange={(e) => changeChartSelect(e.target.value)}
            >
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </ChartSelect>
            {historical ? (
              <ReactHighcharts config={highchartsConfig(historical)} />
            ) : (
              <div>Loading Historical Data</div>
            )}
          </Tile>
        );
      }}
    </AppContext.Consumer>
  );
};

export default PriceChart;
