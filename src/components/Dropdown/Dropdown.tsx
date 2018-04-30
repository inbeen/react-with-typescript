import * as React from 'react'
import './Dropdown.css'

interface DropdownProps {
  children: any
  links: any
  placement: 'left' | 'right'
}

interface DropdownState {
  visible: boolean
  left: number
  right: number
  bottom: number
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props)
    this.state = {
      visible: false,
      left: NaN,
      right: NaN,
      bottom: NaN
    },
    this.dropIt = this.dropIt.bind(this)
  }

  dropIt(e) {
    if(this.state.left) {
      this.setState({
        visible: !this.state.visible
      })
    } else {
      let el = e.target
      this.setState({
        visible: !this.state.visible,
        left: el.offsetLeft,
        right: window.innerWidth - el.offsetWidth - el.offsetLeft,
        bottom: el.offsetTop + el.offsetHeight
      })
    }
  }

  render() {
    const dropdownList = Object.keys(this.props.links).map((item, index) =>
      item? <a className='dropdown-item' onClick={this.props.links[item]} key={index}>{item}</a>
      : <div className='dropdown-line' key={index}></div>
    )

    return (
      <div className='dropdown'>
        <div className={this.state.visible? 'dropdown-content dropdown-visible': 'dropdown-content'}
             onClick={this.dropIt}>{this.props.children}</div>
        <div className={getClass(this.state.visible, this.props.placement)}
             style={getStyle(this.props.placement, this.state.left, this.state.right, this.state.bottom)}
             onClick={this.dropIt}>
          <nav className='dropdown-list'>
            { dropdownList }
          </nav>
        </div>
      </div>
    )
  }
}

// helper
function getClass(visible: boolean, placement?:string){
  let className = 'dropdown-box '
  if(!visible) className = 'hidden ' + className
  placement === 'right'? className += 'dropdown-right': null
  return className
}
function getStyle(placement: string, left, right, bottom) {
  let style = {top: bottom + 16}
  placement === 'left'? Object.assign(style, {left: left})
  : Object.assign(style, {right: right})
  return style
}
