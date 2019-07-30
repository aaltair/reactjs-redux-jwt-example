import { BaseActions } from "./base.actions";
import {CourseStates} from "../states"
import {CourseService} from "../../services"
import { getTranslate as t  } from "../../helpers"
class courseAction extends BaseActions{
    getAllCourseWithAuthor(pageIndex,pageSize){
        return dispatch => {
            dispatch(request({ pageIndex,pageSize }));
    
            CourseService.getAllCourseWithAuthor(pageIndex, pageSize)
                .then(
                    courses => {                
                     dispatch(success({...courses,pageIndex,pageSize}));
               
                    },
                    error => {
                        dispatch(failure(error));
                        this.showError(t()("courseView.serverError"))
                    }
                );
        };
        
        function request(courses) { return { type: CourseStates.COURSES_REQUEST, courses } }
        function success(courses) { return { type: CourseStates.GET_ALL_COURSES_SUCCESS, courses } }
        function failure(courses) { return { type:  CourseStates.GET_ALL_COURSES_FAILURE, courses } }
    }
    

}

export const courseActions =new courseAction();