class APIFeatures {
  //Tour.find(), req.query
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
    filter() {
      //1A)Filtering
      const queryObj = { ...this.queryString };
      const excludesFields = ['page', 'sort', 'limit', 'fields'];
      excludesFields.forEach((el) => delete queryObj[el]);

      //1B)Advanced Filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      this.query = this.query.find(JSON.parse(queryStr));
      console.log(JSON.parse(queryStr));
      return this;
    }
 

  sort() {
    //2)SORTING
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      //sort('price ratingAverage')
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createAt');
    }
    return this;
  }

  //3)Field LIMITING
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    //4)Pagination
      if (this.queryString.page && this.queryString.limit) {
          
      }
   

    return this;
  }
}

module.exports = APIFeatures;