/* 
*@user: suxin
*@DATE: 2018/7/13
*@TIME: 18:15
*/
/**
 * getMime
 * @param extname
 * @returns {string}
 */
exports.getMime=function(extname){
  switch (extname){
    case '.html':
      return 'text/html';
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    default:
      return 'text/html'
  }
}