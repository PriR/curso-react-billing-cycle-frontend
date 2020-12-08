import React, { Component } from 'react';

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';
    if (cols[0]) classes += `cols-xs-${cols[0]}`; // dispositivos muito pequenos
    if (cols[1]) classes += ` cols-sm-${cols[1]}`; // dispositivos pequenos
    if (cols[2]) classes += ` cols-md-${cols[2]}`; // dispositivos médios
    if (cols[3]) classes += ` cols-lg-${cols[3]}`; // dispositivos grandes

    return classes;
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || '12'); // se valor não for fornecido o padrão é 12
    console.log('this.props.cols: ', this.props.cols)
    console.log('gridClasses: ', gridClasses);
    return <div className={gridClasses}>{this.props.children}</div>;
  }
}
