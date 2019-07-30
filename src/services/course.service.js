import {ApiConstants} from "../constants"

export const CourseService = {
    getAllCourseWithAuthor,
    getCourseById,
};

function getAllCourseWithAuthor(pageIndex,pageSize)
{
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${ApiConstants.COURSES_API}/Course/GetAllCourseWithAuthor/${pageIndex}/${pageSize}`, requestOptions);

}

function getCourseById(CourseId)
{
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${ApiConstants.COURSES_API}/Course/GetCourseById/${CourseId}`, requestOptions);

}