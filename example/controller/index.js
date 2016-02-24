exports.index = function* () {

	yield this.bindDefault();

	console.log(this.backData);

    this.body = 'hello world!';
}
exports.index.method = 'get';