import React from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class Budget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetTotal: 0,
      moneyLeft: 0,
      moneySpent: 0,
      activities: [],
      value: 0,
      fields: {},
      table: {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: false,
        showCheckboxes: false,

      }
    }
  }


  render(){
    return (
      <div className="budget">
        <Table
          height={this.state.table.height}
          fixedHeader={this.state.table.fixedHeader}
          fixedFooter={this.state.table.fixedFooter}
          selectable={this.state.table.selectable}
          multiSelectable={this.state.table.multiSelectable}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={this.state.table.showCheckboxes}
            enableSelectAll={this.state.table.enableSelectAll}
            >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="BudgetTrip" style={{textAlign: 'center'}}>{<h1>{`Total Budget: $${this.state.budgetTotal} Total Spent: $${this.state.moneySpent} Budget Left: $${this.state.moneyLeft}`}</h1>}</TableHeaderColumn>
            </TableRow>
            <TableRow >
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
      )
  }
}

export default Budget;

