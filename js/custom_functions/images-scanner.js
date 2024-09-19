const fs = require('fs');
// const folders = ['./src/courses/public_economics35/prj/', './src/courses/public_economics90/prj/', './src/courses/public_mag/prj/', , './src/courses/public_cops/prj/'];

const courses = [];
const coursesShared = [];

const array = [];

function checkFolder(folder, path) {

    fs.readdir(folder, (err, files) => {
        if (!files){
            return;
        }
        files.forEach(file => {
            if (!fs.lstatSync(folder + file).isDirectory()) {
                if (file != '.DS_Store') {
                    array.push(file);
                  
                }
            } else {
                console.log(folder + file + '/')
                checkFolder(folder + file + '/', '../' + path);
            }
        });
       // console.log(array);
        fs.writeFile(folder + path + 'resources-names.json', JSON.stringify(array),
            function (err) {
                if (err) {
                    console.error('Crap happens', err);
                }
            }
        );
    })
}

fs.readdir('./src/courses', (err, folders) => {
 
     folders.forEach(folder => {
        if (fs.lstatSync('./src/courses/' + folder).isDirectory()) {
            courses.push('./src/courses/' + folder + '/prj/');
            coursesShared.push('./src/courses/' + folder + '/');
        }
    });
    courses.forEach(folder => {
        checkFolder(folder, '../data/');
    });
    console.log("****************************************");
    console.log("COURSES Image names created successfully ");
    console.log("****************************************");


/*shared img*/
coursesShared.forEach(folder => {
    checkFolder('./src/shared/images/', "../../../"+folder+'/data/');
});


   
    console.log("****************************************");
    console.log("SHARED Image names created successfully ");
    console.log("****************************************");


})




