import React, { Component } from 'react';
import Types from 'prop-types';
import './DashboardWidget.less';

const propTypes = {
  collapsible: Types.bool,
  collapsed: Types.bool,
  id: Types.string,
  resizable: Types.bool,
  w: Types.number,
  h: Types.number,
  maxW: Types.number,
  maxH: Types.number,
  minW: Types.number,
  minH: Types.number,
  className: Types.string,
  style: Types.object,
  onMount: Types.func,
  onUnmount: Types.func,
  onCollapse: Types.func
};
const defaultProps = {
  collapsible: true,
  collapsed: false,
  resizable: false,
  id: (Math.random() / Math.random()).toString(),
  w: 3,
  h: 4,
  maxW: null,
  maxH: null,
  minW: null,
  minH: null,
  className: '',
  style: {},
  onMount: () => {},
  onUnmount: () => {},
  onCollapse: () => {}
};

export default
class DashboardWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    let options = {
      collapsible: this.props.collapsible,
      collapsed: this.props.collapsed,
      id: this.props.id,
      resizable: this.props.resizable,
      w: this.props.w,
      h: this.props.h,
      maxW: this.props.maxW,
      maxH: this.props.maxH,
      minW: this.props.minW,
      minH: this.props.minH
    };

    this.props.onMount(options);
  }

  render() {
    let {
      collapsible,
      collapsed,
      id,
      resizable,
      w,
      h,
      maxW,
      maxH,
      minW,
      minH,
      className,
      style,
      onCollapse
    } = this.props;

    let child = React.Children.only(this.props.children);

    return (
      <div
        className={`oc-dashboard-widget ${className}`}
        style={style}
      >
        {{
          ...child,
          props: {
            ...child.props,
            collapsible,
            collapsed,
            onCollapse: () => onCollapse(id)
          }
        }}
      </div>
    );
  }
}

DashboardWidget.propTypes = propTypes;
DashboardWidget.defaultProps = defaultProps;
