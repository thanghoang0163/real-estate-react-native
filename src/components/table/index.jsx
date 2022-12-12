import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Col,
  Cols,
  Rows,
} from 'react-native-table-component';
import {neutral} from '../../styles';

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
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            flexArr={flexArrData}
            textStyle={textStyle}
            style={
              index % 2 === 0
                ? rowStyle
                : {backgroundColor: neutral.bgGrey, paddingHorizontal: 20}
            }
          />
        ))}
      </TableWrapper>
    </Table>
  );
}

export default StatisticTable;
