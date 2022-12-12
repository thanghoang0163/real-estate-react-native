import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {custom} from '../../styles';

function Chart() {
  return (
    <>
      <LineChart
        data={{
          labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
          datasets: [
            {
              data: [0, 15, 10, 20, 5],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(50, 186, 105, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(93, 103, 122, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: custom.done,
          },
        }}
        bezier
        style={{
          paddingVertical: 20,
        }}
      />
    </>
  );
}

export default Chart;
