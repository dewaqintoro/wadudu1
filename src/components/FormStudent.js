//destructering = jika tanpa inherite React.COmponent pada saat extends
import React, {Component} from 'react'
import ListStudent from './ListStudent'

export default class FormStudents extends Component {
    constructor(){
				super()
				// untuk menampilkan list nama dibawah memakai state
				this.state = {
					students: [{
						name: 'Dewa QIntoro', age: 12
					}],
					currentStudentName: ''
				}
		}
		
		addStudent(){
			let currentStudents = this.state.students
			currentStudents.push( this.state.currentStudentName )
			this.setState({
				students: currentStudents
			})
		}

    render(){
        return (
            <div>
							<span>{ this.state.currentStudentName }</span>
               
								<br/>
								<input type="text" 
								placeholder="Nama" 
								name="name"
								onChange={(e) => this.setState({ currentStudentName : e.target.value})}/>

								<br/>

								<input type="submit" value="Tambah Siswa" 
								onClick={ () => this.addStudent()}
								/>		

								<h2>Students : </h2>
								
								<ListStudent studentsProps={ this.state.students }></ListStudent>
													
            </div>
        )
    }
}