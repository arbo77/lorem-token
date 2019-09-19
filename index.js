module.exports = (size) => {
  size = size || 128;
  const rnd = (min, max) => {
    return parseInt(Math.random() * (max - min) + min); 
  }
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*-_.:;?/><"
  let _ = '';
  for(let i=0;i<size;i++){
    _+=chars.substr(rnd(0,chars.length),1)
  }
  return _;
}