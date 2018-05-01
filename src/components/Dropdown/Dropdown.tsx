import * as React from 'react'
import './Dropdown.css'

interface DropdownProps {
  children: any
  content: any
  trigger: 'hover' | 'click'
  placement: 'left' | 'right'
  arrow?: boolean
  style?: object
}

interface DropdownState {
  visible: boolean
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props)
    this.state = {
      visible: false
    },
    this.dropIt = this.dropIt.bind(this)
  }

  dropIt() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div className={this.props.trigger === 'click'? 'dropdown': 'dropdown dropdown-hover'}>
        {this.props.trigger === 'click'
        ? <div className={this.state.visible? 'dropdown-content dropdown-layer': 'dropdown-content'}
               onClick={this.dropIt}>{this.props.children}</div>
        : <div className={this.state.visible? 'dropdown-content dropdown-layer': 'dropdown-content'}>{this.props.children}</div>}
        <div className={getClass(this.state.visible, this.props.arrow, this.props.placement)}
             style={getStyle(this.props.placement, this.props.style)}
             onClick={this.dropIt}>
          {this.props.content}
        </div>
      </div>
    )
  }
}

// helper
function getClass(visible: boolean, arrow: boolean, placement?:string){
  let className = 'dropdown-box '
  if(visible) className += 'dropdown-visible'
  if(!arrow) return className
  className += ' dropdown-arrow'
  placement === 'right'? className += ' dropdown-arrow-right': null
  return className
}
function getStyle(placement: string, style: object = {}) {
  let res
  placement === 'left'? res = Object.assign({left: '0'}, style)
  : res = Object.assign({right: '0'}, style)
  return res
}
