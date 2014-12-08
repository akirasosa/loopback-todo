module.exports = function(Todo) {

  Todo.remoteMethod('destroyAll', {
    description: 'Delete all matching records',
    accepts: {arg: 'where', type: 'object', description: 'filter.where object'},
    http: {verb: 'del', path: '/'},
  });

};

