
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.index2 = function(req, res){
  res.render('index2', { title: 'Express' });
};

exports.happy_m = function(req, res){
  res.render('happy_m', { title: 'Express' });
};