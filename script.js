function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function BarGroup(props) {
  let barPadding = 2;
  let barColour = '#2196f3';
  let widthScale = d => d * 10;

  let width = widthScale(props.d.value);
  let yMid = props.barHeight * 0.5;

  return /*#__PURE__*/React.createElement("g", { className: "bar-group" }, /*#__PURE__*/
  React.createElement("text", { className: "name-label", x: "-6", y: yMid, alignmentBaseline: "middle" }, props.d.name), /*#__PURE__*/
  React.createElement("rect", { y: barPadding * 0.5, width: width, height: props.barHeight - barPadding, fill: barColour }), /*#__PURE__*/
  React.createElement("text", { className: "value-label", x: width - 8, y: yMid, alignmentBaseline: "middle" }, props.d.value));

}

class BarChart extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      data: [
      { name: 'MPLS', value: 67 },
      { name: 'PIP', value: 42 },
      { name: 'VoIP', value: 35 },
      { name: 'BC', value: 17 },
      { name: 'EVPL', value: 34 },
      { name: 'EVPN', value: 38 },
      { name: 'WAVE', value: 13 },
      { name: 'Small Bus', value: 46 },
      { name: 'Access', value: 28 },
      { name: 'DIA', value: 52 },
      { name: 'Other', value: 33 }],
      data1: [
      { name: 'Finance', value: 27 },
      { name: 'Marketing', value: 42 },
      { name: 'Sales', value: 66 },
      { name: 'Pricing', value: 37 },
      { name: 'PCM', value: 46 },
      { name: 'Other', value: 35 }] });}



  render() {
    let barHeight = 30;

    let barGroups = this.state.data.map((d, i) => /*#__PURE__*/React.createElement("g", { transform: `translate(0, ${i * barHeight})` }, /*#__PURE__*/
    React.createElement(BarGroup, { d: d, barHeight: barHeight })));

    let barGroups1 = this.state.data1.map((d, i) => /*#__PURE__*/React.createElement("g", { transform: `translate(0, ${i * barHeight})` }, /*#__PURE__*/
    React.createElement(BarGroup, { d: d, barHeight: barHeight })));

    return /*#__PURE__*/React.createElement("svg", { width: "800", height: "700" }, /*#__PURE__*/
    React.createElement("g", { className: "container" }, /*#__PURE__*/
    React.createElement("text", { className: "title", x: "10", y: "30" }, "Telecom B2B Revenue per Category"), /*#__PURE__*/
    React.createElement("g", { className: "chart", transform: "translate(100,60)" }, barGroups), /*#__PURE__*/
    React.createElement("text", { className: "title", x: "10", y: "430" }, "Telecom B2B Revenue per Department"), /*#__PURE__*/
    React.createElement("g", { className: "chart", transform: "translate(100,460)" }, barGroups1)));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(BarChart, null),
document.getElementById('app'));