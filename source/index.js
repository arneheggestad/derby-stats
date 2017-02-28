const React = require('react')
const ReactDOM = require('react-dom')

var SkaterListing = React.createClass({
  render: function () {
    return (
      <div className="skaterListing">
        <SkaterSummary
          name: 'Tamara Obscura',
          number: '100',
          jams: {
            jammer: {11},
            pivot: {2},
            blocker: {12},
            total: {18}
          },
          points: {
            for: {65},
            against: {104}
          }>
        </SkaterSummary>
      </div>
    )
  }
})

var SkaterSummary = React.createClass({
  render: function() {
    return (
      <div className="skaterSummary">
        <span className="name">
          {this.props.name}
        </span>
        <Photo src={this.props.photo}></Photo>
        <Jams
          jammer = { this.props.jams.jammer }
          pivot = { this.props.jams.pivot }
          blocker = { this.props.jams.blocker }
          total = { this.props.jams.total }
        >
        </Jams>
        <Points
          for = { this.props.points.for }
          against = { this.props.points.against }
          diff = { (this.props.points.for/this.props.points.against) }
        >
        </Points>
      </div>
    )
  }
})

var Jams = React.createClass({
  getInitialState: function () {
    return {
      this.props.jams
    }
  },
  render: function () {
    <div className="jams">
      <span>As jammer: { this.state.jammer }</span>
      <span>As pivot: { this.state.pivot }</span>
      <span>As blocker: { this.state.blocker }</span>
      <span>Total: { this.state.total }</span>
    </div>
  }
})

var Points = React.createClass({
  getInitialState: function () {
    return {
      this.props.points
    }
  },
  render: function () {
    <div className="points">
      <span>For: { this.state.for }</span>
      <span>Against: { this.state.against }</span>
      <span>+/-:  { this.state.diff }</span>
    </div>
  }
})

ReactDOM.render(
  <SkaterSummary />,
  document.getElementById('content')
)
