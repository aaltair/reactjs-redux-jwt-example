import React from "react";
import {translate} from "react-switch-lang"
import {connect} from "react-redux"
import {courseActions} from "../../redux"
import { Table ,Button } from 'reactstrap';
import { Pagination} from "../../components"
class CoursesView  extends React.Component{

  constructor(props){
    super(props)
    this.state={
      pageIndex : 1,
      pageSize :1
    }
  }
  componentDidMount()
  {
    const {pageIndex,pageSize} = this.state
    const  {t,courses,dispatch} = this.props; 
    document.title =t("coursesView.title");
   if(courses.pageIndex ===0) dispatch(courseActions.getAllCourseWithAuthor(pageIndex,pageSize))
    
  }

  changePage(index)
  {
    const {pageSize} = this.state
    this.setState({pageIndex:index});
    const  {dispatch} = this.props; 
    dispatch(courseActions.getAllCourseWithAuthor(index,pageSize))
  }
  render() {
const  {t,courses,localize} = this.props;   

const {loading }  = courses;
  return (
    <div className="paddingTB60 px-3">
      <h2>{t("coursesView.courses")}</h2>
      <hr />
      {loading && <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> }

      {!loading && 
      <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>{t("coursesView.courseName")}</th>
            <th>{t("coursesView.courseCategory")}</th>
            <th>{t("coursesView.authorName")}</th>
            <th>{t("coursesView.action")}</th>
          </tr>

        </thead>
        <tbody>

        {courses.courses.results.map((value,key)=>{
          return(
            <tr key={value.courseId}>
           <th scope="row">{key+1}</th>
            <td >{localize.isRtl ? value.courseName : value.courseNameEn}</td>
            <td>{localize.isRtl ? value.courseCategory:value.courseCategoryEn }</td>
            <td>{localize.isRtl ? value.author.authorName:value.author.authorNameEn}</td>
            <td>
            <Button  size="sm" color="info" className="px-2 mx-1"> <i className="fa fa-info"></i> </Button>
            <Button size="sm"color="primary" className="px-2 mx-1"> <i className="fa fa-edit"></i> </Button>
            <Button size="sm" color="danger" className="px-2 mx-1" > <i className="fa fa-trash"></i> </Button>
       
           
        
            </td>
            </tr>
          );
        })
        }

        </tbody>
     
      </Table>
       <Pagination pageSize={courses.pageSize} 
       pageIndex={courses.pageIndex} 
       totalRecord={courses.courses.totalRecords} 
       changeCallBack = {this.changePage.bind(this)}
       />
      </div>
      
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
