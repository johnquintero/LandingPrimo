const mysql =  requiere('mysql');

const config  = {
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'api',
};

//Create a Mysql pool
const pool = mysql.createPool(config);

// Export the pool
export default pool;