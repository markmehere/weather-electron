
import React from "react";
import cx from "classnames";
import styles from "./HomeIcon.less";

export interface HomeIconProps {

  // The applicable positioning and sizing class
  className: string;

  // Callback to go to home city
  onGoHome: () => void;

}

export class HomeIcon extends React.Component<HomeIconProps> {

  render() {
    const positioningClass = this.props.className;
    const onGoHome = this.props.onGoHome;
    const inputStyle = {
      strokeWidth: '1px'
    };
    return <svg className={cx(positioningClass, styles.homeIcon)} onClick={onGoHome} viewBox="0 0 30 30" version="1.1">
        <g transform="matrix(1,0,0,1,-0.197985,0.88014)">
            <path d="M2.531,15.763L26.989,2.148L14.485,26.1L12.184,17.463L2.531,15.763Z" style={inputStyle}/>
        </g>
    </svg>;
  }
}