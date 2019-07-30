import React from "react";
import {translate} from "react-switch-lang"
import {connect} from "react-redux"
import {courseActions} from "../../redux"
import { Table } from 'reactstrap';
class CoursesView  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pageIndex :1,
      pageSize:10
    }
  }
  componentDidMount()
  {
    const {pageIndex,pageSize} = this.state
    const  {t,courses,dispatch} = this.props; 
    document.title =t("coursesView.title");
   if(courses.pageIndex ===0) dispatch(courseActions.getAllCourseWithAuthor(pageIndex,pageSize))
    
  }
  render() {
const  {t,courses} = this.props; 
console.log(courses)
const {loading }  = courses;
  return (
    <div className="paddingTB60 px-3">
      <h2>{t("coursesView.courses")}</h2>
      <hr />
      {loading && <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> }

      {!loading && 
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Course Category</th>
            <th>Author Name</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>

        {courses.courses.results.map((value,key)=>{
          return(
            <tr key={value.courseId}>
           <th scope="row">{key+1}</th>
            <td >{value.courseName}</td>
            <td>{value.courseCategory}</td>
            <td>{value.author.authorName}</td>
            <td></td>
            </tr>
          );
        })
        }

        </tbody>

      </Table>
      }
   
   
    </div>
  );
}
}


function mapStateToProps(state) {
  const { localize } = state.localization;
    const courses = state.courses;
  return {
      localize,
      courses
  };

}

const  TCoursesView = connect(mapStateToProps) (translate(CoursesView));

export {TCoursesView as CoursesView };
