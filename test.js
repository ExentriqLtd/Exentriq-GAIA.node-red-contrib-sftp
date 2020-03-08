var Client = require('ssh2-sftp-client');
var fs = require('file-system');
var sftp = new Client();

var keyfile = '/ome/calogero/sviluppo/exentriq/ferrero/workspace/kubernetes_ferrero/ferrero_v2/sftp/chiavi/id_rsa.pem';
var key;
if(keyfile){
  try{
    key = fs.readFileSync(keyfile);
  }
  catch(e){

  }
}

sftp.connect({
  host: '127.0.0.1',
  port: '8022',
  username: 'ferrerotest',
  privateKey: key
}).then(() => {
  return sftp.list('/ferrero_to_exentriq');
}).then(data => {
  console.log(data, 'the data info');
}).catch(err => {
  console.log(err, 'catch error');
});
