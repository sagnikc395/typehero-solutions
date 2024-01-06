// implementing a absolute type.
// the type will take in string, number of bigint and output will ne a 
// positive number string 

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Rest}` ? Rest : `${T}`;

