import * as React from 'react'
import './Dropdown.css'

interface DropdownProps {
  children: any
  content: any
  placement: 'left' | 'right'
  arrow: boolean
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
      <div className='dropdown'>
        <div className={this.state.visible? 'dropdown-content dropdown-visible': 'dropdown-content'}
             onClick={this.dropIt}>{this.props.children}</div>
        <div className={getClass(this.state.visible, this.props.arrow, this.props.placement)}
             style={getStyle(this.props.placement)}
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
  if(!visible) className = 'hidden ' + className
  if(!arrow) return className
  className += ' dropdown-arrow'
  placement === 'right'? className += ' dropdown-arrow-right': null
  return className
}
function getStyle(placement: string) {
  let style = {top: '40px'}
  placement === 'left'? Object.assign(style, {left: '0'})
  : Object.assign(style, {right: '0'})
  return style
}
