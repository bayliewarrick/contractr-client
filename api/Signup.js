const axios = require('axios')
exports.signUp = async (f, l, e, pw, p) => {

 
     const res = await axios.post('http://10.0.0.202:3001/user/signup', {userObject: {first_name:f, last_name:l, email:e, pw_hash:pw, phone_number:p}}).then(function (response) {
       
       alert('Created User: ' + response.data.result.email)
     })
     .catch(function (error) {
       alert(error);
     });
 
     
   }