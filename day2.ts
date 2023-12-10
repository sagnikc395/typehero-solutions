/*
update CookieSurveyInput so that it will return a union of 
all the names of the various different cookies.

check from cookieInventory

*/

type CookieSurveyInput<T> = Extract<keyof T,string>;
