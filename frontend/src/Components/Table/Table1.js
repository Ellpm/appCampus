// import React from 'react';
// import {BootstrapTable, 
//        TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
// import { connect } from "react-redux";
 
 
// class Table1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <BootstrapTable data={this.props.data}>
//           <TableHeaderColumn isKey dataField='id'>
//             ID
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='name'>
//             Name
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='value'>
//             Value
//           </TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     );
//   }
// }
 
// const mapStateToProps = (state) => ({ data: state.data.data });
// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(Table1);