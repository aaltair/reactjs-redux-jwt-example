import { CourseStates } from "../states";

const initialState = {
  courses: {
    totalRecords: 0,
    results: []
  },
  course: {},
  loading: false,
  pageIndex:0,
  pageSize:0
};
export function courses(state = initialState, action) {
  switch (action.type) {
    case CourseStates.COURSES_REQUEST:
      return {
        courses: {
          totalRecords: 0,
          results: []
        },
        course: {},
        loading: true,
        pageIndex:action.pageIndex,
        pageSize:action.PageSize
      };
    case CourseStates.GET_ALL_COURSES_SUCCESS:
      
      return {
        courses: action.courses,
        course: {},
        loading: false,
        pageIndex:action.courses.pageIndex,
        pageSize:action.courses.pageSize
      };
    case CourseStates.GET_ALL_COURSES_FAILURE:
      return {};
    case CourseStates.Create_NEW_COURSE_SUCCESS:
      return {};
    case CourseStates.Create_NEW_COURSE_FAILURE:
      return {};
    case CourseStates.UPDATE_COURSE_SUCCESS:
      return {};
    case CourseStates.UPDATE_COURSE_FAILURE:
      return {};
    case CourseStates.DELETE_COURSE_SUCCESS:
      return {};
    case CourseStates.DELETE_COURSE_FAILURE:
      return {};

    default:
      return state;
  }
}
