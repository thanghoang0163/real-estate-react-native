import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Col,
  Cols,
  Rows,
} from 'react-native-table-component';

function StatisticTable({
  tableHead,
  tableData,
  headStyle,
  textHeadStyle,
  rowStyle,
  textStyle,
  flexArrHead,
  flexArrData,
  wrapperStyle,
}) {
  return (
    <Table borderStyle={{borderColor: 'transparent'}}>
      <Row
        data={tableHead}
        style={headStyle}
        textStyle={textHeadStyle}
        flexArr={flexArrHead}
      />
      <TableWrapper style={wrapperStyle}>
        <Rows
          data={tableData}
          flexArr={flexArrData}
          textStyle={textStyle}
          style={rowStyle}
        />
      </TableWrapper>
    </Table>
  );
}

export default StatisticTable;
