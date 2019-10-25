import React, {Component} from 'react'

export default class ListStudent extends Component {
  render(){
      return(
        <div>
					<ul>
						{ this.props.studentsProps.map( student => {
							return <li>{student.name}, age{student.age}</li>
						} ) }
					</ul>
				</div>
    )
	 }
}