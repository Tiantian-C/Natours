exports.getOverview = (req, res) => {
  //1) Get Tour data from collection
    
//2)
  res.status(200).render('overview', {
    title: 'All Tours',
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
