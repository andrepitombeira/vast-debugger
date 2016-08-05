import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
  TableRowColumn } from 'material-ui/Table';

const Events = () => (
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>URL</TableHeaderColumn>
        <TableHeaderColumn>Protocol</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>Impression</TableRowColumn>
        <TableRowColumn>http://tracker.com</TableRowColumn>
        <TableRowColumn>http</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Started</TableRowColumn>
        <TableRowColumn>https://tracker.com</TableRowColumn>
        <TableRowColumn>https</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Completed</TableRowColumn>
        <TableRowColumn>http://tracker.com</TableRowColumn>
        <TableRowColumn>http</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default Events;
