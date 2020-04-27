const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class AboutService {
  constructor(datafile) {
    this.datafile = datafile;
  }
  // ABOUT DATA
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  }
  // ABOUT DATA LIST
  async getList() {
    const data = await this.getData();
    return data;
  }
}
module.exports = AboutService;
