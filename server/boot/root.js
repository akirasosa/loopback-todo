module.exports = function(server) {
  var router = server.loopback.Router();
  router.get('/', function(req, res) {
    res.render('index', {bundleJs: server.get('bundleJs')});
  });
  server.use(router);
};
