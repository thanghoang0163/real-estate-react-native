import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Header from '../../../components/header';
import StatisticTable from '../../../components/table';
import {styles} from '../statistic/styles';

const tableHead = ['ĐẠI DIỆN', 'TÊN CTY', 'SĐT', 'NGÀY TẠO'];
const tableData = [
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
  ['Jenny Wilson', 'IZy Real Estate', '(406) 555-0120', '25/05/2022'],
];

function Censorship({navigation}) {
  return (
    <>
      <Header
        isBack={true}
        title="Kiểm duyệt"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Danh sách Đại lý mới</Text>
        <StatisticTable
          tableHead={tableHead}
          tableData={tableData}
          headStyle={styles.head}
          textHeadStyle={styles.textHead}
          rowStyle={styles.row}
          textStyle={styles.text}
          flexArrHead={[1.5, 1.7, 1.1, 1.2]}
          flexArrData={[1.5, 1.7, 1.1, 1.2]}
        />
      </ScrollView>
    </>
  );
}

export default Censorship;
