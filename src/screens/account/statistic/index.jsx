import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import StatisticTable from '../../../components/table';
import Chart from '../../../components/chart';
import Header from '../../../components/header';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './styles';

const tableHeadDeposit = ['HỌ TÊN', 'EMAIL', 'NGÀY TẠO'];
const tableDataDeposit = [
  ['Jenny Wilson', 'michelle.rivera@example.com', '25/05/2022'],
  ['Jenny Wilson', 'michelle.rivera@example.com', '25/05/2022'],
  ['Jenny Wilson', 'michelle.rivera@example.com', '25/05/2022'],
  ['Jenny Wilson', 'michelle.rivera@example.com', '25/05/2022'],
  ['Jenny Wilson', 'michelle.rivera@example.com', '25/05/2022'],
];

const tableHeadFavouriteRealEState = ['TÊN BDS', 'CĂN HỘ', 'LƯỢT THÍCH'];
const tableDataFavouriteRealEState = [
  ['Melbourne Square', 2, 23],
  ['West Side Place', 2, 23],
  ['Swanston Central', 2, 23],
  ['Sapphire by the Gardens', 2, 23],
  ['Melbourne Square', 2, 23],
  ['West Side Place', 2, 23],
  ['Swanston Central', 2, 23],
  ['Sapphire by the Gardens', 2, 23],
];

const btnFavourite = () => {
  return (
    <TouchableWithoutFeedback>
      <Image source={require('../../../assets/icons/red-heart.png')} />
    </TouchableWithoutFeedback>
  );
};

function Statistic({navigation}) {
  return (
    <>
      <Header
        isBack={true}
        title="Thống kê"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Danh sách người dùng mới</Text>
          <StatisticTable
            tableHead={tableHeadDeposit}
            tableData={tableDataDeposit}
            headStyle={styles.head}
            textHeadStyle={styles.textHead}
            rowStyle={styles.row}
            textStyle={styles.text}
            flexArrHead={[1.2, 2, 1]}
            flexArrData={[1.2, 2, 1]}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Thống kê đặt cọc</Text>
            <SelectDropdown
              data={[1, 2, 3, 4, 5]}
              buttonStyle={styles.chooseDate}
              buttonTextStyle={styles.chooseDateText}
              defaultButtonText="Ngày"
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require('../../../assets/icons/arrow-bottom.png')}
                  />
                );
              }}
              dropdownIconPosition="right"
            />
          </View>
          <Chart />
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Bất động sản được yêu thích</Text>
            <SelectDropdown
              data={[1, 2, 3, 4, 5]}
              buttonStyle={styles.chooseDate}
              buttonTextStyle={styles.chooseDateText}
              defaultButtonText="Ngày"
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require('../../../assets/icons/arrow-bottom.png')}
                  />
                );
              }}
              dropdownIconPosition="right"
            />
          </View>
          <StatisticTable
            tableHead={tableHeadFavouriteRealEState}
            tableData={tableDataFavouriteRealEState}
            headStyle={styles.head}
            textHeadStyle={styles.textHead}
            rowStyle={styles.row}
            textStyle={styles.text}
            flexArrHead={[6, 2, 2.5]}
            flexArrData={[6, 2, 2.5]}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default Statistic;
